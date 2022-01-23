import styled from 'styled-components';
import { theme } from '../../theme';

interface Title {
  readonly color?: keyof typeof theme.colors;
}

export const BaseTitle = styled.h1<Title>`
  font-family: ${(p) => p.theme.mainFont};
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 0%;

  margin: 0;

  color: ${(p) => p.theme.colors[p.color ?? 'gray900']};
`;
