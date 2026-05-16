'use client';

import React from 'react';
import Hero from '@/features/hero';

const Page = () => {
    return (
        <main className="w-full">
            <Hero />

            <section
                id="features"
                className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-900 px-6 text-center text-white"
            >
                <h2 className="text-5xl font-bold tracking-tight md:text-7xl">
                    Features
                </h2>
                <p className="mt-6 max-w-lg text-lg text-zinc-400 italic">
                    Precision engineering for the modern listener.
                </p>
            </section>
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
        </main>
    );
};

export default Page;
