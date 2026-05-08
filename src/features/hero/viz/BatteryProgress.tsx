'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import { cn } from '@/lib/utils';
import { useAppContext } from '@/components/providers/app-context-provider';

export interface BatteryProgressProps {
    percentage?: number;
    accentColor?: string;
    className?: string;
}

export function BatteryProgress({ 
    percentage = 75, 
    accentColor = '#ef4444', 
    className 
}: BatteryProgressProps) {
    const { isSplashComplete } = useAppContext();
    const progressRef = useRef<SVGRectElement>(null);

    useGSAP(() => {
        if (!isSplashComplete) return;
        const maxFillWidth = 86;
        const targetWidth = (Math.max(0, Math.min(percentage, 100)) / 100) * maxFillWidth;

        gsap.to(progressRef.current, {
            width: targetWidth,
            duration: 1.5,
            ease: 'power4.out',
            delay: 0.5,
        });
    }, { dependencies: [isSplashComplete, percentage] });

    return (
        <div className={cn("flex flex-col gap-2 w-full max-w-24", className)}>
            <svg 
                viewBox="0 0 100 32" 
                className="w-full h-auto overflow-visible" 
                aria-hidden="true"
            >
                <rect 
                    x="1" 
                    y="1" 
                    width="92" 
                    height="30" 
                    rx="2" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    className="text-zinc-700"
                />
                <path 
                    d="M 93 10 h 3 a 2 2 0 0 1 2 2 v 8 a 2 2 0 0 1 -2 2 h -3" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className="text-zinc-700"
                />
                <rect 
                    ref={progressRef}
                    x="4" 
                    y="4" 
                    width="0" 
                    height="24" 
                    rx="1" 
                    fill={accentColor}
                />
            </svg>
        </div>
    );
}