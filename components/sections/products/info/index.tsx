import store from '../../../../store';
import TextGradient from '../../../commons/text-gradient';
import Pagination from '../../../pagination';
import Text from '../../../texts/text';
import { ProductInfoContainer } from './container';

const ProductsInfo = () => {
  const {
    state: { pages },
  } = store.useStore();
  return pages ? (
    <ProductInfoContainer>
      <Text color='gray600'>
        <TextGradient type='brand'>
          {((pages?.limit as number) * pages.currentPage).toString()} of {pages.pages}
        </TextGradient>{' '}
        products
      </Text>
      <Pagination />
    </ProductInfoContainer>
  ) : null;
};

export default ProductsInfo;
