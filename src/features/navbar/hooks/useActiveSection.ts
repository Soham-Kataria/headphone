import { useState, useEffect, useRef } from 'react';
export const useActiveSection = (
    sectionIds: string[],
    offset: number = 0,
): string | null => {
    const [activeId, setActiveId] = useState<string | null>(null);
    const ratios = useRef<Record<string, number>>({});
    useEffect(() => {
        const elements = sectionIds
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);
        if (elements.length === 0) return;
        const observerOptions: IntersectionObserverInit = {
            rootMargin: `-${offset}px 0px 0px 0px`,
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        };
        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                const id = entry.target.id;
                ratios.current[id] = entry.isIntersecting
                    ? entry.intersectionRatio
                    : 0;
            });
            let maxRatio = 0;
            let winner: string | null = null;
            Object.entries(ratios.current).forEach(([id, ratio]) => {
                if (ratio > maxRatio) {
                    maxRatio = ratio;
                    winner = id;
                }
            });
            if (winner && maxRatio > 0.1) {
                setActiveId(winner);
            } else if (maxRatio <= 0.1) {
                setActiveId(null);
            }
        };
        const observer = new IntersectionObserver(
            handleIntersect,
            observerOptions,
        );
        elements.forEach((el) => observer.observe(el));
        return () => {
            observer.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sectionIds.join(','), offset]);

    return activeId;
};
