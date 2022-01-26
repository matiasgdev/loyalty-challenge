import { Products } from "../types/Product";

export const orderProductsBy = (products: Products, criteria: string) => {
  if (criteria === 'Most Recent') return products;
  return products.sort((a, b) => {
    if (criteria === 'Lowest Price') return a.cost - b.cost;
    return b.cost - a.cost;
  });
};