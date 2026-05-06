import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Providers from '@/components/providers';
import Navbar from '@/features/navbar';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://www.aurawave-audio.com'),
    title: {
        default: 'AuraWave Audio | Premium Wireless Headphones',
        template: '%s | AuraWave Audio',
    },
    description:
        'Experience immersive, high-fidelity sound with AuraWave. Shop our next-generation wireless headphones, earbuds, and industry-leading active noise cancellation gear.',
    keywords: [
        'headphones',
        'wireless earbuds',
        'noise-canceling',
        'audiophile',
        'high-fidelity sound',
        'AuraWave',
    ],
    authors: [{ name: 'AuraWave Audio' }],
    creator: 'AuraWave Audio',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://www.aurawave-audio.com',
        siteName: 'AuraWave Audio',
        title: 'AuraWave Audio | Premium Wireless Headphones',
        description:
            "Experience immersive, high-fidelity sound with AuraWave's next-generation wireless headphones.",
        images: [
            {
                url: '/opengraph-image.jpg',
                width: 1200,
                height: 630,
                alt: 'AuraWave Audio Premium Headphones',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AuraWave Audio | Premium Wireless Headphones',
        description:
            "Experience immersive, high-fidelity sound with AuraWave's next-generation wireless headphones.",
        creator: '@AuraWaveAudio',
        images: ['/twitter-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${outfit.variable} h-full antialiased dark`}
            suppressHydrationWarning
        >
            <body className="min-h-full flex flex-col font-sans selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
                <Providers>
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
