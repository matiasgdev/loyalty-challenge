import { History } from "../types/History";
import { Product } from "../types/Product";

export const isProductRedemeed = (product: Product, history: History) => {
  return history.some((historyItem) => historyItem.productId === product._id);
};
