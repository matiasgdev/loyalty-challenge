import { ArrowContainer, PaginationContainer } from './containers';
import Arrow from '../commons/arrow-btn';
import TextGradient from '../commons/text-gradient';
import Text from '../texts/text';
import { theme } from '../../theme';

const Pagination = () => {
  return (
    <PaginationContainer className='pagination' role='navigation' arial-label='Pagination of products'>
      <ArrowContainer left role='button' >
        <Arrow direction='left' color={theme.colors.gray300} />
      </ArrowContainer>
      <Text color='gray600'>
        Page <TextGradient type='brand'>1 of 2</TextGradient>
      </Text>
      <ArrowContainer role='button' >
        <Arrow direction='right' color={theme.colors.gray500} />
      </ArrowContainer>
    </PaginationContainer>
  );
};

export default Pagination;
