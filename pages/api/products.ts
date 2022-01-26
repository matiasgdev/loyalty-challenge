import type { NextApiRequest, NextApiResponse } from 'next';
import { api } from '../../services/api';
import { ProductsApiResponse } from '../../types/ProductsApiResponse';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response: Partial<ProductsApiResponse> = {};
  let page = Number(req.query.page ?? 1);
  let limit = Number(req.query.limit ?? -1);
  const offset = (page - 1) * limit;
  const end = page * limit;

  try {
    const products = await api.getProducts();
    response.total = products.length;
    response.results = products.slice(offset, end);
    response.size = response.results.length;
    response.hasMore = end < products.length;
    response.page = page;
    response.nextPage = page + 1;

    if (!(page === 1)) response.previousPage = page - 1;

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }

}
