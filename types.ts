import { ObjectId } from "mongoose";

// نوع مربوط به مکان
export interface ILocation {
  province?: string; // اختیاری
  city?: string; // اختیاری
  postalCode?: string; // اختیاری
  fullAddress?: string; // اختیاری
}

// نوع مربوط به کاربر
export interface User {
  _id: ObjectId; // شناسه کاربر
  fullName: string; // نام کامل
  email: string; // ایمیل
  password: string; // رمز عبور هش شده
  phone: number; // شماره تماس
  check: boolean; // وضعیت تأیید
  refreshToken: string; // توکن رفرش
  roll: "ADMIN" | "USER"; // نقش کاربر (مقادیر ثابت)
  location?: ILocation; // مکان (اختیاری)
}
