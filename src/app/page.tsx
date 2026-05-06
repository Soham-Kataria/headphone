'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap, useGSAP } from '@/lib/gsap';
import { useAppContext } from '@/components/providers/app-context-provider';

const Page = () => {
    const { isSplashComplete } = useAppContext();
    const containerRef = useRef<HTMLDivElement>(null);
    useGSAP(
        () => {
            if (!isSplashComplete) return;
            const tl = gsap.timeline();
            tl.from('.hero-content > *', {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
            });
        },
        { scope: containerRef, dependencies: [isSplashComplete] },
    );

    return (
        <main ref={containerRef} className="w-full">
            <section
                id="home"
                className="relative min-h-screen w-full bg-zinc-950 text-center text-white overflow-hidden"
            >
                {/* Image: absolutely positioned, centered with pt-20 offset — 
                    matches the splash overlay's positioning exactly */}
                <div className="absolute inset-0 flex items-center justify-center pt-20 px-6 pointer-events-none">
                    <div className="relative w-full h-[70vh] md:h-[80vh]">
                        <Image
                            src="/headphone.png"
                            alt="APEX Headphone"
                            fill
                            priority
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                        />
                    </div>
                </div>

                {/* Hero content: positioned at the bottom of the section */}
                <div className="relative z-10 flex min-h-screen flex-col items-center justify-end pb-16 pt-20">
                    <div className="hero-content max-w-4xl mx-auto">
                        <h1 className="text-6xl font-bold tracking-tighter md:text-9xl uppercase">
                            APEX<span className="text-primary">.</span>
                        </h1>
                        <p className="mt-4 max-w-lg mx-auto text-lg md:text-xl text-zinc-400 font-medium">
                            Sonic Perfection. Redefined.
                        </p>
                    </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            </section>
            <section
                id="features"
                className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-900 px-6 text-center text-white"
            >
                <h2 className="text-5xl font-bold tracking-tight md:text-7xl">
                    Features
                </h2>
                <p className="mt-6 max-w-lg text-lg text-zinc-400 italic">
                    Precision engineering for the modern listener.
                </p>
            </section>
            <section
                id="product"
                className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-800 px-6 text-center text-white"
            >
                <h2 className="text-5xl font-bold tracking-tight md:text-7xl">
                    Product
                </h2>
                <p className="mt-6 max-w-lg text-lg text-zinc-400 italic">
                    Available in Carbon Black, Silver Mist, and Midnight Blue.
                </p>
            </section>
        </main>
    );
};

export default Page;
