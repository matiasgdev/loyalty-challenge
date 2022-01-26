import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: min-content;
  padding: 12px;

  border: 1px solid ${(p) => p.theme.colors.gray300};
  border-radius: 16px;
`;

export const ArrowContainer = styled.button<{ left?: boolean }>`
  display: grid;
  place-items: center;

  width: 40px;
  height: 40px;
  ${(p) => (p.left ? 'margin-right: 24px' : 'margin-left: 24px')};

  background: ${(p) => p.theme.bgColors.ligth};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:disabled {
    cursor: initial;
  }
  
  transition: background .1s ease-in-out;
  
  &:hover:enabled, &:active:enabled {
    background: ${(p) => p.theme.bgColors.light2};
  }

  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
    width: 36px;
    height: 36px;
  }
`;
