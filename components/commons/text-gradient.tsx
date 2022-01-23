import styled from 'styled-components';
import { theme } from '../../theme';

const TextGradient = styled.span<{ type: keyof typeof theme.bgColors }>`
  color: transparent;
  background: ${(p) => p.theme.bgColors[p.type]};
  background-clip: text;
  -webkit-background-clip: text;
`;

export default TextGradient;