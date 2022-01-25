import Image from 'next/image';
import React from 'react';
import styled, { css } from 'styled-components';
import useUser from '../../../hooks/useUser';
import Text from '../../texts/text';
import TextL2 from '../../texts/text-l2';
import { normalizeWithRandomYear } from '../../../utils/normalize-with-random-year';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  margin: 0 auto;
  height: 148px;
  overflow: hidden;

  border-radius: 8px;

  background-color: ${(p) => p.theme.colors.gray900};
  color: ${(p) => p.theme.colors.white};

  .card-header,
  .card-description {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    z-index: 20;
    padding: 16px;
  }

  .card-description {
  }
`;

const pattern = (q: number) => {
  let url = "url('/assets/icons/wave-thin.svg')";
  let positions = '-10px 0px';

  for (let i = 1; i <= q; i++) {
    url += ', ' + url;
    positions += ', ' + `-10px ${i * 10}px`;
  }
  return `
  background: ${url};
  background-repeat: no-repeat;
  background-position: ${positions};
`;
};

const WaveBG = styled.div`
  position: absolute;
  width: 140%;
  height: 120%;
  bottom: 0;
  top: 50px;
  z-index: 0;
  transform: rotate(-3deg);
  opacity: 0.3;

  ${css`
    ${pattern(10)}
  `};
`;
const Card = () => {
  const { data: user } = useUser();

  return (
    <Container>
      <div className='card-header'>
        <Text color='white'>Aerocard</Text>
        <Image src='/assets/icons/aerolab-icon-card.svg' width='24' height='24' alt='Aerolab Icon Card' />
      </div>
      <div className='card-description'>
        <TextL2 color='white'>{user?.name}</TextL2>
        <TextL2 color='white'>{normalizeWithRandomYear(user?.createDate)}</TextL2>
      </div>
      <WaveBG />
    </Container>
  );
};

export default Card;
