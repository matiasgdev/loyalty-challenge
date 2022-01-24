import { useState } from 'react';
import { SortByFilterContainer } from './container';
import PriceFilterButton from '../../buttons/price-filter-button';
import Text from '../../texts/text';
import { sortByOptions } from '../../../misc/sort-by-options';

const SortByFilter = () => {
  const [selected] = useState('recent');
  return (
    <SortByFilterContainer>
      <Text color='gray600' className='category-title'>
        Sorted by:
      </Text>
      <div className='controllers'>
        {sortByOptions.map((option) => (
          <PriceFilterButton key={option.value} selected={option.value === selected}>
            {option.title}
          </PriceFilterButton>
        ))}
      </div>
    </SortByFilterContainer>
  );
};

export default SortByFilter;
