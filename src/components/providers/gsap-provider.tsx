'use client';
import { useEffect, type ReactNode } from 'react';
import { useGSAP, ScrollTrigger, gsap } from '@/lib/gsap';
import { usePathname } from 'next/navigation';

const GsapProvider = ({ children }: { children: ReactNode }) => {
    const pathName = usePathname();
    useEffect(() => {
        ScrollTrigger.refresh();
    }, [pathName]);

    useEffect(() => {
        const handleLoad = () => {
            ScrollTrigger.refresh();
        };
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
    }, []);

    useGSAP(() => {
        gsap.defaults({
            duration: 1,
            ease: 'power3.out',
        });
        ScrollTrigger.defaults({
            scroller: document.body,
            markers: process.env.NODE_ENV === 'development',
        });
    }, []);
    return <>{children}</>;
};

export default GsapProvider;
