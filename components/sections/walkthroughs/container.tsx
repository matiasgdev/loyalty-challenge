import styled from 'styled-components';

export const WalkthroughContainer = styled.section`
  display: grid;
  place-items: center;

  height: 528px;
  margin-bottom: 235px;
  width: 100%;
  
  background: ${(p) => p.theme.bgColors.specials.illustrationLight};
  background-repeat: no-repeat;
  background-size: 100%;
  
  .card-container {
    max-width: ${(p) => p.theme.spacing.content.desktop};
    position: relative;
    top: -4em;
    display: flex;
    
    gap: 8px;
    height: 100%;
    width: 100%;
  }
  
  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
    align-items: flex-end;
    
    height: min-content;
    margin-bottom: 160px;

    padding: 137px 18px 32px 18px;
    background-size: 100% 100%;
    background-position: 0px 0px;
    
    .card-container {
      position: relative;
      display: flex;
      justify-content: flex-end;
      top: 0;
      z-index: 100;
      gap: 8px;
    }
  }

  @media screen and (max-width: ${(p) => p.theme.bp.mobile}) {
    padding: 300px 20px 32px 20px;
    margin-bottom: 80px;
  }
  @media screen and (max-width: 940px) {
    .card-container {
      flex-direction: column;
      align-items: center;
    }
  }
`;
