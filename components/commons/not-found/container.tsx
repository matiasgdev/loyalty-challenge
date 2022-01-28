import styled from 'styled-components';

export const Container404 = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;

  background: url('/assets/illustrations/walkthroug-1-responsive.png');
  background-position: top;
  background-repeat: no-repeat;
  background-size: 200px;
  drop-shadow(4px 4px 10px blue);

  .logo {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 48px;
    height: 48px;
  }

  .text {
    height: min-content;
    row-gap: 2em;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
