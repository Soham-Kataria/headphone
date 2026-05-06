import { useState, useCallback, useRef } from 'react';

export interface UseScrambleOptions {
    glyphs?: string;
    stagger?: number;
    chance?: number;
}

const DEFAULT_GLYPHS = 'ABCDEFGHIKLMNOPQRSTVXYZ0123456789!@#$%^&*()_+';
export const useScramble = (
    text: string,
    options: UseScrambleOptions = {}
) => {
    const {
        glyphs = DEFAULT_GLYPHS,
        stagger = 0.3, 
        chance = 0.6,
    } = options;

    const [displayText, setDisplayText] = useState('');
    const lastProgress = useRef(0);

    const scramble = useCallback(
        (progress: number) => {
            const characters = text.split('');
            const totalChars = characters.length;

            const result = characters.map((char, i) => {
                const charStart = (i / totalChars) * (1 - stagger);
                const charEnd = charStart + stagger;
                const charProgress = Math.min(
                    Math.max((progress - charStart) / (charEnd - charStart), 0),
                    1
                );
                if (charProgress <= 0) {
                    return glyphs[Math.floor(Math.random() * glyphs.length)];
                }
                if (charProgress >= 1) return char;
                if (Math.random() < chance) {
                    return glyphs[Math.floor(Math.random() * glyphs.length)];
                }
                return char;
            });
            return result.join('');
        },
        [text, glyphs, stagger, chance]
    );

    const setProgress = useCallback(
        (val: number) => {
            const isAtEnd = val === 1 && lastProgress.current !== 1;
            const hasMoved = Math.abs(val - lastProgress.current) > 0.001;
            const isNoisy = val < 1;

            if (hasMoved || isAtEnd || isNoisy) {
                setDisplayText(scramble(val));
                lastProgress.current = val;
            }
        },
        [scramble]
    );
    return {
        displayText,
        setProgress,
    };
};
