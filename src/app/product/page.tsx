import React from 'react';
import ProductSection from '@/features/product';
import Navbar from '@/features/navbar';

export const metadata = {
    title: 'Product | APEX Headphones',
    description: 'Explore the APEX Series One headphones in Carbon Black, Silver Mist, and Midnight Blue.',
};

export default function ProductPage() {
    return (
        <main className="w-full bg-zinc-950">
            <Navbar />
            <div className="pt-20"> {/* Offset for fixed navbar */}
                <ProductSection />
            </div>
        </main>
    );
}
