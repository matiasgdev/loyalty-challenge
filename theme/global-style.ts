import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${(p) => p.theme.mainFont}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }


  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
    .category-title {
      display: none;
    }
  }

  .Toastify__toast-theme--colored.Toastify__toast--error {
    border: 2px solid ${(p) => p.theme.colors.red};
  }

  .Toastify__toast-theme--colored.Toastify__toast--success {
    border: 2px solid ${(p) => p.theme.colors.green};
  }

  .Toastify__toast-container {
    position: fixed;
    height: min-content;
    width: min-content;
    max-width: 1464px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    left: 5%;

    @media screen and (max-width: ${(p) => p.theme.bp.mobile}) {
      width: 100%;
      align-items: center;
      left: 0;
    }

  }
  .Toastify__toast-theme--colored.Toastify__toast--success,
  .Toastify__toast-theme--colored.Toastify__toast--error {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 80px;
    max-height: 96px;
    padding: 24px;
    margin-bottom: 12px;
    box-sizing: border-box;

    background: ${(p) => p.theme.colors.white};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 12px;

    @media screen and (max-width: ${(p) => p.theme.bp.mobile}) {
      height: min-content;
    }
  }

  .Toastify__toast-body {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  .Toastify__toast {
    width: 532px;
    padding: 0;
    display: flex;

    border-radius: 8px;
    background: ${(p) => p.theme.colors.white};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);

    @media screen and (max-width: ${(p) => p.theme.bp.mobile}) {
      width: calc(100vw - ${(p) => p.theme.spacing.sideMargin.mobile})
    }
  }
`;
