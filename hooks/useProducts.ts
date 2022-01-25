import { useQuery } from 'react-query';
import { api } from '../services/api';
import { Products } from '../types/Product';

const useProducts = () => {
  return useQuery<Products>('products', () => api.getProducts());
};

export default useProducts;
