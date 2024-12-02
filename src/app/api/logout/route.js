import { revalidatePath } from "next/cache";
const { cookies } = require("next/headers");

export async function POST() {
  try {
    cookies().delete("token");
    cookies().delete("refresh-token");

    revalidatePath('/', "layout")

    return Response.json({
      message: "با موفقیت از حساب تان خارج شدید",
      status: 200,
    });
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
