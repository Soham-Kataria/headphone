import React, { ReactNode, useCallback } from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { type VariantProps } from 'class-variance-authority';
import { Button, buttonVariants } from './button';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface CTAButtonProps {
    label: string;
    url: string;
    external?: boolean;
    isLoading?: boolean;
    disabled?: boolean;
    onClick?: (e?: React.MouseEvent) => void;
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    className?: string;
    ariaLabel?: string;
}

export const CTAButton = ({
    label,
    url,
    external = false,
    isLoading = false,
    disabled = false,
    onClick,
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'left',
    className,
    ariaLabel,
}: CTAButtonProps) => {
    const isActuallyDisabled = disabled || isLoading;
    const shadcnVariant: VariantProps<typeof buttonVariants>['variant'] =
        variant === 'primary' ? 'default' : variant;
    const shadcnSize: VariantProps<typeof buttonVariants>['size'] =
        size === 'md' ? 'default' : size;

    const handleClick = useCallback(
        (e: React.MouseEvent) => {
            if (isActuallyDisabled) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            onClick?.(e);
        },
        [isActuallyDisabled, onClick],
    );

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (isActuallyDisabled && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
            }
        },
        [isActuallyDisabled],
    );

    const content = (
        <>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {!isLoading && icon && iconPosition === 'left' && (
                <span className="mr-2 flex items-center justify-center">
                    {icon}
                </span>
            )}
            <span>{label}</span>
            {!isLoading && icon && iconPosition === 'right' && (
                <span className="ml-2 flex items-center justify-center">
                    {icon}
                </span>
            )}
            {external && (
                <span className="sr-only"> (opens in a new window)</span>
            )}
        </>
    );

    const commonProps = {
        variant: shadcnVariant,
        size: shadcnSize,
        className: cn(
            className,
            isActuallyDisabled &&
                'pointer-events-none opacity-50 cursor-not-allowed',
        ),
        onClick: handleClick,
        onKeyDown: handleKeyDown,
        tabIndex: isActuallyDisabled ? -1 : 0,
        'aria-disabled': isActuallyDisabled,
        'aria-label': ariaLabel || label,
    };

    if (external) {
        return (
            <Button asChild {...commonProps}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {content}
                </a>
            </Button>
        );
    }

    return (
        <Button asChild {...commonProps}>
            <Link href={url}>{content}</Link>
        </Button>
    );
};
