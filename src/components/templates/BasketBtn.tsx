import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const BasketBtn = () => {
  return (
    <div className="relative flex p-[10px] sm:p-[12px] rounded-full bg-second items-center justify-center cursor-pointer hover:bg-second/90 transition">
      <div className="absolute top-0 right-0 sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] rounded-full bg-red-400 text-white text-sm flex items-center justify-center font-bold border-2 border-white">
        2
      </div>
      <AiOutlineShoppingCart
        className="size-7 sm:size-9 text-white stroke-current"
        style={{ strokeWidth: 10 }}
      />
    </div>
  );
};

export default BasketBtn;
