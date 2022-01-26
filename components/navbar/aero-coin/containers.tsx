import styled from 'styled-components';

export const AeroCoinContainer = styled.div`
  position: relative;
  z-index: 999;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 48px;
  padding: 8px 16px;

  background: ${(p) => p.theme.colors.white};

  border: 1px solid ${(p) => p.theme.colors.gray300};
  border-radius: 16px;
  box-sizing: border-box;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  
  &:hover {
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  }
  
  .controller {
    cursor: pointer;
    display: inherit;
    flex-direction: inherit;
    justify-content: inherit;
    align-items: inherit;
    column-gap: 8px;
  }

  .arrow-container {
    margin-left: 12.5px;
  }
`;
