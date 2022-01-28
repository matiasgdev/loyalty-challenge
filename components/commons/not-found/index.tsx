import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Container404 } from './container';
import BrandButton from '../../buttons/brand-button';
import Text from '../../texts/text';
import BigTitle from '../../titles/big';

export const NotFoundComponent = () => {
  const router = useRouter();
  return (
    <Container404 as={motion.div} initial={{ y: '-50vh' }} animate={{ y: 0 }}>
      <div className='text'>
        <BigTitle>404</BigTitle>
        <Text color='gray600'>The current resource was not founded</Text>
        <BrandButton height='60px' width='159px' onClick={() => router.push('/')}>
          Go home
        </BrandButton>
      </div>
    </Container404>
  );
};
