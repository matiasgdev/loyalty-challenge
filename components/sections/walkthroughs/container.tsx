import styled from 'styled-components';

export const WalkthroughContainer = styled.section`
  display: flex;

  height: 528px;
  margin-bottom: 235px;

  background: ${(p) => p.theme.bgColors.specials.illustrationLight};
  background-repeat: no-repeat;
  background-size: 100%;

  .card-container {
    position: relative;
    top: -4em;
    display: flex;

    gap: 8px;
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
    height: 656px;
    background-size: 100% 100%;
    background-position: 0px 0px;
    align-items: flex-end;

    .card-container {
      position: relative;
      display: flex;
      justify-content: flex-end;
      top: 0;
      z-index: 100;
      padding-bottom: 32px;
      gap: 8px;
    }
  }
`;
