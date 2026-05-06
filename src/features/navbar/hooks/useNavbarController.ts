import { useState, useCallback, useEffect } from 'react';

interface NavbarControllerResult {
  isMobileOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

export const useNavbarController = (): NavbarControllerResult => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const unlockBody = useCallback(() => {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    const parsedScrollY = parseInt(scrollY || '0') * -1;
    window.scrollTo(0, parsedScrollY);
  }, []);

  const openMenu = useCallback(() => {
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    setIsMobileOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    unlockBody();
    setIsMobileOpen(false);
  }, [unlockBody]);

  useEffect(() => {
    return () => {
      if (document.body.style.position === 'fixed') {
        unlockBody();
      }
    };
  }, [unlockBody]);

  return { isMobileOpen, openMenu, closeMenu };
};
