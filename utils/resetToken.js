import { cookies } from "next/headers";
import { verifyRefreshToken, generateToken, verifyToken } from "./authTools";
import { redirect } from "next/navigation";
import userModel from "../models/user.js";
import connectToDb from "../configs/db.ts";

async function ResetToken() {
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

  connectToDb();
  const user = await userModel.findOne({ refreshToken }, "email roll");

  const userEmail = user?.email;
  if (!userEmail) {
    return redirect("/login");
  }

  const userRoll = user?.roll;
  const token = (await cookies()).get("token")?.value;
  if (token) {
    const validationToken = verifyToken(token, process.env.privateKey);
    if (validationToken) {
      return userRoll ? userRoll : false;
    }
  }

  const newToken = generateToken({ userEmail }, process.env.privateKey);
  (await cookies()).set("token", newToken, {
    httpOnly: true,
    path: "/",
  });
}

export default ResetToken;
