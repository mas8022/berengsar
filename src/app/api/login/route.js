import { cookies } from "next/headers";
import userModel from "../../../../models/user.js";
import connectToDb from "../../../../configs/db.ts";
import {
  generateRefreshToken,
  generateToken,
  verifyPassword,
} from "../../../../utils/authTools.js";
import { revalidatePath } from "next/cache";

export async function POST(req) {
  try {
    connectToDb();
    const { email, password } = await req.json();

    const user = await userModel.findOne({ email });
    const isValidPassword = await verifyPassword(password, user.password);
    if (!isValidPassword || !user) {
      return Response.json({
        message: "رمز عبور یا ایمیل شما نا معتبر است",
        status: 401,
      });
    }

    const refreshToken = generateRefreshToken(
      { email },
      process.env.refreshPrivateKey
    );

    await userModel.findOneAndUpdate(
      { email },
      {
        $set: {
          refreshToken,
        },
      }
    );

    const newAccessToken = generateToken({ email }, process.env.privateKey);

    await cookies().set("token", newAccessToken, {
      httpOnly: true,
      path: "/",
    });

    await cookies().set("refresh-token", refreshToken, {
      httpOnly: true,
      path: "/",
      expires: new Date().getTime() + 15 * 24 * 60 * 60 * 1000,
    });

    revalidatePath("/", "layout");
    console.log("yes");

    return Response.json({
      message: "با موفقیت وارد حساب قبل خود شدید",
      status: 200,
    });
    
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
