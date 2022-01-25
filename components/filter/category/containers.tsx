import styled from 'styled-components';

export const CategoryFilterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .controllers {
    width: 256px;
    margin-left: 16px;
    position: relative;
  }

  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
    .controllers {
      margin-left: 0px;
    }
  }

  @media screen and (max-width: ${(p) => p.theme.bp.mobile}) {
    width: 100%;
    .controllers {
      width: 100%;
    }
  }
`;
export const OptionContainer = styled.div`
  position: absolute;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 256px;
  padding: 8px 0;
  margin-top: 8.5px;

  background: ${(p) => p.theme.colors.white};
  border: 1px solid ${(p) => p.theme.colors.gray300};
  border-radius: 16px;
  cursor: pointer;

  .option-item {
    height: 51px;
    width: 100%;
    padding: 12px 24px;

    &:hover {
      background: ${(p) => p.theme.colors.gray100};
    }
  }

  @media screen and (max-width: ${(p) => p.theme.bp.mobile}) {
    width: 100%;
  }
`;

export const SelectController = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 8px 16px 24px;

  height: 59px;
  width: 100%;

  background: ${(p) => p.theme.colors.white};
  color: ${(p) => p.theme.colors.gray600};

  border: 1px solid ${(p) => p.theme.colors.gray300};
  border-radius: 16px;
  cursor: pointer;
`;
