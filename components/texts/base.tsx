import styled from 'styled-components';
import { theme } from '../../theme';

export const BaseText = styled.p<{ color?: keyof typeof theme.colors }>`
  font-family: ${(p) => p.theme.mainFont};
  line-height: 150%;

  margin: 0;

  color: ${(p) => p.theme.colors[p.color ?? 'gray900']};
`;
