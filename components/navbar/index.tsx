import NavbarContainer from './container';
import Image from 'next/image';
import AeroCoin from './aero-coin';
import MainContainer from '../containers/main-container';
import useMediaQuery from '../../hooks/useMediaQuery';

function Navbar() {
  const isTablet = useMediaQuery(1024);
  return (
    <NavbarContainer>
      <MainContainer>
        <div
          className="image-container"
        >
          <Image
            alt='Aerolab Logo'
            src={`/assets/icons/aerolab-logo-${isTablet ? '2' : '1'}.svg`}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <AeroCoin />
      </MainContainer>
    </NavbarContainer>
  );
}

export default Navbar;
