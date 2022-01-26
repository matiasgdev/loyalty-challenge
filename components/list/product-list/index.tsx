import { useMemo } from 'react';
import useProducts, { useProductsPagination } from '../../../hooks/useProductsPagination';
import useUserHistory from '../../../hooks/useUserHistory';
import store from '../../../store';
import { ProductListContainer } from './container';
import useUser from '../../../hooks/useUser';
import ProductCard from '../../cards/product';
import { Products } from '../../../types/Product';
import { filterProducts } from '../../../utils/filter-products';
import { isProductRedemeed } from '../../../utils/is-product-redemeed';
import { canRedeemProduct } from '../../../utils/can-redeem-product';
import { orderProductsBy } from '../../../utils/order-products-by';
import { createPlaceholderProducts } from '../../../utils/create-placeholder-products';

const ProductList: React.FC = () => {
  let {
    state: {
      pages: { currentPage, limit },
      products: { selectedOption, selectedSortBy },
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
  return (
    <ProductListContainer role='list' arial-label='List of products'>
      {filteredProducts.map((product) => (
        <ProductCard
          key={product._id}
          isSkeleton={isLoading}
          {...product}
          isRedeemed={products && history ? isProductRedemeed(product, history) : false}
          disabled={isLoading || (user && canRedeemProduct(product, user?.points))}
        />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
