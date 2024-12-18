import React from "react";
import Product from "../modules/Product";

const CategoryContainer = ({
  data,
}: {
  data: { name: string; image: string }[];
}) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center llg:p-10 rounded-3xl gap-8">
        {data?.length
          ? data.map((item) => (
              <Product data={JSON.parse(JSON.stringify(item))} />
            ))
          : null}
      </div>
    </div>
  );
};

export default CategoryContainer;
