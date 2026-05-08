import { cn } from '@/lib/utils';
import React from 'react';

interface HeroBackgroundProps {
  text: string;
  className?: string;
}

export const HeroBackground = ({ text, className }: HeroBackgroundProps) => {
  return (
    <div 
      className={cn(
        "absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0",
        className
      )}
    >
      <h1 className="text-[10vw] font-black uppercase tracking-tighter text-white/10 leading-none whitespace-nowrap">
        {text}
      </h1>
    </div>
  );
};
