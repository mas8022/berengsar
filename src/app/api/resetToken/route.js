import { revalidatePath } from "next/cache";
import ResetToken from "../../../../utils/resetToken";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const userRoll = await ResetToken();

    revalidatePath("/", "layout");

    return NextResponse.json({
      message: "reset token success",
      status: 200,
      roll: userRoll ? userRoll : "USER",
    });
  } catch (error) {
    return NextResponse.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
