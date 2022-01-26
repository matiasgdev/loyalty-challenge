import React from 'react';
import styled from 'styled-components';
import Text24LS from '../../texts/text-24-ls';
import Text from '../../texts/text';
import BigTitle from '../../titles/big';
import TextGradient from '../../commons/text-gradient';
import { motion } from 'framer-motion';

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
      <Text24LS
        color='gray600'
        as={motion.p}
        initial={{ opacity: 0, x: '-100vw' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}>
        Explore the
      </Text24LS>
      <motion.div
        className='main-title'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5, type: 'spring', stiffness: 130 }}>
        <BigTitle color='gray900'>
          <TextGradient type='brand'>Tech</TextGradient> Zone
        </BigTitle>
      </motion.div>
      <Text
        color='gray600'
        as={motion.p}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .8, duration: .5 }}
      >
        Here you’ll be able to redeem all of your hard-earned Aeropoints and exchange them for cool tech.
      </Text>
    </Container>
  );
};

export default TextSection;
