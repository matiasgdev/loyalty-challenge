import { renderHook } from '@testing-library/react-hooks';
import { KeyboardEvent } from 'react';
import useHandlerKeyPress from '../../hooks/useHandlerKeyPress';

let mock = jest.fn();

beforeEach(() => {
    jest.resetAllMocks();
})

describe('useHandlerKeyPress', () => {

  test('should fire callback if even key is Enter', () => {
      const { result } = renderHook(() => useHandlerKeyPress(mock));
      result.current({ key: 'Enter'} as KeyboardEvent<HTMLDivElement>);
      expect(mock).toHaveBeenCalledTimes(1);
  });

  test('should not fire callback if not properly key', () => {
      const { result } = renderHook(() => useHandlerKeyPress(mock));
      result.current({ key: 'Invalid Key'} as KeyboardEvent<HTMLDivElement>);
      expect(mock).not.toHaveBeenCalled();
  });
})

