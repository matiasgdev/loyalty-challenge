import { useState } from 'react';
import { motion } from 'framer-motion';
import { CategoryFilterContainer, OptionContainer, SelectController } from './containers';
import Text from '../../texts/text';
import store from '../../../store';
import { setSelectedOption } from '../../../store/products/actions';

const CategoryFilter = () => {
  const {
    state: { products },
    dispatch,
  } = store.useStore();
  const [open, setOpen] = useState(false);
  const toggleOpenOptions = () => {
    products.options.length && setOpen((open) => !open);
  };
  return (
    <CategoryFilterContainer>
      <Text color='gray600' className='category-title'>
        Filter by:
      </Text>
      <div className='controllers'>
        <SelectController onClick={toggleOpenOptions}>
          <Text color='gray600'>{products.selectedOption}</Text>
        </SelectController>
        {open && products.options.length && (
          <OptionContainer as={motion.div} initial={{ y: -59 }} animate={{ y: 0 }}>
            {products.options.map((option) => (
              <div
                key={option}
                className='option-item'
                onClick={() => {
                  dispatch(setSelectedOption(option));
                  toggleOpenOptions();
                }}>
                <Text
                  color='gray600'
                  as={motion.p}
                  whileHover={{ scale: 1.05, originX: 0 }}
                  transition={{ type: 'spring', stiffness: 300 }}>
                  {option}
                </Text>
              </div>
            ))}
          </OptionContainer>
        )}
      </div>
    </CategoryFilterContainer>
  );
};

export default CategoryFilter;
