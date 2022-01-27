import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  margin: 0 auto;
  height: 148px;
  overflow: hidden;

  border-radius: 8px;

  background-color: ${(p) => p.theme.colors.gray900};
  color: ${(p) => p.theme.colors.white};

  .card-header,
  .card-description {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    z-index: 20;
    padding: 16px;
  }

  .card-description {
  }
`;

const pattern = (q: number) => {
  let url = "url('/assets/icons/wave-thin.svg')";
  let positions = '-10px 0px';

  for (let i = 1; i <= q; i++) {
    url += ', ' + url;
    positions += ', ' + `-10px ${i * 10}px`;
  }
  return `
  background: ${url};
  background-repeat: no-repeat;
  background-position: ${positions};
`;
};

export const WaveBG = styled.div`
  position: absolute;
  width: 140%;
  height: 120%;
  bottom: 0;
  top: 50px;
  z-index: 0;
  transform: rotate(-3deg);
  opacity: 0.3;

  ${css`
    ${pattern(10)}
  `};
`;