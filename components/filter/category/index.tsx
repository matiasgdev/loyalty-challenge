import { useState } from 'react';
import { motion } from 'framer-motion';
import { CategoryFilterContainer, OptionContainer, SelectController } from './containers';
import Text from '../../texts/text';
import { categoryOptions } from '../../../misc/category-options';

const CategoryFilter = () => {
  const [selected] = useState('All products');
  const [open, setOpen] = useState(false);
  const toggleOpenOptions = () => {
    setOpen((open) => !open);
  };
  return (
    <CategoryFilterContainer>
      <Text color='gray600' className='category-title'>
        Filter by:
      </Text>
      <div className='controllers'>
        <SelectController onClick={toggleOpenOptions}>
          <Text color='gray600'>{selected}</Text>
        </SelectController>
        {open && (
          <OptionContainer as={motion.div} initial={{ y: -59 }} animate={{ y: 0 }}>
            {categoryOptions.map((option) => (
              <div key={option.value} className='option-item'>
                <Text
                  color='gray600'
                  as={motion.p}
                  whileHover={{ scale: 1.05, originX: 0 }}
                  transition={{ type: 'spring', stiffness: 300 }}>
                  {option.name}
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
