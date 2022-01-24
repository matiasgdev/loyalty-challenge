import Image from 'next/image';
import { ProductCardContainer, ProductContainer } from './containers';
import CardButton from '../../buttons/card-button';
import InactiveIcon from './inactive-icon';
import ActiveIcon from './active-icon';
import Text from '../../texts/text';
import TextL2Caps from '../../texts/text-l2-caps';

interface Props {
  disabled?: boolean;
  loading?: boolean;
}

const ProductCard: React.FC<Props> = (props) => {
  const { disabled, loading } = props;
  return (
    <ProductContainer role='listitem'>
      <ProductCardContainer>
        <div className='product-image'>
          <Image src='/go-pro.png' alt='product' layout='fill' objectFit='contain' loading='lazy' />
        </div>
        <div className='product-detail'>
          <Text color='gray900'>Go Pro Hero 4</Text>
          <TextL2Caps color='gray600'>Go Pro Hero 4</TextL2Caps>
        </div>
      </ProductCardContainer>
      <CardButton disabled={disabled} loading={loading}>
        <Text color='white'>
          {loading ? (
            'Processing...'
          ) : (
            <>
              {disabled ? 'You need' : 'Reedem for'} {disabled ? <InactiveIcon /> : <ActiveIcon />} 12.500
            </>
          )}
        </Text>
      </CardButton>
    </ProductContainer>
  );
};

export default ProductCard;
