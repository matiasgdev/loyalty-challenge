import styled from 'styled-components';
import BrandButton from './brand-button';

interface Props {
  selected: boolean;
}

const Container = styled.div`
  margin: 0px 6px;

  @media screen and (max-width: ${(p) => p.theme.bp.tablet}) {
    margin: 0px 12px 0px 0px;
  }
`;

const PriceFilterButton: React.FC<Props> = ({ selected, children }) => (
  <Container>
    <BrandButton selected={selected} width='165px' height='43px'>
      {children}
    </BrandButton>
  </Container>
);

export default PriceFilterButton;
