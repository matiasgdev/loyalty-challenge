import { useCallback, useState } from 'react';
import { AeroCoinContainer } from './container';
import Image from 'next/image';
import useMediaQuery from '../../../hooks/useMediaQuery';
import Arrow from '../../commons/arrow-btn';
import TextGradient from '../../commons/text-gradient';
import Text from '../../texts/text';
import AeroCard from '../../cards/aero-card';

function AeroCoin() {
  const [isOpen, setIsOpen] = useState(false);
  const isTablet = useMediaQuery(1024);
  const toggleBalance = useCallback(() => setIsOpen((prev) => !prev), []);
  return (
    <>
      <AeroCoinContainer onClick={toggleBalance}>
        <Image
          alt='Aeropain Icon'
          src='/assets/icons/aeropay-1.svg'
          height={isTablet ? '24' : '32'}
          width={isTablet ? '24' : '32'}
        />
        <Text>
          <TextGradient type='brand'>10.000</TextGradient>
        </Text>
        <div className='arrow-container'>
          <Arrow direction={isOpen ? 'bottom' : 'top'} />
        </div>
        {isOpen && <AeroCard />}
      </AeroCoinContainer>
    </>
  );
}

export default AeroCoin;
