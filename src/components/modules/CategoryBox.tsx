import Image from "next/image";
import React from "react";
import Atropos from "atropos/react";

const CategoryBox = () => {
  return (
    <Atropos
      data-aos="zoom-in-up"
      activeOffset={30}
      shadow={false}
      duration={100}
    >
      <div className="w-96 h-[35rem] p-8 rounded-3xl bg-black/10 overflow-hidden flex flex-col items-center justify-between">
        <Image
          src={"/images/test.png"}
          width={300}
          height={300}
          alt="عکس محصول"
          className="w-full h-80 object-cover rounded-xl"
        />
        <h2 className="w-full text-center text-3xl font-bold tsh backdrop-blur-3xl rounded-full px-6 py-4 text-first bg-black/10">برنج طارم</h2>
        <button className="w-full btn bg-green-500 text-first text-3xl">
          خرید
        </button>
      </div>
    </Atropos>
  );
};

export default CategoryBox;
