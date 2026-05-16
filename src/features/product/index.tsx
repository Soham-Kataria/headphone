'use client';

import React, { useRef } from 'react';
import { ProductShowcase } from './components/ProductShowcase';
import { gsap, useGSAP, ScrollTrigger } from '@/lib/gsap';

export default function ProductSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none none"
            }
        });

        tl.fromTo(".js-product-content",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
        );
    }, { scope: sectionRef });

    return (
        <section
            id="product"
            ref={sectionRef}
            className="relative w-full min-h-screen bg-zinc-950 px-6 py-32 flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-amber-500/5 blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[100px]" />

            <div className="container mx-auto js-product-content opacity-0">
                <ProductShowcase />
            </div>
        </section>
    );
}
