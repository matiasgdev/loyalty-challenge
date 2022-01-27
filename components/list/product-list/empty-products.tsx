import styled from 'styled-components';
import Text from '../../texts/text';
import ErrorIcon from '../icons/error-icon';

const EmptyProductsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  width: 100%;

  .no-products-text {
    max-width: 70%;
    text-align: center;
  }
  
  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
    row-gap: 1em;
    flex-direction: column;
  }
`;

export const EmptyProducts = () => {
  return (
    <EmptyProductsContainer role='tabpanel'>
      <ErrorIcon />
      <Text color='gray600' className='no-products-text'>
        We not found results for that criteria. Try removing the actual filters
      </Text>
    </EmptyProductsContainer>
  );
};
