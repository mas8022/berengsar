"use client";
import React, { useState } from "react";
import { citiesByProvince } from "../../../staticData";

const BuyForm = () => {
  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [cities, setCities] = useState<string[]>([]);

  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const province = e.target.value;
    setSelectedProvince(province);
    setCities(citiesByProvince[province] || []);
  };
  return (
    <form className="w-full flex flex-col xxd:gap-40 gap-20">
      <div className="w-full flex xxd:flex-row xxd:flex-wrap flex-col xxd:items-start items-center gap-4">
        <select
          className="w-[30rem] h-20 p-4 bg-second/30 rounded-full bg-center text-2xl outline-none focus:outline-none"
          defaultValue=""
          onChange={handleProvinceChange}
        >
          <option value="" disabled>
            انتخاب استان
          </option>
          {Object.keys(citiesByProvince).map((province) => (
            <option key={province} value={province}>
              {province}
            </option>
          ))}
        </select>

        <select
          className="w-[30rem] h-20 p-4 bg-second/30 rounded-full bg-center text-2xl outline-none focus:outline-none"
          defaultValue=""
          disabled={!selectedProvince}
        >
          <option value="" disabled>
            {selectedProvince ? "انتخاب شهر" : "ابتدا استان را انتخاب کنید"}
          </option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <div className="w-[30rem] h-20 p-4 bg-second/30 rounded-full bg-center">
          <input
            type="text"
            placeholder="کد پستی"
            className="w-full h-full rounded-full px-4 text-2xl outline-none focus:outline-none bg-transparent"
          />
        </div>
        <div className="w-[30rem] h-20 p-4 bg-second/30 rounded-full bg-center xxd:mb-0 mb-10">
          <input
            type="text"
            placeholder="آدرس کامل (خیابان، پلاک، واحد)"
            className="w-full h-full rounded-full px-4 text-2xl outline-none focus:outline-none bg-transparent"
          />
        </div>
        <p className="xxd:hidden text-center font-bold text-emerald-900/70 text-3xl">
          به مبلغ:<span className="opacity-0">.</span>
          {"1,215,00"}
          <span className="opacity-0">.</span>تومان
        </p>
      </div>

      <div className="w-full h-20 center bg-emerald-700 text-first text-3xl rounded-2xl cursor-pointer active:scale-[99%] active:bg-emerald-700/80">
        رفتن به درگاه پرداخت
      </div>
    </form>
  );
};

export default BuyForm;
