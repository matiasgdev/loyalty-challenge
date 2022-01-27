import { useState } from 'react';
import { motion } from 'framer-motion';
import { CategoryFilterContainer, OptionContainer, SelectController } from './containers';
import Text from '../../texts/text';
import store from '../../../store';
import { setSelectedOption } from '../../../store/products/actions';
import useHandlerKeyPress from '../../../hooks/useHandlerKeyPress';

const CategoryFilter = () => {
  const {
    state: { products },
    dispatch,
  } = store.useStore();
  const [open, setOpen] = useState(false);
  const toggleOpenOptions = () => {
    products.options.length && setOpen((open) => !open);
  };
  const onKeyPress = useHandlerKeyPress(() => toggleOpenOptions());
  return (
    <CategoryFilterContainer>
      <Text color='gray600' className='category-title'>
        Filter by:
      </Text>
      <div className='controllers'>
        <SelectController
          onClick={toggleOpenOptions}
          onKeyPress={onKeyPress}
          tabIndex={2}>
          <Text color='gray600' data-testid="selected-option">{products.selectedOption}</Text>
        </SelectController>
        {open && products.options.length && (
          <OptionContainer as={motion.div} initial={{ y: -59 }} animate={{ y: 0 }} role="tablist">
            {products.options.map((option, idx) => (
              <div
                key={option}
                role='tab'
                tabIndex={idx + 2}
                aria-selected={idx === 0 ? 'true' : 'false'}
                className='option-item'
                onClick={() => {
                  dispatch(setSelectedOption(option));
                  toggleOpenOptions();
                }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    dispatch(setSelectedOption(option));
                    toggleOpenOptions();
                  }
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
