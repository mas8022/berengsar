import { siteImprovementCommentType } from "@/../../types";
import connectToDb from "../../../../configs/db";
import siteImprovementCommentModel from "../../../../models/siteImprovementComments";
import CmsCommentSendedCart from "@/components/modules/CmsCommentSendedCart";

const page = async () => {
  connectToDb();

  const comments: siteImprovementCommentType[] =
    await siteImprovementCommentModel
      .find({ publish: false }, "comment user")
      .populate<{ user: { fullName: string; email: string } }>(
        "user",
        "fullName email"
      )
      .lean<siteImprovementCommentType[]>()
      .exec();

  return (
    <div>
      <div className="w-full flex flex-col items-end gap-40 py-[5rem] md:pr-14">
        <div className="w-full flex justify-center">
          {comments?.length ? (
            <div className="grid grid-cols-1 lgg:grid-cols-2  2xl:grid-cols-3 gap-8">
              {comments.map((item) => (
                <CmsCommentSendedCart
                  data={JSON.parse(JSON.stringify(item))}
                  key={String(item._id)}
                />
              ))}
            </div>
          ) : (
            <div className="w-full h-56 flex items-center justify-center border-y-2 border-second/70 bg-second/15 dark:bg-second/5 text-second text-4xl rounded-lg">
              محصولی در این قسمت وجود ندارد
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
