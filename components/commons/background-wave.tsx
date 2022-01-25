import styled from 'styled-components';
const Background = styled.div`
  position: absolute;
  z-index: -1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 20%;

  background-image: url(/assets/icons/wave.png);
`;

const BackgroundContainer = styled.div`
  position: relative;

  height: min-content;
`;

const BackgroundWave: React.FC = ({ children }) => {
  return (
    <BackgroundContainer>
      <Background />
      {children}
    </BackgroundContainer>
  );
};
export default BackgroundWave;
