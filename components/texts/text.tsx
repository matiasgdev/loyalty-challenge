import styled from 'styled-components';
import { BaseText } from './base';

const Text = styled(BaseText)`
  font-size: ${(p) => p.theme.textSizes.texts.desktop.l1};
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0%;

  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
    font-size: ${(p) => p.theme.textSizes.texts.mobile.l1};
  }

`;

export default Text;
