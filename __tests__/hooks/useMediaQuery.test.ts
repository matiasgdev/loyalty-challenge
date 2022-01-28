import { renderHook } from '@testing-library/react-hooks';
import useMediaQuery from '../../hooks/useMediaQuery';

describe('useMediaQuery', () => {
  test('should be true if the current innerWidth screen is <= 1024', () => {
      Object.defineProperty(window, 'innerWidth', {
          writable: true, 
          configurable: true, 
          value: 768
      })
      const { result } = renderHook(() => useMediaQuery(1024));
      expect(result.current).toBe(true);
  });
  
  test('should be false if the current innerWidth screen is >= 1024', () => {
      Object.defineProperty(window, 'innerWidth', {
          writable: true, 
          configurable: true, 
          value: 1350
      })
      const { result } = renderHook(() => useMediaQuery(1024));
      expect(result.current).toBe(false);
  });
})

