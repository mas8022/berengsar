"use client"; // Ensure the component is rendered on the client side
import React from "react";
import MenuBtn from "./MenuBtn";
import Link from "next/link";

const UlNavbar = () => {
  return (
    <>
      {/* ul in desktop screen */}
      <ul className="hidden sm:flex h-16 px-10 items-center gap-10 child:font-bold child:text-2xl child:text-white bg-second rounded-3xl">
        <Link href={"/"}>خانه</Link>

        <ul className="relative group flex gap-2 items-center">
          <li className="dark:text-first">محصولات</li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 group-hover:rotate-180 !dark:invert"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>

          <ul className="w-[23rem] absolute right-0 rounded-xl top-12 mt-4 bg-second shadow-md p-6 flex flex-col gap-y-1 border-y-2 border-y-third invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:mt-2 child:cursor-pointer child-hover:bg-black/10 child:rounded-lg child:pr-4 child:h-12 child:flex child:items-center pb-16 delay-100 child:text-first">
            <Link
              href={"/buy/طارم هاشمی پنج کیلو"}
              className="text-[1.4rem] lg:text-[1.7rem] text-black/90 cursor-pointer active:text-black/20 font-light"
            >
              طارم هاشمی پنج کیلو
            </Link>
            <Link
              href={"/buy/طارم هاشمی ده کیلو"}
              className="text-[1.4rem] lg:text-[1.7rem] text-black/90 cursor-pointer active:text-black/20 font-light"
            >
              طارم هاشمی ده کیلو
            </Link>
            <Link
              href={"/buy/طارم هاشمی پانزده کیلو"}
              className="text-[1.4rem] lg:text-[1.7rem] text-black/90 cursor-pointer active:text-black/20 font-light"
            >
              طارم هاشمی پانزده کیلو
            </Link>
            <Link
              href={"/buy/طارم هاشمی بیست کیلو"}
              className="text-[1.4rem] lg:text-[1.7rem] text-black/90 cursor-pointer active:text-black/20 font-light"
            >
              طارم هاشمی بیست کیلو
            </Link>
          </ul>
        </ul>

        <Link href={"/aboutUs"}>درباره ما</Link>
        <Link href={"/contactUs"}>تماس باما</Link>
      </ul>

      {/* ul in mobile screen */}
      <MenuBtn />
    </>
  );
};

export default UlNavbar;
