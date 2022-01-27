import React, { RefObject, useCallback, useMemo } from 'react';
import { useProductsPagination } from '../../hooks/useProductsPagination';
import store from '../../store';
import { setPageAction } from '../../store/pages/actions';
import { theme } from '../../theme';
import { ArrowContainer, PaginationContainer } from './containers';
import Arrow from '../commons/arrow-btn';
import TextGradient from '../commons/text-gradient';
import Text from '../texts/text';

interface Props {
  refForward: RefObject<HTMLElement>;
}
const Pagination: React.FC<Props> = ({ refForward }) => {
  let {
    dispatch,
    state: {
      pages: { currentPage, pages: size, limit },
    },
  } = store.useStore();
  const { fetchNextPage, hasNextPage, isLoading } = useProductsPagination();

  const hasPreviousPages = useMemo(() => currentPage > 1, [currentPage]);
  const canGoToNextPage = useMemo(
    () => (hasNextPage ? !hasNextPage : !(currentPage >= 1 && currentPage < size / limit)),
    [currentPage, size, limit, hasNextPage],
  );

  const handleNextPage = useCallback(() => {
    dispatch(setPageAction(currentPage + 1));
    fetchNextPage();
  }, [dispatch, fetchNextPage, currentPage]);

  const handlePreviousPage = useCallback(() => {
    if (currentPage > 1) {
      dispatch(setPageAction(currentPage - 1));
    }
  }, [dispatch, currentPage]);

  let display = isLoading ? (
    'Calculating...'
  ) : (
    <>
      Page{' '}
      <TextGradient type='brand'>
        {currentPage} of {size && size / limit}
      </TextGradient>
    </>
  );

  return (
    <PaginationContainer className='pagination' role='navigation' arial-label='Pagination of products'>
      <ArrowContainer
        left
        arial-label='Previous page'
        onClick={() => {
          handlePreviousPage();
          refForward.current?.scrollIntoView();
        }}
        disabled={!hasPreviousPages}>
        <Arrow direction='left' color={!hasPreviousPages ? theme.colors.gray300 : theme.colors.gray500} />
      </ArrowContainer>
      <Text color='gray600'>{display}</Text>
      <ArrowContainer
        arial-label='Next Page'
        onClick={() => {
          handleNextPage();
          refForward.current?.scrollIntoView();
        }}
        disabled={canGoToNextPage}>
        <Arrow direction='right' color={!canGoToNextPage ? theme.colors.gray500 : theme.colors.gray300} />
      </ArrowContainer>
    </PaginationContainer>
  );
};

export default Pagination;
