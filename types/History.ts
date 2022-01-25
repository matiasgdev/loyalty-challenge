import { Product } from "./Product";

interface HistoryItem extends Product {
  productId: string;
};

export type History =  HistoryItem[];