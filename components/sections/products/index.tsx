import { ProductsContainer } from './container';
import BlueMarkup from '../../commons/blue-markup';
import MainContainer from '../../containers/main-container';
import Filters from '../../filter';
import ProductList from '../../list/product-list';
import MediumTitle from '../../titles/medium';
import ProductsInfo from './info';

const Products: React.FC = () => {
  return (
    <ProductsContainer role='main'>
      <MainContainer>
        <header>
          <MediumTitle as='h2'>
            <BlueMarkup>Tech</BlueMarkup> Products
          </MediumTitle>
        </header>
        <Filters />
        <ProductList />
        <ProductsInfo />
      </MainContainer>
    </ProductsContainer>
  );
};

export default Products;
