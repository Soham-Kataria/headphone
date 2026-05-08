'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import { cn } from '@/lib/utils';

export interface WaveformProps {
    accentColor?: string;
    className?: string;
}

export function Waveform({ accentColor = '#ef4444', className }: WaveformProps) {
    const containerRef = useRef<SVGSVGElement>(null);
    const pathsRef = useRef<(SVGPathElement | null)[]>([]);

    useGSAP(() => {
        const layers = [
            { amplitude: 18, speed: 1.0, points: [] as { x: number; y: number; baseY: number }[] },
            { amplitude: 12, speed: 1.3, points: [] as { x: number; y: number; baseY: number }[] },
            { amplitude: 7, speed: 1.6, points: [] as { x: number; y: number; baseY: number }[] },
        ];

        const startX = 2;
        const endX = 98;
        const numPoints = 8;
        const step = (endX - startX) / (numPoints - 1);
        const baseY = 20;
        layers.forEach((layer) => {
            for (let i = 0; i < numPoints; i++) {
                layer.points.push({
                    x: startX + i * step,
                    y: baseY,
                    baseY: baseY,
                });
            }
        });
        const generatePathD = (points: { x: number; y: number }[]) => {
            let d = `M ${points[0].x} ${points[0].y} `;
            for (let i = 1; i < points.length; i++) {
                const prev = points[i - 1];
                const curr = points[i];
                const stepX = curr.x - prev.x;
                const cp1x = prev.x + stepX * 0.4;
                const cp2x = curr.x - stepX * 0.4;
                d += `C ${cp1x} ${prev.y}, ${cp2x} ${curr.y}, ${curr.x} ${curr.y} `;
            }
            return d;
        };
        layers.forEach((layer) => {
            layer.points.forEach((point, i) => {
                if (i === 0 || i === numPoints - 1) return;
                const animatePoint = () => {
                    gsap.to(point, {
                        y: point.baseY + gsap.utils.random(-layer.amplitude, layer.amplitude),
                        duration: gsap.utils.random(0.5, 1.2) * layer.speed,
                        ease: 'sine.inOut',
                        onComplete: animatePoint,
                    });
                };
                animatePoint();
            });
        });
        const updatePaths = () => {
            layers.forEach((layer, i) => {
                if (pathsRef.current[i]) {
                    pathsRef.current[i]?.setAttribute('d', generatePathD(layer.points));
                }
            });
        };
        gsap.ticker.add(updatePaths);
        return () => gsap.ticker.remove(updatePaths);
    }, { scope: containerRef });

    return (
        <svg
            ref={containerRef}
            viewBox="0 0 100 40"
            className={cn('w-14 h-8', className)}
            aria-hidden="true"
        >
            <path
                ref={(el) => { pathsRef.current[2] = el; }}
                fill="none"
                stroke={accentColor}
                strokeWidth="1"
                strokeOpacity="0.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                ref={(el) => { pathsRef.current[1] = el; }}
                fill="none"
                stroke={accentColor}
                strokeWidth="1.5"
                strokeOpacity="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                ref={(el) => { pathsRef.current[0] = el; }}
                fill="none"
                stroke={accentColor}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}