import { useEffect } from 'react';
import Image from 'next/image';
import { ProductCardContainer, ProductContainer } from './containers';
import CardButton from '../../buttons/card-button';
import InactiveIcon from './inactive-icon';
import ActiveIcon from './active-icon';
import Text from '../../texts/text';
import TextL2Caps from '../../texts/text-l2-caps';
import { Product } from '../../../types/Product';
import useRedeem from '../../../hooks/useReedem';
import { toast } from 'react-toastify';
import Alert from '../../commons/alert';

interface Props extends Product {
  disabled?: boolean;
  loading?: boolean;
  isRedeemed: boolean;
}

const ProductCard: React.FC<Props> = (props) => {
  const { disabled, loading, name, category, cost, img, _id, isRedeemed } = props;
  const { isLoading, mutate: redeem, status } = useRedeem();

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      toast(<Alert type={status} product={name} />, { type: status });
    }
  }, [status, name]);

  return (
    <ProductContainer role='listitem' arial-label={`Item ${name}`}>
      <ProductCardContainer>
        <div className='product-image'>
          <Image src={img.url} alt='product' layout='fill' objectFit='contain' loading='lazy' />
        </div>
        <div className='product-detail'>
          <Text color='gray900'>{name}</Text>
          <TextL2Caps color='gray600'>{category}</TextL2Caps>
        </div>
      </ProductCardContainer>
      <CardButton
        disabled={disabled || isRedeemed}
        disablePointer={disabled || isRedeemed}
        onClick={(e) => {
          redeem(_id);
        }}>
        <Text color='white'>
          {isLoading ? (
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
  );
};

export default ProductCard;
