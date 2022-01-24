import styled from 'styled-components';

const IllustrationContainer = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  height: 700px;
  align-items: flex-start;
  pointer-events: none;


  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
    height: 520px;
    width: 580px;
  }
`;

const OverlayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  max-height: 500px;
  max-width: 600px;
  width: 100%;
  position: relative;
  z-index: -10;
  border-radius: 20%;
  background: ${(p) => p.theme.bgColors.specials.illustrationLight};

  @media screen and (max-width: 1200px) {
    width: 450px;
    height: 400px;
  }

  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
    background: transparent;
    height: min-content;
    width: 100%
  }
`;

const ImageWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  height: 600px;
  background-image: url(/assets/illustrations/hero-desktop.png);
  background-repeat: no-repeat;
  background-position: 50% 75%;
  background-size: 120%;

  @media screen and (max-width: 1200px) {
    background-size: contain;
    background-position: 50% bottom;
  }


  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
    width: 100%;
    background-size: cover;
    background-position: 100% 100%;
  }

`;

const Illustration = () => {
  return (
    <IllustrationContainer>
      <OverlayContainer>
        <ImageWrapper />
      </OverlayContainer>
    </IllustrationContainer>
  );
};

export default Illustration;
