'use client';
import type { ReactNode } from 'react';
import GsapProvider from './gsap-provider';
import { AppContextProvider, useAppContext } from './app-context-provider';
import SplashOverlay from '@/features/splash';

const ClientShell = ({ children }: { children: ReactNode }) => {
    const { completeSplash } = useAppContext();

    return (
        <GsapProvider>
            <SplashOverlay 
                onComplete={completeSplash} 
                productName="APEX" 
                imageSrc="/headphone.png" 
            />
            {children}
        </GsapProvider>
    );
};

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <AppContextProvider>
            <ClientShell>{children}</ClientShell>
        </AppContextProvider>
    );
};

export default Providers;
