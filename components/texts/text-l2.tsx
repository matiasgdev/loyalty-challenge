import styled from 'styled-components';
import Text from './text';

const TextL2 = styled(Text)`
  font-size: ${(p) => p.theme.textSizes.texts.desktop.l2};

  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
    font-size: ${(p) => p.theme.textSizes.texts.mobile.l2};
  }
`;

export default TextL2;
