import { KeyboardEvent, useCallback } from 'react';
const useHandlerKeyPress = <Element = HTMLDivElement>(callback: () => void) => {
  return useCallback(
    (event: KeyboardEvent<Element>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        callback();
      }
    },
    [callback],
  );
};

export default useHandlerKeyPress;
