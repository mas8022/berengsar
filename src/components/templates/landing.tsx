"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import Aos from "../../../utils/Aos";

const Landing = () => {
  return (
    <div
      className="w-full h-screen image center px-20"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <div className="center flex-col gap-14">
        <Aos />
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-5xl sm:text-7xl font-bold text-center text-white tsh leading-normal"
        >
          فروش برنج مازندرانی با کیفیت
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="w-full sm:w-1/2 h-32 self-center bg-white/10 backdrop-blur-lg rounded-2xl center px-8"
        >
          <div className="w-full border-b-2 border-white/40 flex items-center justify-between px-4 pb-2">
            <input
              type="text"
              placeholder="چه برنجی می خواهید..."
              className="text-3xl text-white font-bold outline-none focus:outline-none bg-black/0 tsh placeholder:text-first placeholder:tsh"
            />
            <FaSearch
              size={20}
              color="white"
              className="cursor-pointer active:scale-95"
            />
          </div>
        </div>
        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-3xl sm:text-4xl font-bold text-center text-white tsh p-8 bg-black/10 backdrop-blur-sm rounded-3xl"
        >
          برنج‌های مازندرانی مستقیم از تولیدکننده به خانه شما می‌آید. همین حالا
          سفارش دهید و لذت برنج مازندرانی را بچشید
        </p>
      </div>
    </div>
  );
};

export default Landing;
