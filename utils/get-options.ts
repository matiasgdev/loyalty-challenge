import type { InfiniteData } from "react-query";
import { ProductsApiResponse } from "../types/ProductsApiResponse";

export const getOptions = (data: InfiniteData<ProductsApiResponse>) => {
  let options: string[] = [];
  data.pages.forEach((page) => {
    options = [...new Set(page.results.map((product) => product.category))];
  });
  return ['All products', ...options];
}