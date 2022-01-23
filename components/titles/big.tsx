import styled from 'styled-components';
import { BaseTitle } from './base';

const BigTitle = styled(BaseTitle)`
  font-size: ${(p) => p.theme.textSizes.titles.desktop.l1};
  line-height: 80%;
  margin: 0;

  @media screen and (max-width: ${(p) => p.theme.bp.desktopMedium}) {
    font-size: 13vw;
  }

  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
    font-size: ${(p) => p.theme.textSizes.titles.mobile.l1};
  }
  
`;

export default BigTitle;
