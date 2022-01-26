import { Product } from "../types/Product";

export const canRedeemProduct = (product: Product, points: number) => {
  return !(points >= product.cost);
};