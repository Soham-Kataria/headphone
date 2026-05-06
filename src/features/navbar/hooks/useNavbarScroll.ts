import { useState, useEffect, useRef } from 'react';

export type NavbarScrollState = 'initial' | 'hidden' | 'scrolled';

interface NavbarScrollResult {
  scrollState: NavbarScrollState;
}
export const useNavbarScroll = (): NavbarScrollResult => {
  const [scrollState, setScrollState] = useState<NavbarScrollState>('initial');
  const prevScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateScrollState = () => {
      const currentScrollY = window.scrollY;
      const threshold = 50;
      const direction: 'up' | 'down' = currentScrollY > prevScrollY.current ? 'down' : 'up';
      if (currentScrollY < threshold) {
        setScrollState('initial');
      } else if (direction === 'down') {
        setScrollState('hidden');
      } else {
        setScrollState('scrolled');
      }
      prevScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScrollState);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateScrollState();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return { scrollState };
};
