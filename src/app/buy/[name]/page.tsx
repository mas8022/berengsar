import Title from "@/components/modules/Title";
import BuyForm from "@/components/templates/BuyForm";
import Image from "next/image";
import React from "react";
import { Me } from "../../../../utils/me";
import PermissionAlert from "@/components/modules/PermissionAlert";
import productModel from "../../../../models/product.js";
import Link from "next/link";

const Buy = async ({ params }: { params: { name: string } }) => {
  let { name } = await params;
  name = decodeURIComponent(name);

  const product = await productModel.findOne({ name: name.trim() });

  const meData = await Me();
  const myLocation = meData.location || null;

  return !!product.count ? (
    !!meData ? (
      <div className="w-full sm:h-screen h-auto md:px-40 px-8 sm:pt-56 pt-40 pb-24 flex justify-between gap-24">
        <div className="w-full flex flex-col gap-6">
          <Title title="اطلاعات درخواست سفارش" />
          <p className="xxd:hidden text-center font-bold text-emerald-900/70 text-3xl">
            {name}
          </p>
          <BuyForm
            myLocation={JSON.parse(JSON.stringify(myLocation))}
            name={product.name}
          />
        </div>

        <div className="xxd:flex hidden !w-[50rem] p-12 rounded-3xl flex-col items-center justify-between bg-second/20 shadow-md gap-4">
          <p className="font-light text-4xl text-emerald-600">{product.name}</p>
          <Image
            src={product.image}
            width={400}
            height={500}
            alt="عکس محصول"
            className="rounded-3xl"
          />

          <div className="w-full h-28 text-emerald-600/90 text-2xl center flex-col gap-4 font-light p-4">
            <div className="w-full flex justify-between items-end">
              <span>هزینه محصول:</span>
              <p className="font-light text-3xl text-emerald-600">
                {product.price.toLocaleString("fa-IR")}
                <span className="opacity-0">.</span>ریال
              </p>
            </div>
            <div className="w-full flex justify-between items-end border-b-2 border-b-second pb-3">
              <span>هزینه ارسال:</span>
              <p className="font-light text-3xl text-emerald-600">
                {(870000).toLocaleString("fa-IR")}
                <span className="opacity-0">.</span>ریال
              </p>
            </div>
            <div className="w-full flex justify-between items-end text-3xl">
              <span>هزینه کل:</span>
              <p className="font-light text-4xl text-emerald-600 flex">
                {(10300000).toLocaleString("fa-IR")}
                <span className="opacity-0">.</span>ریال
              </p>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <PermissionAlert />
    )
  ) : (
    <div className="w-full h-screen center flex-col gap-8 p-6">
      <p className="p-4 rounded-lg bg-rose-500/20 text-rose-700 font-light text-3xl sm:text-start !text-center center shadow-md">
        با عرض پوزش این محصول در انبار ما ناموجود شده در اسرع وقت ان را موجود
        خواهیم کرد.
      </p>
      <Link href={"/"} className="btn bg-second text-first text-2xl">
        محصولات
      </Link>
    </div>
  );
};

export default Buy;
