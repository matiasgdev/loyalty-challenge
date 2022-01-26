import { useInfiniteQuery } from 'react-query';
import { api } from '../services/api';
import store from '../store';
import { setPages } from '../store/pages/actions';
import useMediaQuery from './useMediaQuery';

export const useProductsPagination = () => {
  const { dispatch } = store.useStore();
  const isMobile = useMediaQuery(1024);
  const limit = isMobile ? 8 : 16;
  return useInfiniteQuery('products-list', ({ pageParam = 1 }) => api.getPaginatedProducts(pageParam, limit), {
    getNextPageParam: (lastPage) => (lastPage.hasMore ? lastPage.nextPage : undefined),
    onSuccess: (data) => {
      const size = data.pages.find((res) => res.total)?.total as number;
      dispatch(setPages(size));
    },
  });
};

export default useProductsPagination;
