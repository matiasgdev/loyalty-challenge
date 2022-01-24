import { ProductListContainer } from './container';
import ProductCard from '../../cards/product';

const ProductList: React.FC = () => {
  return (
    <ProductListContainer role='list' arial-label='List of products'>
      <ProductCard disabled />
      <ProductCard loading />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ProductListContainer>
  );
};

export default ProductList;
