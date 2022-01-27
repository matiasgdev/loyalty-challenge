import { useMemo, useState } from 'react';
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
import { motion } from 'framer-motion';
import { EmptyProducts } from './empty-products';

const ProductList: React.FC = () => {
  let {
    state: {
      pages: { currentPage, limit },
      products: { selectedOption, selectedSortBy },
    },
  } = store.useStore();
  const [active, setActive] = useState(false);
  const { data: products } = useProducts();
  const { data: user } = useUser();
  const { data, isLoading: isLoadingProducts, isFetchingNextPage, isIdle } = useProductsPagination(active);
  const { data: history, isLoading: isLoadingHistory } = useUserHistory();

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
  return (
    filteredProducts.length ? (
      <ProductListContainer
        as={motion.ul}
        role='list'
        arial-label='List of products'
        viewport={{ once: true }}
        onViewportEnter={() => setActive(true)}>
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
    ) : (
      <EmptyProducts />
    )
  );
};

export default ProductList;
