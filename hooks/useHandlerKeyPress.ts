import { KeyboardEvent, useCallback } from 'react';
const useHandlerKeyPress = (callback: () => void) => {
  return useCallback((event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      callback();
    }
  }, [callback]);
};

export default useHandlerKeyPress;
