import React, { useRef } from 'react';
import { HeroBackground } from './components/HeroBackground';
import { HeroProduct } from './components/HeroProduct';
import { HeroStats } from './components/HeroStats';
import { HeroFeatures } from './components/HeroFeatures';
import { useAppContext } from '@/components/providers/app-context-provider';
import { gsap, useGSAP } from '@/lib/gsap';

export default function Hero() {
    const { isSplashComplete } = useAppContext();
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!isSplashComplete) return;

        const tl = gsap.timeline({
            defaults: { ease: "power4.out", duration: 1.4 }
        });
        tl.fromTo(".js-hero-bg", 
            { opacity: 0, scale: 1.1 },
            { opacity: 1, scale: 1, duration: 2.5 }
        )
        .fromTo(".js-hero-brand",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0 },
            "-=2"
        )
        .fromTo(".js-hero-stats",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0 },
            "-=1.5"
        )
        .fromTo(".js-hero-features",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0 },
            "-=1.2"
        );
    }, { scope: containerRef, dependencies: [isSplashComplete] });

    return (
        <section 
            ref={containerRef}
            className="relative w-full h-screen bg-zinc-950 overflow-hidden flex flex-col items-center justify-center"
        >
            <HeroBackground 
                text="HARNESS PURE SOUND." 
                className="js-hero-bg opacity-0" 
            />
            <HeroProduct 
                className="js-hero-product relative z-20 w-full h-full" 
            />
            <HeroStats 
                className="js-hero-stats opacity-0" 
            />
            <div className="js-hero-features absolute bottom-6 left-0 w-full px-12 z-50 opacity-0">
                <HeroFeatures />
            </div>
        </section>
    );
}
