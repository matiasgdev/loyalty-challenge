import styled from 'styled-components';
import BaseButton from '../base';
import { Props } from './index';

export const Container = styled(BaseButton)<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: ${(p) => p.width};
  height: ${(p) => p.height};

  border-radius: 12px;
  border: none;

  background: ${(p) =>
    p.disabled
      ? p.theme.bgColors.specials.illustrationLight
      : p.selected
      ? p.theme.bgColors.brand
      : p.theme.bgColors.ligth};

  p {
    color: ${(p) => p.theme.colors.white};
    font-size: ${(p) => p.theme.textSizes.texts.desktop.l1};
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
  }
`;
