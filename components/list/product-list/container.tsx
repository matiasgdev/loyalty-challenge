import styled from "styled-components";

export const ProductListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(min-content, 1fr));
  column-gap: 24px;
  row-gap: 56px;

  height: min-content;
  padding: 0;
  margin: 72px 0px 72px 0px;


  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
    grid-template-columns: repeat(3, minmax(min-content, 1fr));
  }

  @media screen and (max-width: ${(p) => p.theme.bp.tabletMedium}) {
    grid-template-columns: repeat(2, minmax(min-content, 1fr));
  }
  @media screen and (max-width: ${(p) => p.theme.bp.mobile}) {
    grid-template-columns: repeat(1, minmax(min-content, 1fr));
    margin: 48px 0px 64px 0px;
  }

`;