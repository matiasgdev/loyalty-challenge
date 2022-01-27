import { RefObject } from 'react';
import store from '../../../../store';
import TextGradient from '../../../commons/text-gradient';
import Pagination from '../../../pagination';
import Text from '../../../texts/text';
import { ProductInfoContainer } from './container';

interface Props {
  refForward: RefObject<HTMLElement>;
}

const ProductsInfo: React.FC<Props> = ({ refForward }) => {
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
      <Pagination refForward={refForward}/>
    </ProductInfoContainer>
  ) : null;
};

export default ProductsInfo;
