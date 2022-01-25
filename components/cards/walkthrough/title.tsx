import Image from 'next/image';
import styled from 'styled-components';
import useMediaQuery from '../../../hooks/useMediaQuery';
import SmallTitle from '../../titles/small';

const Icon = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${(p) => p.theme.bgColors.ligth};
  border-radius: 8px;
  margin-right: 8px;
  display: grid;
  place-items: center;

  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
    width: 40px;
    height: 40px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px;
  position: static;
  left: 64px;
  top: 8px;

  h3 {
    white-space: nowrap;
  }
`;

const WalkthroughTitle: React.FC<{ iconId: number }> = (props) => {
  const isTablet = useMediaQuery(1024);
  return (
    <Container>
      <Icon>
        <Image
          src={`/assets/icons/walkthrough-${props.iconId}.svg`}
          width={isTablet ? '26' : '32'}
          height={isTablet ? '26' : '32'}
          alt={`Walktrough Icon ${props.iconId}`}
        />
      </Icon>
      <SmallTitle as='h3'>{props.children}</SmallTitle>
    </Container>
  );
};

export default WalkthroughTitle;
