import { useEffect, useState } from 'react';
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
  notEnoughPoints?: boolean;
  isSkeleton?: boolean;
  isRedeemed?: boolean;
}

const ProductCard: React.FC<Props> = (props) => {
  const [redeemNow, setRedeem] = useState(false);
  const { notEnoughPoints, isSkeleton, name, category, cost, img, _id, isRedeemed } = props;
  const { isLoading, mutate: redeem, status } = useRedeem();

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      toast(<Alert type={status} product={name} />, { type: status });
    }
  }, [status, name]);

  let text = isSkeleton ? (
    ''
  ) : isLoading ? (
    'Processing...'
  ) : redeemNow ? (
    `Redeem now!`
  ) : notEnoughPoints ? (
    <>
       You need <InactiveIcon /> {cost}
    </>
  ) : isRedeemed ? (
    'Redeemed'
  ) : (
    <>
      Redeem for <ActiveIcon /> {cost}
    </>
  );

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
          as={motion.button}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          loading={isSkeleton}
          disabled={notEnoughPoints || isRedeemed || isLoading}
          disablePointer={notEnoughPoints || isRedeemed || isLoading}
          onFocus={() => {
            setRedeem(true);
          }}
          onBlur={() => {
            setRedeem(false);
          }}
          onMouseEnter={() => {
            setRedeem(true);
          }}
          onMouseLeave={() => {
            setRedeem(false);
          }}
          onClick={() => {
            redeem(_id);
          }}>
          <Text color='white'>{text}</Text>
        </CardButton>
      </ProductContainer>
    </AnimatePresence>
  );
};

export default ProductCard;
