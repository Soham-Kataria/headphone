'use client';

import React from 'react';
import Hero from '@/features/hero';
import ProductSection from '@/features/product';
import FeaturesSection from '@/features/features';

const Page = () => {
    return (
        <main className="w-full">
            <Hero />
            <FeaturesSection />
            <section
                id="product"
                className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-800 px-6 text-center text-white"
            >
                <h2 className="text-5xl font-bold tracking-tight md:text-7xl">
                    Product
                </h2>
                <p className="mt-6 max-w-lg text-lg text-zinc-400 italic">
                    Available in Carbon Black, Silver Mist, and Midnight Blue.
                </p>
            </section>
            <ProductSection />
        </main>
    );
};

export default Page;
