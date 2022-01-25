import styled from 'styled-components';

export const AlertContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  .alert-icon {
    margin-right: 16px;
  }

  .alert-product {
    color: ${(p) => p.theme.colors.gray900};
  }
`;
