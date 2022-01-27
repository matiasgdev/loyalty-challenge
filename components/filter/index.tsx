import React, { useRef } from 'react';
import { FiltersContainer } from './container';
import CategoryFilter from './category';
import SortByFilter from './sort-by';
import Pagination from '../pagination';

const Filters = () => {
  const ref = useRef(null);
  return (
    <FiltersContainer ref={ref}>
      <div className='filters'>
        <CategoryFilter />
        <div className='separator' />
        <SortByFilter />
      </div>
      <div className='pagination-wrapper'>
        <Pagination refForward={ref}/>
      </div>
    </FiltersContainer>
  );
};

export default Filters;
