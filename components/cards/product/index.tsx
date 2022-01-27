import { useEffect } from 'react';
import Image from 'next/image';
import { ProductCardContainer, ProductContainer } from './containers';
import { toast } from 'react-toastify';
import { AnimatePresence, motion } from 'framer-motion';
import useRedeem from '../../../hooks/useReedem';
import CardButton from '../../buttons/card-button';
import InactiveIcon from './inactive-icon';
import ActiveIcon from './active-icon';
import Text from '../../texts/text';
import TextL2Caps from '../../texts/text-l2-caps';
import { Product } from '../../../types/Product';
import Alert from '../../commons/alert';
import ImageSkeleton from '../../commons/image-skeleton';

interface Props extends Product {
  disabled?: boolean;
  isSkeleton?: boolean;
  isRedeemed?: boolean;
}

const ProductCard: React.FC<Props> = (props) => {
  const { disabled, isSkeleton, name, category, cost, img, _id, isRedeemed } = props;
  const { isLoading, mutate: redeem, status } = useRedeem();

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      toast(<Alert type={status} product={name} />, { type: status });
    }
  }, [status, name]);

  return (
    <AnimatePresence>
      <ProductContainer
        as={motion.li}
        initial={{ opacity: 0, y: 50 }}
        exit={{ y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        role='listitem'
        arial-label={`Item ${name}`}>
        <ProductCardContainer>
          <div className={`product-image ${isSkeleton ? 'product-image-skeleton' : ''}`}>
            {isSkeleton ? (
              <ImageSkeleton />
            ) : (
              <Image
                src={img.url}
                alt='product'
                layout='fill'
                objectFit='contain'
                loading='lazy'
                className='product-image-item'
              />
            )}
          </div>
          <div className={`product-detail ${isSkeleton ? 'product-detail-skeleton' : ''}`}>
            <Text color='gray900'>{name}</Text>
            <TextL2Caps color='gray600'>{category}</TextL2Caps>
          </div>
        </ProductCardContainer>
        <CardButton
          loading={isSkeleton}
          disabled={disabled || isRedeemed}
          disablePointer={disabled || isRedeemed}
          onClick={(e) => {
            redeem(_id);
          }}>
          <Text color='white'>
            {isSkeleton ? (
              ''
            ) : isLoading ? (
              'Processing...'
            ) : isRedeemed ? (
              'Redeemed'
            ) : (
              <>
                {disabled ? 'You need' : 'Redeem for'} {disabled ? <InactiveIcon /> : <ActiveIcon />} {cost}
              </>
            )}
          </Text>
        </CardButton>
      </ProductContainer>
    </AnimatePresence>
  );
};

export default ProductCard;
