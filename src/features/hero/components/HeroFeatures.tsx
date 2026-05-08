import { cn } from '@/lib/utils';
import React from 'react';
import { heroFeaturesData } from '@/constants/hero';
import Image from 'next/image';

export interface HeroFeaturesProps {
    className?: string;
}

export const HeroFeatures = ({ className }: HeroFeaturesProps) => {
    const renderFeatureCard = (feature: typeof heroFeaturesData[0], isSmall = false) => (
        <div
            key={feature.id}
            className={cn(
                "relative overflow-hidden flex flex-col justify-between gap-4 rounded-2xl bg-zinc-900/80 border border-zinc-700/50 p-5 backdrop-blur-md transition-all duration-300 hover:bg-zinc-900 hover:border-zinc-500/50 group",
                isSmall ? "w-[260px]" : "w-[280px]"
            )}
        >
            {feature.imageUrl && (
                <>
                    <Image
                        src={feature.imageUrl}
                        alt={feature.title}
                        fill
                        className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-zinc-950/40 to-transparent z-0" />
                </>
            )}
            
            <div className="relative z-10 flex justify-between items-start">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white max-w-[140px] leading-tight group-hover:text-amber-500 transition-colors">
                    {feature.title}
                </h3>
                <feature.Icon
                    className="h-5 w-5 text-zinc-500 group-hover:text-white transition-colors"
                    strokeWidth={1.5}
                />
            </div>

            <div className="relative z-10 mt-auto text-[11px] text-zinc-400 leading-relaxed">
                {Array.isArray(feature.description) ? (
                    <ul className="flex flex-col gap-1.5">
                        {feature.description.map((line, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <span className="h-1 w-1 rounded-full bg-zinc-600 group-hover:bg-amber-500" />
                                {line}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>{feature.description}</p>
                )}
            </div>
        </div>
    );

    return (
        <div className={cn('flex flex-row items-end justify-between w-full', className)}>
            {/* Left side: 2 cards */}
            <div className="flex flex-row gap-4">
                {heroFeaturesData.slice(0, 2).map((feature) => renderFeatureCard(feature))}
            </div>

            {/* Right side: 1 card */}
            <div className="flex flex-row gap-4">
                {heroFeaturesData.slice(2).map((feature) => renderFeatureCard(feature, true))}
            </div>
        </div>
    );
};
