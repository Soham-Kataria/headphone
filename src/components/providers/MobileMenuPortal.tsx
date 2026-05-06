import { useEffect, useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface MobileMenuPortalProps {
  children: ReactNode;
}
export const MobileMenuPortal = ({ children }: MobileMenuPortalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(children, document.body);
};
