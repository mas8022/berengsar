import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    return NextResponse.json({
      message: "پیامتان با موفقیت ارسال شد",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "اینترنت خود را چک کنید",
      status: 500,
    });
  }
}
