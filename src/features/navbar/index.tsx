'use client';

import React, { useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { gsap, useGSAP } from '@/lib/gsap';
import { useNavbarScroll } from './hooks/useNavbarScroll';
import { useActiveSection } from './hooks/useActiveSection';
import { useNavbarController } from './hooks/useNavbarController';
import { MobileMenuPortal } from './components/MobileMenuPortal';
import { CTAButton } from '@/components/ui/cta-button';
import { useAppContext } from '@/components/providers/app-context-provider';

const NAV_LINKS = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Features', href: '#features', id: 'features' },
    { label: 'Product', href: '#product', id: 'product' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
];

interface MobileMenuOverlayProps {
    closeMenu: () => void;
    activeId: string | null;
}

const MobileMenuOverlay = ({ closeMenu, activeId }: MobileMenuOverlayProps) => {
    const menuPanelRef = useRef<HTMLDivElement>(null);

    const handleClose = () => {
        if (menuPanelRef.current) {
            gsap.to(menuPanelRef.current, {
                xPercent: 100,
                duration: 0.4,
                ease: 'power3.in',
                onComplete: () => {
                    closeMenu();
                },
            });
        } else {
            closeMenu();
        }
    };

    useGSAP(() => {
        gsap.from(menuPanelRef.current, {
            xPercent: 100,
            duration: 0.5,
            ease: 'power3.out',
        });
    });

    return (
        <div
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm md:hidden"
            onClick={handleClose}
        >
            <div
                ref={menuPanelRef}
                className="mobile-menu-panel absolute right-0 top-0 h-full w-[80%] bg-background p-6 shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between pb-8 border-b border-border/50">
                    <span className="text-2xl font-bold tracking-tighter text-foreground">
                        APEX<span className="text-primary">.</span>
                    </span>
                    <button
                        onClick={handleClose}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                        <X size={28} />
                    </button>
                </div>

                <ul className="flex flex-col gap-8 pt-12">
                    {NAV_LINKS.map((link) => (
                        <li key={link.id}>
                            <a
                                href={link.href}
                                onClick={handleClose}
                                className={cn(
                                    'text-4xl font-bold tracking-tighter transition-colors',
                                    activeId === link.id
                                        ? 'text-primary'
                                        : 'text-muted-foreground',
                                )}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="mt-auto pb-10">
                    <CTAButton
                        label="Get Started"
                        url="#product"
                        size="lg"
                        className="w-full h-14 text-lg"
                        onClick={handleClose}
                    />
                </div>
            </div>
        </div>
    );
};

export const Navbar = () => {
    const navRef = useRef<HTMLElement>(null);
    const innerContainerRef = useRef<HTMLDivElement>(null);
    const { scrollState } = useNavbarScroll();
    const activeId = useActiveSection(NAV_LINKS.map((link) => link.id));
    const { isMobileOpen, openMenu, closeMenu } = useNavbarController();
    const { isSplashComplete } = useAppContext();

    // Navbar Entrance Animation
    useGSAP(
        () => {
            if (!isSplashComplete) return;

            gsap.fromTo(
                innerContainerRef.current,
                { y: -100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power4.out',
                    clearProps: 'all',
                },
            );
        },
        { scope: navRef, dependencies: [isSplashComplete] },
    );

    return (
        <>
            <nav
                ref={navRef}
                className={cn(
                    'fixed left-0 right-0 top-0 z-50 flex h-20 items-center transition-all duration-500 ease-in-out',
                    scrollState === 'initial' && 'bg-transparent text-white',
                    scrollState === 'scrolled' &&
                        'h-16 bg-background/80 backdrop-blur-md border-b border-border/50 text-foreground',
                    scrollState === 'hidden' && '-translate-y-full',
                )}
            >
                <div
                    ref={innerContainerRef}
                    className="container mx-auto flex items-center justify-between px-6"
                >
                    <a
                        href="#home"
                        className={cn(
                            'text-2xl font-bold tracking-tighter transition-colors',
                            scrollState === 'initial'
                                ? 'text-white'
                                : 'text-foreground',
                        )}
                    >
                        APEX<span className="text-primary">.</span>
                    </a>
                    <ul className="hidden items-center gap-8 md:flex">
                        {NAV_LINKS.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={link.href}
                                    className={cn(
                                        'text-sm font-medium transition-colors',
                                        scrollState === 'initial'
                                            ? 'text-white/70 hover:text-white'
                                            : activeId === link.id
                                              ? 'text-primary'
                                              : 'text-muted-foreground hover:text-primary',
                                    )}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden md:block">
                        <CTAButton label="Buy Now" url="#product" size="sm" />
                    </div>
                    <button
                        onClick={openMenu}
                        className={cn(
                            'flex items-center justify-center p-2 md:hidden transition-colors',
                            scrollState === 'initial'
                                ? 'text-white'
                                : 'text-foreground',
                        )}
                        aria-label="Open Menu"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </nav>

            {isMobileOpen && (
                <MobileMenuPortal>
                    <MobileMenuOverlay
                        closeMenu={closeMenu}
                        activeId={activeId}
                    />
                </MobileMenuPortal>
            )}
        </>
    );
};

export default Navbar;
