import Product from "@/components/modules/Product";
import React from "react";
import productModel from "../../../models/product";

const CmsProducts: React.FC = async () => {
  const products = await productModel.find({});

  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-end gap-40 py-[5rem] md:pr-14">
        <div className="w-full flex justify-center">
          {products?.length ? (
            <div className="grid grid-cols-1 lgg:grid-cols-2  2xl:grid-cols-3 gap-8">
              {/* code */}
            </div>
          ) : (
            <div className="w-full h-56 flex items-center justify-center border-y-2 border-second bg-second/15 text-second text-4xl rounded-lg">
              محصولی در این قسمت وجود ندارد
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CmsProducts;
