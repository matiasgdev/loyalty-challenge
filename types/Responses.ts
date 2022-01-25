import { Points } from "./Points";
import { Products } from "./Product";
import { Redeem } from "./Redeem";
import { User } from "./User";

export type Responses = {
  user: User;
  products: Products;
  redeem: Redeem;
  'add-points': Points;
  'user-history': History;
}