import React from 'react';
import FeaturesSection from '@/features/features';
import Navbar from '@/features/navbar';

export const metadata = {
    title: 'Features | APEX Headphones',
    description: 'Discover the technical excellence and audio engineering behind APEX headphones.',
};

export default function FeaturesPage() {
    return (
        <main className="w-full bg-zinc-950">
            <Navbar />
            <div className="pt-20"> {/* Offset for fixed navbar */}
                <FeaturesSection />
            </div>
            {/* You could add a footer here if one exists */}
        </main>
    );
}
