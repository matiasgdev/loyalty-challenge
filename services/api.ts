import { History } from '../types/History';
import { Points } from '../types/Points';
import { Products } from '../types/Product';
import { ProductsApiResponse } from '../types/ProductsApiResponse';
import { Redeem } from '../types/Redeem';
import { User } from '../types/User';
import { _fetch } from '../utils/_fetch';
import { aerolabApi } from './aerolab-api';
import { customNextApi } from './custom-next-api';

export const api = {
  getProducts: () => aerolabApi<Products>('products'),
  getPaginatedProducts: (page: number, limit: number) =>
    customNextApi<ProductsApiResponse>(`/api/products?page=${page}&limit=${limit}`),
  getUser: () => aerolabApi<User>('user'),
  getHistory: () => aerolabApi<History>('user-history'),
  redeem: (productId: string) => aerolabApi<Redeem>('redeem', { productId }),
  addPoints: (amount: number) => aerolabApi<Points>('add-points', { amount }),
};
