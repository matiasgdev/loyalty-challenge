import styled from 'styled-components';

export const ProductsContainer = styled.section`
  height: min-content;
  background-color: ${(p) => p.theme.colors.white};

  padding: 0px ${(p) => p.theme.spacing.sideMargin.desktop};

  @media screen and (max-width: ${(p) => p.theme.bp.desktopMedium}) {
     padding: 0px ${(p) => p.theme.spacing.sideMargin.desktopMedium};
  }

  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
     padding: 0px ${(p) => p.theme.spacing.sideMargin.desktopMedium};
  }
  @media screen and (max-width: ${(p) => p.theme.bp.mobile}) {
     padding: 0px ${(p) => p.theme.spacing.sideMargin.mobile};
  }
`;
