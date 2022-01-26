import useHandlerKeyPress from '../../../hooks/useHandlerKeyPress';
import store from '../../../store';
import { setSelectedSortBy } from '../../../store/products/actions';
import BrandButton from '../brand-button';
import { Container } from './container';

interface Props {
  selected: boolean;
  title: string;
}

const PriceFilterButton: React.FC<Props> = ({ selected, title }) => {
  const { dispatch } = store.useStore();
  const onKeyPress = useHandlerKeyPress(() => {
    dispatch(setSelectedSortBy(title));
  });
  return (
    <Container
      onClick={() => {
        dispatch(setSelectedSortBy(title));
      }}
      onKeyPress={onKeyPress}>
      <BrandButton selected={selected} width='165px' height='43px'>
        {title}
      </BrandButton>
    </Container>
  );
};

export default PriceFilterButton;
