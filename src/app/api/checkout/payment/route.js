import connectToDb from "../../../../../configs/db.ts";
import productModel from "../../../../../models/product.js";
import userModel from "../../../../../models/user.js";
import { Me } from "../../../../../utils/me.js";
import orderModel from "../../../../../models/orderModel.js";
import useZarinpal from "../../../../../utils/zarinpal.js";
import { redirect } from "next/navigation";

export async function POST(req) {
  try {
    const { province, city, postalCode, fullAddress, name } = await req.json();

    connectToDb();

    const meData = await Me();

    await userModel.findOneAndUpdate(
      { _id: meData, _id },
      {
        $set: {
          location: {
            province,
            city,
            postalCode,
            fullAddress,
          },
        },
      }
    );

    const updatedProduct = await productModel.findOneAndUpdate(
      { name, count: { $gt: 0 } },
      { $inc: { count: -1 } },
      { new: true }
    );

    if (!updatedProduct) {
      return Response.json({
        message: "موجودی کالا در انبار کافی نیست",
        status: 404,
      });
    }

    const order = new orderModel({
      user: meData._id,
      province,
      city,
      postalCode,
      fullAddress,
      name,
      price,
      status: "paying",
    });

    const product = await productModel.findOne({ name }, "price");
    const price = product?.price;

    const { success, authority, paymentUrl } = await useZarinpal.createPayment({
      amount: price,
      description: `پرداخت برای سفارش شماره ${order._id}`,
      mobile: meData.phone,
    });

    if (!success) {
      await productModel.findOneAndUpdate({ name }, { $inc: { count: 1 } });

      order.status = "fail";

      return Response.json({
        message: "عملیات با شکست روبرو شد",
        status: 401,
      });
    }

    order.authority = authority;

    order.save();

    return redirect(paymentUrl);

  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
