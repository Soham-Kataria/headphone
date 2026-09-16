import React from 'react';
import { featureDeepDives } from '@/constants/features';
import { FeaturePanel } from './components/FeaturePanel';

export default function Features() {
    return (
        <section id="features" className="w-full bg-zinc-950">
            {featureDeepDives.map((feature) => (
                <FeaturePanel key={feature.id} feature={feature} />
            ))}
        </section>
    );
}
