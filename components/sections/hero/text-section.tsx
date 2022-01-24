import React from 'react';
import styled from 'styled-components';
import Text24LS from '../../texts/text-24-ls';
import Text from '../../texts/text';
import BigTitle from '../../titles/big';
import TextGradient from '../../commons/text-gradient';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 602px;

  @media screen and (max-width: ${(p) => p.theme.bp.desktopMedium}) {
    max-width: 502px;
    flex-shrink: 3;
  }

  @media screen and (max-width: ${(p) => p.theme.bp.desktopMedium}) {
    max-width: 289px;
    flex-shrink: 0;
  }

  .main-title {
    margin: 16px 0;
  }
`;

const TextSection: React.FC = () => {
  return (
    <Container>
      <Text24LS color='gray600'>Explore the</Text24LS>
      <div className='main-title'>
        <BigTitle color='gray900'>
          <TextGradient type='brand'>Tech</TextGradient> Zone
        </BigTitle>
      </div>
      <Text color='gray600'>
        Here you’ll be able to redeem all of your hard-earned Aeropoints and exchange them for cool tech.
      </Text>
    </Container>
  );
};

export default TextSection;
