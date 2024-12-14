"use client";
import React from "react";
const Aos = dynamic(() => import("../../../utils/Aos"), {
  ssr: false,
});
import CategoryContainer from "./CategoryContainer";
import dynamic from "next/dynamic";

const Landing = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center sm:px-20 p-4 py-44 image"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <div className="w-full flex flex-col items-center gap-8">
        <Aos />
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-5xl sm:text-7xl font-bold text-center text-white tsh leading-normal"
        >
          فروش برنج مازندرانی با کیفیت
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          className="xm:block hidden text-3xl sm:text-4xl font-bold text-center text-white tsh p-8 bg-black/10 backdrop-blur-sm rounded-3xl"
        >
          برنج‌های مازندرانی مستقیم از تولیدکننده به خانه شما می‌آید. همین حالا
          سفارش دهید و لذت برنج مازندرانی را بچشید
        </p>
        <CategoryContainer />
      </div>
    </div>
  );
};

export default Landing;
