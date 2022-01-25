import { ProductListContainer } from './container';
import ProductCard from '../../cards/product';
import useProducts from '../../../hooks/useProducts';
import useUserHistory from '../../../hooks/useUserHistory';
import { Product } from '../../../types/Product';
import { History } from '../../../types/History';

const isProductRedemeed = (product: Product, history: History) => {
  return history.some((historyItem) => historyItem.productId === product._id);
};

const ProductList: React.FC = () => {
  const { data: products, isLoading } = useProducts();
  const { data: history } = useUserHistory();
  return (
    <ProductListContainer role='list' arial-label='List of products'>
      {products?.length &&
        products.map((product) => (
          <ProductCard
            key={product._id}
            loading={isLoading}
            {...product}
            isRedeemed={products && history ? isProductRedemeed(product, history) : false}
          />
        ))}
    </ProductListContainer>
  );
};

export default ProductList;
