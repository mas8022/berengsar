"use client"; // Ensure the component is rendered on the client side
import React from "react";
import MenuBtn from "./MenuBtn";
import Link from "next/link";


const UlNavbar = () => {
  return (
    <>

    {/* ul in desktop screen */}
      <ul className="hidden sm:flex h-16 px-10 items-center gap-10 child:font-bold child:text-2xl child:text-white bg-second rounded-3xl">
        <Link href={'/'}>خانه</Link>
        <li>محصولات</li>
        <li>درباره ما</li>
        <Link href={'/contactUs'}>تماس باما</Link>
      </ul>

      {/* ul in mobile screen */}
      <MenuBtn />
    </>
  );
};

export default UlNavbar;



