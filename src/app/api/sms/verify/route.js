
export async function POST() {
  try {


    return Response.json(null);
  } catch (error) {
    return Response.json(
      { message: "اینترنت خود را چک کنید" },
      { status: 500 }
    );
  }
}
