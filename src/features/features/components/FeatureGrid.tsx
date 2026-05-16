'use client';

import React from 'react';
import { featuresData } from '@/constants/features';
import { FeatureCard } from './FeatureCard';

export const FeatureGrid = () => {
    return (
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuresData.map((feature, index) => (
                <FeatureCard 
                    key={feature.id} 
                    feature={feature} 
                    className={`js-feature-card opacity-0`}
                />
            ))}
        </div>
    );
};
