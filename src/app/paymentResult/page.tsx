"use client"
import React from "react";
const Aos = dynamic(() => import("../../../utils/Aos"), {
  ssr: false,
});
import CheckIcon from "../../components/svgs/checkout";
import { NextRequest } from "next/server";
import dynamic from "next/dynamic";

const page = (req: NextRequest) => {
  // const {Authority, Status} = req.searchParams.get

  return (
    <div className="w-full h-screen center bg-second px-6">
      <Aos />
      <div
        data-aos="zoom-in"
        data-aos-duration="300"
        className="w-[70rem] h-[40rem] rounded-xl shadow-2xl center gap-8 bg-first p-12"
      >
        <div
          className="w-full h-full p-12 shadow-md bg-second rounded-xl"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          <div
            className="w-full h-full p-12 shadow-md rounded-xl bg-first flex flex-col items-center gap-4"
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            <CheckIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
