'use client';
import { createContext, useContext, useState, ReactNode, useCallback, useMemo } from 'react';

interface AppContextType {
    isSplashComplete: boolean;
    completeSplash: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [isSplashComplete, setIsSplashComplete] = useState(false);

    const completeSplash = useCallback(() => {
        setIsSplashComplete(true);
    }, []);

    const value = useMemo(() => ({
            isSplashComplete,
            completeSplash,
        }),
        [isSplashComplete, completeSplash],
    );

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};


export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppContextProvider');
    }
    return context;
};
