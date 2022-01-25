import styled from 'styled-components';

export const AeroCardContainer = styled.div`
  position: absolute;
  z-index: 100;
  top: 56px;
  right: 0;

  width: 100%;
  height: 100%;
  min-width: 312px;
  min-height: 404px;

  background: ${(p) => p.theme.colors.white};
  border: 1px solid ${(p) => p.theme.colors.gray300};
  border-radius: 16px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);

  .header {
    padding: 16px 24px;
    border-bottom: 1px solid ${(p) => p.theme.colors.gray300};
  }

  .content-wrapper {
    padding: 24px;
  }

  @media screen and (max-width: ${(p) => p.theme.bp.mobileSmall}) {
    min-width: calc(100vw - ${(p) => p.theme.spacing.sideMargin.mobile});
    transform: translateX(10px);
  }

  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 40px;

    &-selectors {
      display: inherit;
      justify-content: inherit;

      button:not(.&-last) {
        margin-right: 4px;
      }
    }

    &-add-button {
      margin-top: 20px;
    }
  }
`;
