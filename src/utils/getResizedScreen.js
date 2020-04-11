import {useState, useEffect} from 'react';
import theme from '../theme';

const useCurrentScreen = () => {
  const width = window.matchMedia(`(max-width: ${theme.breakpoints[0]})`).matches;
  let [isMobile, setIsMobile] = useState(width);

  const dynamicWidth = (value) => setIsMobile(value);

  useEffect(() => {
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => dynamicWidth(window.matchMedia(`(max-width: ${theme.breakpoints[0]})`).matches), 150);
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return isMobile;
};

export default useCurrentScreen;

