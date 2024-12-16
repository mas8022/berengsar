"use client";
import React, { useState } from "react";
import { MoonLoader } from "react-spinners";
import Link from "next/link";
import { useSanitizeInput } from "../../../utils/useSanitizeInput";
const iranianPhoneRegex = /^(\+98|0)?9\d{9}$/;

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [isSendCode, setIsSendCode] = useState(false);

  const requestOtp = async () => {
    if (!iranianPhoneRegex.test(phone)) {
      return setPhoneError(true);
    } else {
      setPhoneError(false);
    }

    setLoading(true);
    
    await fetch("/api/sms/request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone }),
    });

    setLoading(false);
  };

  return (
    <div className="w-full h-screen center lgg:p-0 py-32 !pb-36 px-7">
      <form className="w-[40rem] bg-second/20 rounded-3xl flex flex-col gap-7 p-[2rem] sm:p-[3rem] md:sm:p-[5rem] py-[4rem] items-center justify-center">
        <input
          className="w-full h-14 rounded-lg border-0 px-[1.5rem] text-[1.3rem] bg-white text-black/70"
          name="email"
          type="text"
          onChange={(e) => setPhone(useSanitizeInput(e.target.value))}
          value={phone}
          placeholder="شماره موبایل"
        />
        {phoneError && (
          <span className="text-xl text-red-600">
            شماره موبایل تان را به درستی وارد کنید
          </span>
        )}

        <div
          onClick={requestOtp}
          className="w-full rounded-lg border-0 h-[4.5rem] text-3xl bg-second active:bg-second/70 text-white flex items-center justify-center cursor-pointer"
        >
          {loading ? (
            <MoonLoader size={20} color="#fff" />
          ) : (
            <span>ارسال کد</span>
          )}
        </div>
        <p className="text-[1.4rem] text-black/30">
          در صورت نداشتن حساب کاربری{" "}
          <Link href={"/signup"} className="text-blue-700/60">
            ثبت نام
          </Link>{" "}
          کنید
        </p>
      </form>
    </div>
  );
}
