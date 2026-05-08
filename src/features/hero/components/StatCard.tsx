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
            <div className="flex items-center justify-between gap-3">
                <span className="text-4xl font-bold tracking-tight">{value}</span>
                <div className="flex h-12 items-center justify-center">
                    {graphic}
                </div>
            </div>
            
            <div className="mt-4 flex flex-col gap-1">
                <span className={cn(
                    "text-[10px] font-medium uppercase tracking-widest",
                    labelStyles[variant]
                )}>
                    {label}
                </span>
            </div>
        </div>
    );
};
