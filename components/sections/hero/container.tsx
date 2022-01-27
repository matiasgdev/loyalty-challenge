import styled from 'styled-components';

export const HeroContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  column-gap: 80px;

  width: 100%;
  height: 820px;
  margin-top: 30px;
  padding-top: 44px;

  .illustration {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .description {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  @media screen and (max-width: ${(p) => p.theme.bp.desktopMedium}) {
    column-gap: 40px;
  }

  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
    flex-direction: column;

    .description {
      text-align: center;
      justify-content: center;
      align-items: center;
      width: 100%;

    }

    .illustration {
      text-align: center;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: 72px;
    }
  }


  @media screen and (max-width: ${(p) => p.theme.bp.mobile}) {
    margin-bottom: 6em;
    height: 70vh;

    .illustration {
      margin-top: 0;
    }
  }

  padding: 0px ${(p) => p.theme.spacing.sideMargin.desktop};

  @media screen and (max-width: ${(p) => p.theme.bp.desktopMedium}) {
     padding: 0px ${(p) => p.theme.spacing.sideMargin.desktopMedium};
  }

  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
     padding: 0px ${(p) => p.theme.spacing.sideMargin.desktopMedium};
  }
  @media screen and (max-width: ${(p) => p.theme.bp.mobile}) {
     padding: 0px ${(p) => p.theme.spacing.sideMargin.mobile};
  }
`;
