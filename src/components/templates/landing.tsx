"use client";
import React from "react";
import Aos from "../../../utils/Aos";
import CategoryContainer from "./CategoryContainer";

const Landing = () => {
  return (
    <div
      className="w-full h-screen center px-20"
    >
      <div className="center flex-col gap-14 -mt-10">
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
          className="text-3xl sm:text-4xl font-bold text-center text-white tsh p-8 bg-black/10 backdrop-blur-sm rounded-3xl"
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
