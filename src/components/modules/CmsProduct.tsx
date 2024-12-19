"use client";
import React from "react";
import { product } from "../../../types";
import Image from "next/image";
import { ObjectId } from "mongoose";
import { useModal } from "../../../utils/useModal";

const CmsProduct = ({ data }: { data: product }) => {
  const { _id, name, price, count, image } = data;

  const { openModal, closeModal, Modal } = useModal();

  const editProduct = (id: string | ObjectId) => {
    //code
  };

  return (
    <>
    <Modal>
      <div className="w-[40rem] h-[50rem] rounded-lg shadow-md bg-second"></div>
    </Modal>
      <div className="w-[25rem] p-8 rounded-xl shadow-md bg-second flex flex-col items-center gap-8">
        <p className="text-3xl font-bold text-first">{name}</p>
        <Image
          src={image}
          width={300}
          height={450}
          alt="عکس محصول"
          className="rounded-lg"
        />
        <div className="w-full flex justify-between items-end text-first text-2xl">
          <span>قیمت محصول:</span>
          <p className="font-light text-3xl text-first">
            {price.toLocaleString("fa-IR")}
            <span className="opacity-0">.</span>ریال
          </p>
        </div>
        <div className="w-full flex justify-between items-end text-first text-2xl">
          <span>تعداد محصول:</span>
          <p className="font-light text-3xl text-first">
            {count.toLocaleString("fa-IR")}
          </p>
        </div>
        <div
          onClick={openModal}
          className="btn w-full bg-emerald-700 center text-first"
        >
          ویرایش محصول
        </div>
      </div>
    </>
  );
};

export default CmsProduct;
