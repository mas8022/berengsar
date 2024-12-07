import React from "react";
import CategoryBox from "../modules/CategoryBox";

const CategoryContainer = () => {
  return (
    <div className="w-full flex items-center -mt-20">
      <div className="flex flex-wrap items-center justify-center h-96 p-10 rounded-3xl gap-8">
        <CategoryBox name={"طارم"} />
        <CategoryBox  name={"هاشمی"}/>
        <CategoryBox name={'امراللهی'}/>
        <CategoryBox name={'بینام'}/>
      </div>
    </div>
  );
};

export default CategoryContainer;
