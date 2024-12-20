import React from "react";
import contactUsMessageModel from "../../../../models/contactUsMessage";
import connectToDb from "../../../../configs/db";
import ContactUsMessageBox from "../../../components/modules/ContactUsMessageBox";

const page = async () => {
  await connectToDb();
  const comments = await contactUsMessageModel.find(
    { isAnswer: false },
    "fullName email phone message"
  );

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 lgg:grid-cols-2  2xl:grid-cols-3 gap-8">
        {comments?.length
          ? comments.map((item) => (
              <ContactUsMessageBox
                commentData={JSON.parse(JSON.stringify(item))}
                key={item._id}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default page;
