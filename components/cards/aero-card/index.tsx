import { useCallback, useState } from 'react';
import { AeroCardContainer } from './container';
import Card from './card';
import Text from '../../texts/text';
import BrandButton from '../../buttons/brand-button';
import { aeroCardOptions } from '../../../misc/aero-card-options';
import useAddPoints from '../../../hooks/useAddPoints';
import { AnimatePresence, motion } from 'framer-motion';

const AeroCard: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const [selected, setSelected] = useState(1);
  const addPointsMutation = useAddPoints();
  const addPoints = useCallback(() => {
    const amount = aeroCardOptions.find((i) => i.id === selected)?.value as number;
    addPointsMutation.mutate(amount);
  }, [selected, addPointsMutation]);

  return (
    <AnimatePresence>
      {isOpen && (
        <AeroCardContainer
          as={motion.div}
          data-testid='aero-card'
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: '-10vw', opacity: 0 }}
          exit={{ y: '-50vw', opacity: 0 }}>
          <div className='header'>
            <Text color='gray900'>Add Balance</Text>
          </div>
          <div className='content-wrapper'>
            <Card />
            <div className='buttons'>
              <div className='buttons-selectors'>
                {aeroCardOptions.map(({ id, value }) => (
                  <BrandButton
                    key={id}
                    width='85px'
                    height='35px'
                    selected={selected === id}
                    onClick={() => setSelected(id)}
                    onKeyPressCallback={() => setSelected(id)}>
                    {value}
                  </BrandButton>
                ))}
              </div>
              <div className='buttons-add-button'>
                <BrandButton
                  width='100%'
                  height='51px'
                  selected
                  disabled={addPointsMutation.isLoading}
                  onClick={() => {
                    addPoints();
                  }}
                  onKeyPressCallback={() => {
                    addPoints();
                  }}>
                  {addPointsMutation.isLoading ? 'Processing...' : 'Add points'}
                </BrandButton>
              </div>
            </div>
          </div>
        </AeroCardContainer>
      )}
    </AnimatePresence>
  );
};

export default AeroCard;
