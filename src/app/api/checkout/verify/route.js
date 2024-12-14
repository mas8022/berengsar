import { NextResponse } from "next/server";
import connectToDb from "../../../../../configs/db.ts";
import orderModel from "../../../../../models/orderModel.js";
import useZarinpal from "../../../../../utils/zarinpal.js";
import { redirect } from "next/navigation";

export async function GET(req) {
  try {
    const { searchParams } = await req.nextUrl;
    const { Authority: authority, status } = Object.fromEntries(
      searchParams.entries()
    );

    connectToDb();

    const checkout = await orderModel.findOne({ authority });

    if (!checkout) {
      return redirect(`/paymentResult?status=${404}&receipt=${false} `);
    }

    const { success, refId } = await useZarinpal.verifyPayment();

    if (!success) {
      return redirect(`/paymentResult?status=${403}&receipt=${refId} `);
    }

    await orderModel.findOneAndUpdate(
      { authority },
      { status: "success", receipt: refId }
    );

    return redirect(`/paymentResult?status=${201}&receipt=${refId} `);
  } catch (error) {
    return redirect(`/paymentResult?status=${500}&receipt=${refId} `);
  }
}
