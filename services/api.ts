import { History } from '../types/History';
import { Points } from '../types/Points';
import { Products } from '../types/Product';
import { Redeem } from '../types/Redeem';
import { User } from '../types/User';
import { _fetch } from '../utils/_fetch';
import { aerolabApi } from './aerolab-api';


export const api = {
  getProducts: () => aerolabApi<Products>('products'),
  getUser: () => aerolabApi<User>('user'),
  getHistory: () => aerolabApi<History>('user-history'),
  redeem: (productId: string) => aerolabApi<Redeem>('redeem', { productId }),
  addPoints: (amount: number) => aerolabApi<Points>('add-points', { amount }),
};
