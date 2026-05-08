import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';

interface HeroProductProps {
    className?: string;
}

export const HeroProduct = ({ className }: HeroProductProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageWrapperRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!imageWrapperRef.current) return;

            const onEnter = () => {
                gsap.to(imageWrapperRef.current, {
                    scale: 1.05,
                    duration: 0.6,
                    ease: 'power2.out',
                });
            };
            const onLeave = () => {
                gsap.to(imageWrapperRef.current, {
                    scale: 1,
                    duration: 0.6,
                    ease: 'power2.out',
                });
            };

            imageWrapperRef.current.addEventListener('mouseenter', onEnter);
            imageWrapperRef.current.addEventListener('mouseleave', onLeave);

            return () => {
                imageWrapperRef.current?.removeEventListener(
                    'mouseenter',
                    onEnter,
                );
                imageWrapperRef.current?.removeEventListener(
                    'mouseleave',
                    onLeave,
                );
            };
        },
        { scope: containerRef },
    );

    return (
        <div
            ref={containerRef}
            className={cn(
                'grid place-items-center w-full max-w-7xl mx-auto h-full',
                className,
            )}
        >
            <div className="grid grid-cols-1 grid-rows-1 place-items-center w-full">
                <div
                    ref={imageWrapperRef}
                    className="col-start-1 row-start-1 z-20 cursor-pointer"
                >
                    <Image
                        src="/headphone.png"
                        alt="Premium Wireless Headphone"
                        width={1200}
                        height={1200}
                        className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        priority
                    />
                </div>
                <div className="js-hero-brand col-start-1 row-start-1 z-30 pointer-events-none select-none mix-blend-plus-lighter opacity-0">
                    <div className="translate-y-[85%]">
                        <h2 className="text-[12vw] font-black italic tracking-tighter text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] leading-none">
                            APEX<span className="text-zinc-800">.</span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
