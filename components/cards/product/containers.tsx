import styled from 'styled-components';
import { skeleton } from '../../../misc/animations';

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
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 355px;
    border-bottom: 1px solid ${(p) => p.theme.colors.gray300};
    
    &-item {
      background: url('assets/icons/aerolab-placeholder.svg');
      background-position: center;
      background-repeat: no-repeat;
    }
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

    &-skeleton {
      display: flex;
      flex-direction: column;
      row-gap: 8px;

      p {
        color: transparent;
        border-radius: 12px;
        background: ${(p) => p.theme.colors.gray300};
        animation: ${skeleton} 1s linear infinite alternate;
      }

      p:first-child {
        height: 1em;
        width: 75%;
      }
      p:last-child {
        height: 0.5em;
        width: 30%;
      }
    }
  }

  @media screen and (max-width: ${(p) => p.theme.bp.desktopMedium}) {
    .product-image {
      height: 320px;
    }
  }
`;
