import { HeroContainer } from './container';
import HeroButton from '../../buttons/hero-button';
import Text from '../../texts/text';
import IllustrationHero from './illustration';
import TextSection from './text-section';
import MainContainer from '../../containers/main-container';
import ArrowMainButton from '../../commons/arrow-main-btn';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <HeroContainer role='banner'>
      <MainContainer>
        <div className='description'>
          <TextSection />
          <HeroButton
            as={motion.button}
            tabIndex={2}
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{
              type: 'spring',
              stiffness: 130,
              delay: 0.5,
            }}>
            <Text color='white'>
              VIEW ALL PRODUCTS
              <ArrowMainButton />
            </Text>
          </HeroButton>
        </div>
        <motion.div
          className='illustration'
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            delay: 0.2,
            duration: .3
          }}>
          <IllustrationHero />
        </motion.div>
      </MainContainer>
    </HeroContainer>
  );
};

export default Hero;
