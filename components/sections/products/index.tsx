import { ProductsContainer } from './container';
import BlueMarkup from '../../commons/blue-markup';
import MainContainer from '../../containers/main-container';
import Filters from '../../filter';
import ProductList from '../../list/product-list';
import MediumTitle from '../../titles/medium';
import ProductsInfo from './info';
import { useRef } from 'react';

const Products: React.FC = () => {
  const ref = useRef(null);
  
  return (
    <ProductsContainer role='main' ref={ref}>
      <MainContainer>
        <header>
          <MediumTitle as='h2'>
            <BlueMarkup>Tech</BlueMarkup> Products
          </MediumTitle>
        </header>
        <Filters />
        <ProductList />
        <ProductsInfo refForward={ref}/>
      </MainContainer>
    </ProductsContainer>
  );
};

export default Products;
