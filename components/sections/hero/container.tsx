import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  column-gap: 80px;

  width: 100%;
  height: 820px;
  margin-top: 30px;
  padding-top: 44px;

  @media screen and (max-width: ${(p) => p.theme.bp.desktopMedium}) {
    column-gap: 40px;
  }

  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
    flex-direction: column;
  }

  .description {
    display: flex;
    flex-direction: column;
    flex: 1;

    @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
      text-align: center;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }

  .illustration {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  
    @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
      text-align: center;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: 72px;
    }

  }

`;
