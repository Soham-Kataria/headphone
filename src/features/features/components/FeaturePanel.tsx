import React from 'react';
import Image from 'next/image';
import { FeatureDeepDive } from '@/constants/features';
import { cn } from '@/lib/utils';

export interface FeaturePanelProps {
    feature: FeatureDeepDive;
    className?: string;
}

export const FeaturePanel: React.FC<FeaturePanelProps> = ({ feature, className }) => {
    return (
        <article
            id={`feature-${feature.id}`}
            className={cn(
                'relative flex min-h-screen w-full items-center justify-center bg-zinc-950 px-6 py-20 text-white md:px-12 lg:px-20',
                className,
            )}
        >
            <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <div className="flex flex-col items-start justify-center">
                    <span className="font-mono text-xs font-semibold tracking-widest text-amber-500 uppercase md:text-sm">
                        {feature.eyebrow}
                    </span>
                    <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                        {feature.title}
                    </h2>
                    <p className="mt-6 max-w-xl text-base text-zinc-400 md:text-lg leading-relaxed">
                        {feature.description}
                    </p>
                </div>
                <div className="relative flex w-full items-center justify-center">
                    <div className="absolute -inset-4 rounded-3xl bg-linear-to-tr from-amber-500/10 via-zinc-800/20 to-transparent blur-2xl opacity-60 pointer-events-none" />

                    <div className="relative flex aspect-4/3 w-full max-w-lg items-center justify-center overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/50 p-6 backdrop-blur-xl shadow-2xl">
                        <div className="absolute inset-0 bg-linear-to-b from-white/5 via-transparent to-black/40 pointer-events-none" />
                        <Image
                            src={feature.imageUrl}
                            alt={feature.title}
                            width={540}
                            height={420}
                            className="relative z-10 max-h-[320px] w-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.8)] transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </article>
    );
};
