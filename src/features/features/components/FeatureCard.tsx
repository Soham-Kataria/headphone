'use client';

import React from 'react';
import { FeatureItem } from '@/constants/features';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
    feature: FeatureItem;
    className?: string;
}

export const FeatureCard = ({ feature, className }: FeatureCardProps) => {
    return (
        <div
            className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/40 p-8 backdrop-blur-xl transition-all duration-500 hover:border-amber-500/30 hover:bg-zinc-900/60",
                className
            )}
        >
            {/* Ambient Background Glow */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-500/5 blur-3xl transition-all duration-500 group-hover:bg-amber-500/10 group-hover:blur-2xl" />

            <div className="relative z-10">
                <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800 border border-white/5 text-amber-500 transition-colors group-hover:bg-amber-500 group-hover:text-black">
                        <feature.Icon size={24} strokeWidth={1.5} />
                    </div>
                    {feature.stats && (
                        <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
                            {feature.stats}
                        </span>
                    )}
                </div>

                <div className="mt-8">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-amber-500/50 uppercase">
                        {feature.category}
                    </span>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-white group-hover:text-amber-500 transition-colors">
                        {feature.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                        {feature.description}
                    </p>
                </div>
            </div>

            {/* Subtle bottom border highlight */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-linear-to-r from-amber-500 to-transparent transition-all duration-700 group-hover:w-full" />
        </div>
    );
};
