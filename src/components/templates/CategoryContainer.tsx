import React from "react";
import CategoryBox from "../modules/CategoryBox";

const CategoryContainer = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center llg:p-10 rounded-3xl gap-8">
        <CategoryBox name={" طارم هاشمی پنج کیلو"} />
        <CategoryBox name={" طارم هاشمی ده کیلو"} />
        <CategoryBox name={" طارم بینام پنج کیلو"} />
        <CategoryBox name={" طارم بینام ده کیلو"} />
      </div>
    </div>
  );
};

export default CategoryContainer;
