export async function POST(req) {
  try {
    const formData = await req.formDate();

    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");

    console.log("======> ", { fullName, email, phone });

    return Response.json({
      status: 200,
    });
  } catch (error) {
    return Response.json({ message: "اینترنت خود را چک کنید", status: 500 });
  }
}
