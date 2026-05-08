import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface StatCardProps {
    graphic: ReactNode;
    value: string | number;
    label: string;
    variant: 'dark' | 'accent';
    className?: string;
}

const variantStyles = {
    dark: 'bg-zinc-900/80 border border-zinc-700/50 text-white',
    accent: 'bg-[#E8C4A0] border border-[#D4A882] text-zinc-900',
};

const labelStyles = {
    dark: 'text-zinc-400',
    accent: 'text-[#8C6442]',
};

export const StatCard = ({ graphic, value, label, variant, className }: StatCardProps) => {
    return (
        <div 
            className={cn(
                "relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 backdrop-blur-md", 
                variantStyles[variant], 
                className
            )}
        >
            <div className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center">
                {graphic}
            </div>
            
            <div className="mt-16 flex flex-col gap-1">
                <span className="text-4xl font-light tracking-tight">{value}</span>
                <span className={cn(
                    "text-sm font-medium uppercase tracking-wider",
                    labelStyles[variant]
                )}>
                    {label}
                </span>
            </div>
        </div>
    );
};
