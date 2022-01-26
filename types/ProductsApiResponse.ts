import { Products } from "./Product";

export interface ProductsApiResponse {
  results: Products;
  total: number;
  size: number;
  page: number;
  nextPage: number;
  previousPage?: number;
  hasMore: boolean;
}