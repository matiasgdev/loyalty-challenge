import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';
import { api } from '../services/api';
import store from '../store';
import { setPages } from '../store/pages/actions';
import { setOptions } from '../store/products/actions';
import { Products } from '../types/Product';
import { createPlaceholderProducts } from '../utils/create-placeholder-products';
import { filterProducts } from '../utils/filter-products';
import { getOptions } from '../utils/get-options';
import { orderProductsBy } from '../utils/order-products-by';
import useUserHistory from './useUserHistory';

export const useProductsPagination = (active = false) => {
  const { data: history, isLoading: isLoadingHistory } = useUserHistory(active);
  let {
    state: {
      pages: { currentPage, limit },
      products: { selectedOption, selectedSortBy },
    },
    dispatch,
  } = store.useStore();
  const {
    data,
    isLoading: isLoadingProducts,
    isFetchingNextPage,
    isIdle,
    hasNextPage,
    hasPreviousPage,
    fetchNextPage,
  } = useInfiniteQuery('products-list', ({ pageParam = 1 }) => api.getPaginatedProducts(pageParam, limit as number), {
    getNextPageParam: (lastPage) => (lastPage.hasMore ? lastPage.nextPage : undefined),
    onSuccess: (data) => {
      const size = data.pages.find((res) => res.total)?.total as number;
      const options = getOptions(data);
      dispatch(setPages(size));
      dispatch(setOptions(options));
    },
    enabled: active,
  });

  const isLoading = useMemo(
    () => isLoadingProducts || isFetchingNextPage || isLoadingHistory || isIdle,
    [isLoadingProducts, isFetchingNextPage, isLoadingHistory, isIdle],
  );

  const filteredProducts = useMemo(
    () =>
      !isLoading
        ? orderProductsBy(
            filterProducts(data?.pages?.[currentPage - 1]?.results as Products, selectedOption),
            selectedSortBy,
          )
        : createPlaceholderProducts(limit as number),
    [selectedSortBy, currentPage, selectedOption, data?.pages, isLoading, limit],
  );

  return {
    isLoading,
    filteredProducts,
    length: filteredProducts.length,
    history,
    limit,
    hasNextPage,
    hasPreviousPage,
    fetchNextPage,
  };
};

export default useProductsPagination;
