'use client';

import React from 'react';
import Hero from '@/features/hero';
import ProductSection from '@/features/product';

const Page = () => {
    return (
        <main className="w-full">
            <Hero />
            <ProductSection />
        </main>
    );
};

export default Page;
