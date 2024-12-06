import Image from "next/image";
import React from "react";
import Atropos from "atropos/react";

const CategoryBox = () => {
  return (
    <Atropos activeOffset={30} shadow={false} duration={100}>
      <div className="w-96 h-[35rem] p-8 rounded-3xl bg-black/10 overflow-hidden flex flex-col items-center justify-between">
        <Image
          src={"/images/test.png"}
          width={300}
          height={300}
          alt="عکس محصول"
          className="w-full h-3/4 object-cover rounded-xl"
        />
        <button className="w-full btn bg-green-500 text-first text-3xl">
          خرید
        </button>
      </div>
    </Atropos>
  );
};

export default CategoryBox;
