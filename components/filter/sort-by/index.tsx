import { SortByFilterContainer } from './container';
import PriceFilterButton from '../../buttons/price-filter-buton';
import Text from '../../texts/text';
import { sortByOptions } from '../../../misc/sort-by-options';
import store from '../../../store';

const SortByFilter = () => {
  const {
    state: {
      products: { selectedSortBy },
    },
  } = store.useStore();
  return (
    <SortByFilterContainer>
      <Text color='gray600' className='category-title'>
        Sort by:
      </Text>
      <section className='controllers'>
        {sortByOptions.map((option) => (
          <PriceFilterButton key={option.value} selected={option.title === selectedSortBy} title={option.title} />
        ))}
      </section>
    </SortByFilterContainer>
  );
};

export default SortByFilter;
