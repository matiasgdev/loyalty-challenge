import styled from 'styled-components';

const MainContainer = styled.main`
  width: 100%;
  max-width: ${(p) => p.theme.spacing.content.desktop};
  margin: 0 auto;
  
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
  flex-direction: inherit;
  column-gap: inherit;
  row-gap: inherit;
  gap: inherit;

  @media screen and (max-width: ${(p) => p.theme.bp.desktopMedium}) {
    padding: 0px ${(p) => p.theme.spacing.sideMargin.desktopMedium};
  }

  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
    padding: 0px ${(p) => p.theme.spacing.sideMargin.desktopMedium};
  }
`;

export default MainContainer;
