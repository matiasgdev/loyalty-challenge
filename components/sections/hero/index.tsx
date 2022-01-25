import { HeroContainer } from './container';
import HeroButton from '../../buttons/hero-button';
import Text from '../../texts/text';
import IllustrationHero from './illustration';
import TextSection from './text-section';
import MainContainer from '../../containers/main-container';
import ArrowMainButton from '../../commons/arrow-main-btn'

const Hero = () => {
  return (
    <HeroContainer role='banner'>
      <MainContainer>
        <div className='description'>
          <TextSection />
          <HeroButton>
            <Text color='white'>
              VIEW ALL PRODUCTS
              <ArrowMainButton />
            </Text>
          </HeroButton>
        </div>
        <div className='illustration'>
          <IllustrationHero />
        </div>
      </MainContainer>
    </HeroContainer>
  );
};

export default Hero;