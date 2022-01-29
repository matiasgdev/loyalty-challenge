import { History } from "./History";

export interface User {
  _id: string;
  name: string;
  points: number;
  createDate: string;
  redeemHistory: History
}
