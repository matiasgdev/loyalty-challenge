import styled from 'styled-components';

const cardPositions = {
  left: {
    1: '2em',
    2: '0px',
    3: '-2em',
  },
  top: {
    1: '2em',
    2: '0px',
    3: '2em',
  },
};

export const WalkthroughCardContainer = styled.div<{ rotation?: string; cardId: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  left: ${(p) => cardPositions.left[p.cardId]};
  top: ${(p) => cardPositions.top[p.cardId]};
  height: min-content;

  background: ${(p) => p.theme.colors.white};
  border: 1px solid ${(p) => p.theme.colors.gray300};
  box-sizing: border-box;
  box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.05);
  border-radius: 32px;
  transform: rotate(${(p) => p.rotation});

  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
    transform: rotate(0deg);
    left: 0;
    top: 0;
    height: 100%;
  }
`;

export const IllustrationCardContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background: ${(p) => p.theme.bgColors.specials.illustration};
  background-size: cover;
  border-radius: 24px 24px 0px 0px;
`;

export const DescriptionCardContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px 24px 24px;
  box-sizing: border-box;
  width: 100%;

  background: ${(p) => p.theme.colors.white};
  border: 1px solid ${(p) => p.theme.colors.gray300};
  box-sizing: border-box;

  border-radius: 0px 0px 24px 24px;

  .separator {
    font-stretch: expanded;
  }

  .description-wrapper {
    max-width: 350px;
  }

  @media screen and (max-width: ${(p) => p.theme.bp.desktopMedium}) {
    .description-wrapper {
      max-width: 250px;
    }
  }
`;
