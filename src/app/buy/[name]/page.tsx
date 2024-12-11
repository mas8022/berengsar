import Title from "@/components/modules/Title";
import BuyForm from "@/components/templates/BuyForm";
import Image from "next/image";
import React, { use } from "react";
import { isMe } from "../../../../utils/me";
import PermissionAlert from "@/components/modules/PermissionAlert";

const Buy = async ({ params }: { params: { name: string } }) => {
  let { name } = await params;
  name = decodeURIComponent(name);

  const permission = await isMe();

  return permission ? (
    <div className="w-full sm:h-screen h-auto md:px-40 px-8 sm:pt-56 pt-40 pb-24 flex justify-between gap-24">
      <div className="w-full flex flex-col gap-10">
        <Title title="اطلاعات درخواست سفارش" />
        <p className="xxd:hidden text-center font-bold text-emerald-900/70 text-3xl">
          {name}
        </p>
        <BuyForm />
      </div>

      <div className="xxd:flex hidden !w-[50rem] h-[50rem] p-12 rounded-3xl flex-col items-center justify-between bg-second/20 shadow-md gap-8">
        <Image
          src={"/images/test.png"}
          width={400}
          height={500}
          alt="عکس محصول"
          className="rounded-3xl"
        />
        <p className="font-light text-4xl text-emerald-600">
          870,000<span className="opacity-0">.</span>تومان
        </p>
        <div className="w-full h-28 bg-second/50 text-emerald-600/90 text-4xl center font-light shadow-md rounded-full py-4">
          {name}
        </div>
      </div>
    </div>
  ) : (
    <PermissionAlert />
  );
};

export default Buy;
