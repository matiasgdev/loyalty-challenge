import { useMemo } from 'react';
import useProducts, { useProductsPagination } from '../../../hooks/useProductsPagination';
import useUserHistory from '../../../hooks/useUserHistory';
import store from '../../../store';
import { ProductListContainer } from './container';
import useUser from '../../../hooks/useUser';
import ProductCard from '../../cards/product';
import { Product } from '../../../types/Product';
import { History } from '../../../types/History';

const isProductRedemeed = (product: Product, history: History) => {
  return history.some((historyItem) => historyItem.productId === product._id);
};

const canRedeemProduct = (product: Product, points: number) => {
  return !(points >= product.cost);
};

const ProductList: React.FC = () => {
  let {
    state: {
      pages: { currentPage, limit },
    },
  } = store.useStore();
  const { data: products } = useProducts();
  const { data: user } = useUser();
  const { data, isLoading: isLoadingProducts, isFetchingNextPage } = useProductsPagination();
  const { data: history, isLoading: isLoadingHistory } = useUserHistory();

  const isLoading = useMemo(
    () => isLoadingProducts || isFetchingNextPage || isLoadingHistory,
    [isLoadingProducts, isFetchingNextPage, isLoadingHistory],
  );

  return (
    <ProductListContainer role='list' arial-label='List of products'>
      {isLoading
        ? Array.from({ length: limit as number })
            .fill(0)
            .map((_, idx) => (
              <ProductCard
                _id={idx.toString()}
                key={idx}
                category=''
                name=''
                cost={0}
                disabled={true}
                img={{ url: '/assets/icons/aerolab-placeholder.svg' }}
                isSkeleton={true}
              />
            ))
        : data?.pages?.[currentPage - 1]?.results?.map((product) => (
            <ProductCard
              key={product._id}
              isSkeleton={isLoading}
              {...product}
              isRedeemed={products && history ? isProductRedemeed(product, history) : false}
              disabled={user && canRedeemProduct(product, user?.points)}
            />
          ))}
    </ProductListContainer>
  );
};

export default ProductList;
