import { Products } from "./Product";

export interface User {
  _id: string;
  name: string;
  points: number;
  createDate: string;
  redeemHistory: Products
}
