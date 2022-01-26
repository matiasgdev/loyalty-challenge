import { Products } from "../types/Product";

export const createPlaceholderProducts = (length: number): Products => {
  const products: Products = [];
  for (let i = 0; i < length; i++) {
    products.push({
      _id: i.toString(),
      name: '',
      category: '',
      cost: 0,
      img: {
        url: '/assets/icons/aerolab-placeholder.svg',
      },
    });
  }
  return products;
};