import React from "react";
import {
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaUserCircle,
} from "react-icons/fa";
import Side from "../modules/side";
import Image from "next/image";

const MenuBtn = () => {
  return (
    <Side cls="z-20 sm:hidden" sideBarName="navbarMenuSidebar">
      <div className="w-full h-full p-8 flex flex-col justify-between bg-[#84B8AC] shadow-lg">
        {/* سربرگ */}
        <div className="w-full flex flex-col items-center gap-4">
          <Image
            src={"/images/logo.png"}
            width={100}
            height={100}
            alt="logo"
            className="image size-44"
          />
          <h2 className="text-4xl font-bold text-white">برنج سار</h2>
        </div>

        {/* منو */}
        <ul className="flex flex-col gap-6">
          <li className="flex items-center gap-4 text-white font-semibold text-xl hover:text-[#D8E27C] hover:bg-white/20 hover:scale-110 transition-all duration-300 ease-in-out p-4 rounded-lg cursor-pointer">
            <FaHome className="h-6 w-6 mr-4" /> خانه
          </li>
          <li className="flex items-center gap-4 text-white font-semibold text-xl hover:text-[#D8E27C] hover:bg-white/20 hover:scale-110 transition-all duration-300 ease-in-out p-4 rounded-lg cursor-pointer">
            <FaInfoCircle className="h-6 w-6 mr-4" /> درباره ما
          </li>
          <li className="flex items-center gap-4 text-white font-semibold text-xl hover:text-[#D8E27C] hover:bg-white/20 hover:scale-110 transition-all duration-300 ease-in-out p-4 rounded-lg cursor-pointer">
            <FaPhone className="h-6 w-6 mr-4" /> تماس با ما
          </li>
          <li className="flex items-center gap-4 text-white font-semibold text-xl hover:text-[#D8E27C] hover:bg-white/20 hover:scale-110 transition-all duration-300 ease-in-out p-4 rounded-lg cursor-pointer">
            <FaUserCircle className="h-6 w-6 mr-4" /> پروفایل کاربری
          </li>
        </ul>

        {/* فوتر */}
        <div className="text-sm text-white/90 font-light text-center mt-6 border-t-2 border-t-white/50 pt-4">
          © 2024 برنجسار
          <br />
          تمامی حقوق محفوظ است.
        </div>
      </div>
    </Side>
  );
};

export default MenuBtn;
