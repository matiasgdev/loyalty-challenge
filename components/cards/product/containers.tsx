import styled from 'styled-components';

export const ProductContainer = styled.li`
  display: flex;
  flex-direction: column;

  gap: 16px;
  list-style: none;
  padding: 0;
`;

export const ProductCardContainer = styled.div`
  min-height: max-content;
  display: flex;
  flex-direction: column;
  width: 100%;

  border: 1px solid ${(p) => p.theme.colors.gray300};
  box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.05);
  border-radius: 16px;

  .product-image {
    position: relative;
    height: 355px;

    border-bottom: 1px solid ${(p) => p.theme.colors.gray300};
  }

  .product-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    > * {
      width: 100%;
    }

    height: 88px;
    padding: 16px 24px 24px;
  }
  
  @media screen and (max-width: ${(p) => p.theme.bp.desktopMedium}) {
    .product-image {
      height: 320px;
    }
  }
`;
