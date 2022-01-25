import styled from "styled-components";

export const SortByFilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin-right: 10px;
  }

  .controllers {
    display: flex;
  }


  @media screen and (max-width: ${(p) => p.theme.bp.mobile}) {
    width: 100%;
    justify-content: flex-start;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding-bottom: 16px
  }
`;