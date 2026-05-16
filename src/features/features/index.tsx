'use client';

import React, { useRef } from 'react';
import { FeatureGrid } from './components/FeatureGrid';
import { gsap, useGSAP, ScrollTrigger } from '@/lib/gsap';

export default function FeaturesSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none none"
            }
        });

        tl.fromTo(".js-features-title",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
        )
        .fromTo(".js-features-subtitle",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" },
            "-=0.6"
        )
        .fromTo(".js-feature-card",
            { opacity: 0, y: 40, scale: 0.95 },
            { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                duration: 0.8, 
                stagger: 0.1, 
                ease: "back.out(1.7)" 
            },
            "-=0.4"
        );
    }, { scope: sectionRef });

    return (
        <section
            id="features"
            ref={sectionRef}
            className="relative w-full min-h-screen bg-zinc-950 px-6 py-32 flex flex-col items-center overflow-hidden"
        >
            <div className="absolute top-0 left-1/4 h-px w-1/2 bg-linear-to-r from-transparent via-amber-500/20 to-transparent" />
            <div className="absolute -left-20 top-1/2 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[120px]" />

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-24">
                    <span className="js-features-subtitle inline-block text-[10px] font-bold tracking-[0.4em] text-amber-500 uppercase mb-4 opacity-0">
                        Technical Excellence
                    </span>
                    <h2 className="js-features-title text-5xl md:text-8xl font-bold tracking-tighter text-white opacity-0">
                        ENGINEERED FOR <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-500">
                            PURE PERFORMANCE.
                        </span>
                    </h2>
                    <p className="js-features-subtitle mt-8 mx-auto max-w-2xl text-lg text-zinc-400 font-light opacity-0">
                        Every component of APEX has been scrutinized to deliver an audio experience that transcends the ordinary.
                    </p>
                </div>
                <FeatureGrid />
            </div>
        </section>
    );
}
