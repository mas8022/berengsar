import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { generateToken, verifyRefreshToken, verifyToken } from "./authTools";
import connectToDb from "../configs/db";
import userModel from '@/../models/user'

export default async function VerifyManager() {
  const refreshToken = (await cookies()).get("refresh-token")?.value;
  if (!refreshToken) {
    return redirect("/login");
  }

  const refreshTokenPayLoad = verifyRefreshToken(
    refreshToken,
    process.env.refreshPrivateKey
  );

  if (!refreshTokenPayLoad) {
    return redirect("/login");
  }

  await connectToDb();
  const user = await userModel.findOne({ refreshToken }, "email roll");
  const userRoll = user?.roll;
  if (userRoll !== "ADMIN") {
    return notFound();
  }

  const token = (await cookies()).get("token")?.value;
  if (token) {
    const validationToken = verifyToken(token, process.env.privateKey);
    if (validationToken) {
      return userRoll ? userRoll : false;
    }
  }

  const userEmail = user?.email;
  if (!userEmail) {
    return redirect("/login");
  }

  const newToken = generateToken({ userEmail }, process.env.privateKey);
  (await cookies()).set("token", newToken, {
    httpOnly: true,
    path: "/",
  });
}
