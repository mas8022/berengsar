import connectToDb from "../../../../../configs/db.ts";
import orderModel from "../../../../../models/orderModel.js";
import { redirect } from "next/navigation";
import { verifyPayment } from "../../../../../utils/zarinpal.js";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const authority = req.nextUrl.searchParams.get("Authority");
    const status = req.nextUrl.searchParams.get("Status");

    await connectToDb();

    const checkout = await orderModel.findOne({ authority });

    if (!checkout) {
      return NextResponse.redirect(`http://localhost:3000/paymentResult?status=404&receipt=false}`);
    }

    const { success, refId } = await verifyPayment({
      authority: checkout.authority,
      amount: checkout.price,
    });

    console.log("Ref Id =>", refId);
    

    if (!success) {
      return NextResponse.redirect(`http://localhost:3000/paymentResult?status=403&receipt=false`);
    }

    checkout.status = "success";
    checkout.receipt = refId;

    await checkout.save();

    console.log("refId: ", refId);

    return NextResponse.redirect(`http://localhost:3000/paymentResult?status=201&receipt=${refId}`);
  } catch (error) {
    return NextResponse.redirect(`http://localhost:3000/paymentResult?status=500&receipt=false`);
  }
}
