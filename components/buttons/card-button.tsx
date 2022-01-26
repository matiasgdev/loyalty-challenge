import styled, { css } from 'styled-components';
import { skeleton } from '../../misc/animations';
import BaseButton from './base';

interface Props {
  readonly disabled?: boolean;
  readonly loading?: boolean;
}

const CardButton = styled(BaseButton)<Props>`
  display: grid;
  place-items: center;

  width: 100%;
  height: 59px;
  padding: 0px;
  border-radius: 16px;
  border: none;

  background: ${(p) =>
    p.loading ? p.theme.colors.gray200 : p.disabled ? p.theme.colors.gray200 : p.theme.bgColors.brand};

  ${(p) => (p.loading && css`
    box-shadow: none;
    animation: ${skeleton} 1s linear infinite alternate;
  `)};


  
  p {
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(p) => (p.disabled ? p.theme.colors.gray600 : p.theme.colors.white)};
    font-weight: 500;
  }

  svg {
    margin: 0px 8px;
  }
`;

export default CardButton;
