import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import Text from '../../texts/text';
import TextGradient from '../../commons/text-gradient';

const Container = styled.div`
  display: grid;
  place-items: center;

  height: 200px;
  margin-top: 160px;

  background ${(p) => p.theme.colors.white};

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    margin-left: 10px;
  }

  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
    height: 120px;
  }
`;

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <Container>
      <Link href='https://github.com/matiasgdev/loyalty-challenge' >
        <a className='link' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} target="_blank">
          <Image
            src={isHovered ? '/assets/icons/github-active.svg' : '/assets/icons/github-default.svg'}
            alt='Github Default'
            width='32'
            height='32'
          />
          <Text color='gray600' className='title'>
            {isHovered ? <TextGradient type='brand'>View this repository</TextGradient> : 'View this repository'}
          </Text>
        </a>
      </Link>
    </Container>
  );
};

export default Footer;
