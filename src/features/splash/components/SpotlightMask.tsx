'use client';

import React from 'react';

interface SpotlightMaskProps {
    progress: number;
    children: React.ReactNode;
    className?: string;
}

const SpotlightMask: React.FC<SpotlightMaskProps> = ({
    progress,
    children,
    className = '',
}) => {
    const radius = progress * 150;

    return (
        <div
            className={`relative overflow-hidden ${className}`}
            style={{
                clipPath: `circle(${radius}% at 50% 50%)`,
                WebkitClipPath: `circle(${radius}% at 50% 50%)`,
            }}
        >
            {children}
        </div>
    );
};

export default SpotlightMask;
