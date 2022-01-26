import styled from 'styled-components';
import store from '../../../store';
import TextGradient from '../../commons/text-gradient';
import Pagination from '../../pagination';
import Text from '../../texts/text';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 59px;

  .pagination {
    position: absolute;
    right: 0;
  }

  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
    flex-direction: column-reverse;
    row-gap: 26px;
    height: min-content;

    .pagination {
      position: initial;
    }
  }
`;

const ProductsInfo = () => {
  const { state: { pages }} = store.useStore();
  return (
    pages ? (
      <Container>
        <Text color='gray600'>
          <TextGradient type='brand'>
            {(pages?.limit * pages.currentPage).toString()} of {pages.pages}
          </TextGradient>{' '}
          products
        </Text>
        <Pagination />
      </Container>
    ) : null
  );
};

export default ProductsInfo;
