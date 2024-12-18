import { ObjectId } from "mongoose";

export interface product {
  _id: ObjectId;
  name: string;
  price: Number;
  count: Number;
  image: String;
}

export interface ILocation {
  province?: string;
  city?: string;
  postalCode?: string;
  fullAddress?: string;
}

export interface User {
  _id: ObjectId;
  fullName: string;
  email: string;
  password: string;
  phone: number;
  check: boolean;
  refreshToken: string;
  roll: "ADMIN" | "USER";
  location?: ILocation;
}