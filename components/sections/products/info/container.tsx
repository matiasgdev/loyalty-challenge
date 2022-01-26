import styled from 'styled-components';

export const ProductInfoContainer = styled.div`
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
