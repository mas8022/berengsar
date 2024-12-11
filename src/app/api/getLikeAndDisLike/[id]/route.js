import likeModel from "../../../../../models/like";
import disLikeModel from "../../../../../models/disLike";
import { revalidatePath } from "next/cache";

export async function GET(req, { params }) {
  try {
    const { id } = await params;

    const like = await likeModel.countDocuments({
      siteImprovementComment: id,
    });

    const disLike = await disLikeModel.countDocuments({
      siteImprovementComment: id,
    });

    revalidatePath("/", "page");
    return Response.json({ like, disLike });
  } catch (error) {
    return Response.json(
      { message: "اینترنت خود را چک کنید" },
      { status: 500 }
    );
  }
}
