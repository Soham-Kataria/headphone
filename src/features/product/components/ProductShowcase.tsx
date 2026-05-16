'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { productVariants } from '@/constants/product';
import { cn } from '@/lib/utils';
import { gsap } from '@/lib/gsap';

export const ProductShowcase = () => {
    const [activeVariant, setActiveVariant] = useState(productVariants[0]);
    const imageRef = useRef<HTMLDivElement>(null);

    const handleVariantChange = (variant: typeof productVariants[0]) => {
        if (variant.id === activeVariant.id) return;

        // Simple swap animation
        gsap.to(imageRef.current, {
            opacity: 0,
            scale: 0.95,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                setActiveVariant(variant);
                gsap.to(imageRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        });
    };

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 w-full">
            {/* Image Section */}
            <div className="relative flex-1 w-full flex justify-center items-center">
                <div className="absolute inset-0 bg-radial from-amber-500/10 to-transparent blur-3xl" />
                <div ref={imageRef} className="relative z-10 transition-all duration-700">
                    <Image
                        src={activeVariant.imageUrl}
                        alt={`APEX Headphones in ${activeVariant.name}`}
                        width={600}
                        height={600}
                        className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 space-y-12">
                <div className="space-y-4">
                    <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs">
                        The Masterpiece
                    </span>
                    <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        APEX <span className="text-zinc-500">SERIES ONE.</span>
                    </h3>
                    <p className="text-lg text-zinc-400 max-w-md font-light leading-relaxed">
                        {activeVariant.description}
                    </p>
                </div>

                <div className="space-y-6">
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest">
                        Choose your finish
                    </h4>
                    <div className="flex gap-4">
                        {productVariants.map((variant) => (
                            <button
                                key={variant.id}
                                onClick={() => handleVariantChange(variant)}
                                className={cn(
                                    "group relative flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-300",
                                    activeVariant.id === variant.id 
                                        ? "border-amber-500 ring-4 ring-amber-500/10" 
                                        : "border-white/10 hover:border-white/30"
                                )}
                                aria-label={`Switch to ${variant.name}`}
                            >
                                <div 
                                    className="h-10 w-10 rounded-full shadow-inner" 
                                    style={{ backgroundColor: variant.colorCode }}
                                />
                                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold text-zinc-500 opacity-0 transition-opacity group-hover:opacity-100 uppercase tracking-tighter">
                                    {variant.name}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="pt-8 flex flex-wrap gap-8">
                    <button className="h-14 px-10 rounded-full bg-white text-black font-bold hover:bg-amber-500 transition-colors duration-300">
                        Buy Now — $349
                    </button>
                    <button className="h-14 px-10 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-colors duration-300">
                        Technical Specs
                    </button>
                </div>
            </div>
        </div>
    );
};
