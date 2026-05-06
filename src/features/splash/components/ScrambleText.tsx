'use client';

import React, { useEffect } from 'react';
import { useScramble, UseScrambleOptions } from '../hooks/useScramble';

interface ScrambleTextProps extends UseScrambleOptions {
    text: string;
    progress: number;
    className?: string;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({
    text,
    progress,
    className = '',
    ...options
}) => {
    const { displayText, setProgress } = useScramble(text, options);
    useEffect(() => {
        setProgress(progress);
    }, [progress, setProgress]);


    return (
        <span className={className} style={{ fontVariantNumeric: 'tabular-nums' }}>
            {displayText || '\u00A0'}
        </span>
    );
};

export default ScrambleText;
