import styled from 'styled-components';

const MainContainer = styled.main`
  width: 100%;
  max-width: calc(${(p) => p.theme.spacing.content.desktop} + ${(p) => p.theme.spacing.sideMargin.desktop});
  margin: 0 auto;

  display: inherit;
  align-items: inherit;
  justify-content: inherit;
  flex-direction: inherit;
  column-gap: inherit;
  row-gap: inherit;
  gap: inherit;
`;

export default MainContainer;
