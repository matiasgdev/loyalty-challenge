import styled from 'styled-components';

export const Container = styled.div`
  margin: 0px 6px;

  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
    margin: 0px 12px 0px 0px;
  }
`;
