'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { gsap, useGSAP } from '@/lib/gsap';
import SpotlightMask from './components/SpotlightMask';
import ScrambleText from './components/ScrambleText';

interface SplashOverlayProps {
    onComplete: () => void;
    productName: string;
    imageSrc: string;
}

const SplashOverlay: React.FC<SplashOverlayProps> = ({
    onComplete,
    productName,
    imageSrc,
}) => {
    const [shouldRender, setShouldRender] = useState(true);
    const [spotProgress, setSpotProgress] = useState(0);
    const [textProgress, setTextProgress] = useState(0);

    const overlayRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const animValues = useRef({ spot: 0, scramble: 0 });

    useGSAP(() => {
        // No master onComplete — the overlay fade's own onComplete handles unmount
        const tl = gsap.timeline();

        // ── Phase 1a: Spotlight beam appears (no image yet) ──
        // A bright, two-layer spotlight opens up on the black screen.
        // The clip-path radius is still 0 so the image is fully clipped.
        tl.fromTo(
            glowRef.current,
            { autoAlpha: 0, scale: 0.3 },
            {
                autoAlpha: 1,
                scale: 1,
                duration: 1,
                ease: 'power2.out',
            },
        );

        // ── Phase 1b: Image reveals via clip-path + text scramble (simultaneous) ──
        tl.to(
            animValues.current,
            {
                spot: 0.16,
                scramble: 1,
                duration: 2.5,
                ease: 'power2.inOut',
                onUpdate: () => {
                    setSpotProgress(animValues.current.spot);
                    setTextProgress(animValues.current.scramble);
                },
            },
            '-=0.3',
        );

        // ── Phase 2: Anticipation pulse ──
        tl.to(
            imageContainerRef.current,
            {
                scale: 1.08,
                duration: 0.4,
                ease: 'power2.out',
            },
            '+=0.2',
        );
        tl.to(imageContainerRef.current, {
            scale: 1,
            duration: 0.6,
            ease: 'power2.inOut',
        });

        // ── Phase 3: Everything fades out simultaneously ──
        // The bg, glow, spotlight, text, and overlay all fade together.
        // The overlay fade's onComplete triggers the unmount.
        const phase3Start = '+=0.3';

        // Black background fades
        tl.to(
            bgRef.current,
            {
                autoAlpha: 0,
                duration: 1.2,
                ease: 'power2.inOut',
            },
            phase3Start,
        );

        // Spotlight expands to reveal full image
        tl.to(
            animValues.current,
            {
                spot: 1,
                duration: 1.2,
                ease: 'power2.inOut',
                onUpdate: () => {
                    setSpotProgress(animValues.current.spot);
                },
            },
            '<',
        );

        // Glow fades
        tl.to(
            glowRef.current,
            {
                autoAlpha: 0,
                duration: 1.2,
                ease: 'power2.inOut',
            },
            '<',
        );

        // Text fades explicitly
        tl.to(
            textRef.current,
            {
                autoAlpha: 0,
                duration: 0.8,
                ease: 'power2.inOut',
            },
            '<',
        );

        // Entire overlay fades — onComplete triggers unmount AFTER fade finishes
        tl.to(
            overlayRef.current,
            {
                autoAlpha: 0,
                duration: 1.2,
                ease: 'power2.inOut',
                onComplete: () => {
                    onComplete();
                    setShouldRender(false);
                },
            },
            '<',
        );
    }, { scope: overlayRef });

    if (!shouldRender) return null;

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center"
        >
            {/* ── Background layer: solid black, fades independently ── */}
            <div
                ref={bgRef}
                className="absolute inset-0 bg-black"
            />

            {/* ── Spotlight beam: bright two-layer light, appears Phase 1a ── */}
            <div
                ref={glowRef}
                className="absolute inset-0 flex items-center justify-center pointer-events-none pt-20 px-6"
                style={{ visibility: 'hidden', opacity: 0 }}
            >
                {/* Outer halo — soft, wide glow */}
                <div
                    className="absolute w-[60vmin] h-[60vmin] rounded-full"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)',
                        filter: 'blur(30px)',
                    }}
                />
                {/* Inner core — bright, tight center */}
                <div
                    className="absolute w-[25vmin] h-[25vmin] rounded-full"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.12) 50%, transparent 80%)',
                        filter: 'blur(15px)',
                    }}
                />
            </div>

            {/* ── Image layer: revealed by SpotlightMask clip-path ── */}
            <div
                ref={imageContainerRef}
                className="absolute inset-0 flex items-center justify-center pointer-events-none pt-20 px-6"
            >
                <SpotlightMask
                    progress={spotProgress}
                    className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center bg-transparent"
                >
                    <Image
                        src={imageSrc}
                        alt={productName}
                        fill
                        priority
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                    />
                </SpotlightMask>
            </div>

            {/* ── Scramble text ── */}
            <div ref={textRef} className="relative z-10 mt-[40vh] pointer-events-none">
                <ScrambleText
                    text={productName}
                    progress={textProgress}
                    className="text-white text-5xl md:text-7xl font-bold tracking-[0.2em] uppercase"
                    chance={0.5}
                    stagger={0.4}
                />
            </div>

            {/* ── Film grain overlay ── */}
            <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
};

export default SplashOverlay;
