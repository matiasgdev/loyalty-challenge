import { useEffect, useState } from 'react';

function useMediaQuery(size: number) {
  const [mqMatches, setMqMatches] = useState(false);

  useEffect(() => {
    const listener = () => {
      setMqMatches(window?.innerWidth <= size);
    };
    setMqMatches(window?.innerWidth <= size);
    const mql = window.matchMedia(`(min-width: ${size}px)`);
    mql.addEventListener('change', listener);
    return () => mql.removeEventListener('change', listener);
  }, [size]);

  return mqMatches;
}

export default useMediaQuery;
