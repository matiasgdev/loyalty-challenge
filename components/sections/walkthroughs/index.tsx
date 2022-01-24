import { WalkthroughContainer } from './container';
import WalkthroughCard from '../../cards/walkthrough';
import MainContainer from '../../containers/main-container';
import { walkthroughItems } from '../../../misc/walkthrough-items';

const WalkthroughSection: React.FC = () => {
  return (
    <WalkthroughContainer>
      <MainContainer>
        <section className='card-container' >
          {walkthroughItems.map(({ id, title, description, iconUrl, illustrationUrl, rotation }) => (
            <WalkthroughCard
              key={id}
              id={id}
              title={title}
              description={description}
              iconUrl={iconUrl}
              illustrationUrl={illustrationUrl}
              rotation={rotation}
            />
          ))}
        </section>
      </MainContainer>
    </WalkthroughContainer>
  );
};

export default WalkthroughSection;
