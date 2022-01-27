import Image from 'next/image';
import { CardContainer, WaveBG } from './containers';
import { normalizeWithRandomYear } from '../../../../utils/normalize-with-random-year';
import useUser from '../../../../hooks/useUser';
import Text from '../../../texts/text';
import TextL2 from '../../../texts/text-l2';

const Card = () => {
  const { data: user } = useUser();

  return (
    <CardContainer>
      <div className='card-header'>
        <Text color='white'>Aerocard</Text>
        <Image src='/assets/icons/aerolab-icon-card.svg' width='24' height='24' alt='Aerolab Icon Card' />
      </div>
      <div className='card-description'>
        <TextL2 color='white'>{user?.name}</TextL2>
        <TextL2 color='white'>{normalizeWithRandomYear(user?.createDate)}</TextL2>
      </div>
      <WaveBG />
    </CardContainer>
  );
};

export default Card;
