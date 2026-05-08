import { cn } from '@/lib/utils';
import React, { useRef } from 'react';
import { ANCCard } from './ANCCard';
import { BatteryCard } from './BatteryCard';
import { gsap, useGSAP } from '@/lib/gsap';

interface HeroStatsProps {
  className?: string;
}

export const HeroStats = ({ className }: HeroStatsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ancRef = useRef<HTMLDivElement>(null);
  const batteryRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const setupHover = (el: HTMLDivElement | null, restRotation: number) => {
      if (!el) return;

      const onEnter = () => gsap.to(el, { rotation: 0, scale: 1.05, duration: 0.4, ease: "power2.out" });
      const onLeave = () => gsap.to(el, { rotation: restRotation, scale: 1, duration: 0.4, ease: "power2.out" });

      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);

      return () => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      };
    };

    const cleanupAnc = setupHover(ancRef.current, -3);
    const cleanupBattery = setupHover(batteryRef.current, 3);

    return () => {
      cleanupAnc?.();
      cleanupBattery?.();
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={cn("absolute inset-0 z-40 pointer-events-none", className)}>
      <div className="relative w-full h-full max-w-[1400px] mx-auto px-12">
        <div ref={ancRef} className="absolute top-[10%] left-[5%] pointer-events-auto -rotate-3 origin-center">
          <ANCCard className="w-[320px]" />
        </div>
        <div ref={batteryRef} className="absolute top-[10%] right-[5%] pointer-events-auto rotate-3 origin-center">
          <BatteryCard className="w-[320px]" />
        </div>
      </div>
    </div>
  );
};
