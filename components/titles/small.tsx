import styled from 'styled-components';
import { BaseTitle } from './base';

const SmallTitle = styled(BaseTitle)`
  font-size: ${(p) => p.theme.textSizes.titles.desktop.l3};
  line-height: 100%;

  @media screen and (max-width: ${(p) => p.theme.bp.desktopMedium}) {
    font-size: ${(p) => p.theme.textSizes.titles.mobile.l3};
  }
`;

export default SmallTitle;
