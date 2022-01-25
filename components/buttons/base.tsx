import styled from 'styled-components';

const BaseButton = styled.button<{ disablePointer?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: ${(p) => (p.disablePointer ? 'auto' : 'pointer')};

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
`;

export default BaseButton;
