import CommentsSlider from "@/components/templates/CommentsSlider";
import Landing from "@/components/templates/landing";
import siteImprovementCommentsModel from "../../models/siteImprovementComments";
import connectToDb from "../../configs/db";
import { Ue } from "../../utils/ultraElem";
import productModel from "../../models/product";

export default async function Home() {
  connectToDb();
  const products = await productModel.find({}, "name image");

  const siteImprovementComments = await siteImprovementCommentsModel
    .find({ publish: true }, "comment createdAt")
    .populate("user", "fullName")
    .sort({ _id: -1 })
    .limit(6)
    .lean();

  return (
    <div className="w-full overflow-y-scroll flex flex-col items-center">
      <Landing data={JSON.parse(JSON.stringify(products))} />
      <Ue className="w-full py-24 md:px-40 px-8  bg-[#D8E27C] footer-shadow ">
        <CommentsSlider
          comments={JSON.parse(JSON.stringify(siteImprovementComments))}
        />
      </Ue>
    </div>
  );
}
