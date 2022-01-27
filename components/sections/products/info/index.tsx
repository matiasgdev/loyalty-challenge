import { RefObject } from 'react';
import useProductsPagination from '../../../../hooks/useProductsPagination';
import store from '../../../../store';
import TextGradient from '../../../commons/text-gradient';
import Pagination from '../../../pagination';
import Text from '../../../texts/text';
import { ProductInfoContainer } from './container';

interface Props {
  refForward: RefObject<HTMLElement>;
}

const ProductsInfo: React.FC<Props> = ({ refForward }) => {
  const { length, isLoading, limit } = useProductsPagination();
  return !isLoading ? (
    <ProductInfoContainer>
      <Text color='gray600'>
        <TextGradient type='brand'>
          {length.toString()} of {limit}
        </TextGradient>{' '}
        products
      </Text>
      <Pagination refForward={refForward} />
    </ProductInfoContainer>
  ) : null;
};

export default ProductsInfo;
