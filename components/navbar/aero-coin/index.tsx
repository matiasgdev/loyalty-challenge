import { useCallback, useState } from 'react';
import { AeroCoinContainer } from './containers';
import Image from 'next/image';
import useMediaQuery from '../../../hooks/useMediaQuery';
import Arrow from '../../commons/arrow-btn';
import TextGradient from '../../commons/text-gradient';
import Text from '../../texts/text';
import AeroCard from '../../cards/aero-card';
import useHandlerKeyPress from '../../../hooks/useHandlerKeyPress';
import useUser from '../../../hooks/useUser';

function AeroCoin() {
  const { data: user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const isTablet = useMediaQuery(1024);
  const handleOnClick = useCallback(() => setIsOpen((prev) => !prev), []);
  const handleOnKeyPress = useHandlerKeyPress(() => {
    setIsOpen((prev) => !prev);
  });
  return (
    <>
      <AeroCoinContainer>
        <div
          className='controller'
          tabIndex={1}
          role='button'
          aria-pressed='mixed'
          onClick={handleOnClick}
          onKeyPress={handleOnKeyPress}>
          <Image
            alt='Aeropain Icon'
            src='/assets/icons/aeropay-1.svg'
            height={isTablet ? '24' : '32'}
            width={isTablet ? '24' : '32'}
          />
          <Text>
            <TextGradient type='brand'>{user?.points}</TextGradient>
          </Text>
          <div className='arrow-container'>
            <Arrow direction={isOpen ? 'bottom' : 'top'} />
          </div>
        </div>
        {isOpen && <AeroCard />}
      </AeroCoinContainer>
    </>
  );
}

export default AeroCoin;
