import styled from 'styled-components';
import { BaseTitle } from './base';

const MediumTitle = styled(BaseTitle)`
  font-size: ${(p) => p.theme.textSizes.titles.desktop.l2};
  line-height: 80%;

  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
    font-size: ${(p) => p.theme.textSizes.titles.mobile.l2};
  }
`;

export default MediumTitle;
