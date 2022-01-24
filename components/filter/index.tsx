import React from 'react';
import { FiltersContainer } from './container';
import CategoryFilter from './category';
import SortByFilter from './sort-by';
import Pagination from '../pagination';

const Filters = () => {
  return (
    <FiltersContainer>
      <div className='filters'>
        <CategoryFilter />
        <div className='separator' />
        <SortByFilter />
      </div>
      <div className='pagination-wrapper'>
        <Pagination />
      </div>
    </FiltersContainer>
  );
};

export default Filters;
