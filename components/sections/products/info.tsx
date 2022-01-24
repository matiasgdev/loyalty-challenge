import styled from 'styled-components';
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
  return (
    <Container>
      <Text color='gray600'>
        <TextGradient type='brand'>16 of 32</TextGradient> products
      </Text>
      <Pagination />
    </Container>
  );
};

export default ProductsInfo;
