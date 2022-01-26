import { Products } from "../types/Product";

export const filterProducts  = (products: Products, category: string): Products => {
  return products.filter((product) => {
    if (category === 'All products') return product;
    return product.category === category;
  });
}
