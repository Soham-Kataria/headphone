export interface FeatureDeepDive {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    imageUrl: string;
}

export const featureDeepDives: FeatureDeepDive[] = [
    {
        id: 'acoustic-engineering',
        eyebrow: '01 — ACOUSTIC PURITY',
        title: 'Custom 40mm Titanium-Coated Drivers',
        description:
            'Engineered from the ground up for uncompromising acoustic precision. The ultra-rigid titanium diaphragm minimizes modal distortion across high frequencies while delivering deep, controlled sub-bass. Experience reference-grade balance and crystal-clear instrument separation across every genre.',
        imageUrl: '/card.png',
    },
    {
        id: 'spatial-audio',
        eyebrow: '02 — SPATIAL ARCHITECTURE',
        title: 'Dynamic Spatial Audio & Head Tracking',
        description:
            'Step directly into a spherical soundstage. High-precision gyroscopic and accelerometer arrays track minute head movements in real time, recalibrating the binaural acoustic field so sound sources remain anchored in 3D space with cinematic realism and precise localization.',
        imageUrl: '/headphone.png',
    },
    {
        id: 'active-noise-cancellation',
        eyebrow: '03 — ACTIVE ISOLATION',
        title: 'Adaptive Hybrid Noise Cancellation',
        description:
            'A custom six-microphone array monitors external environmental noise alongside ear-canal resonance at 48,000 samples per second. Real-time inverse phase algorithms cancel out intrusive frequencies before they reach your eardrum, providing pure acoustic tranquility.',
        imageUrl: '/card.png',
    },
    {
        id: 'materials-craft',
        eyebrow: '04 — CRAFTSMANSHIP',
        title: 'Aerospace-Grade Aluminum & Memory Foam',
        description:
            'Crafted with CNC-machined anodized aluminum arms, a carbon-reinforced headband, and plush memory foam cushions draped in breathable protein leather. Balanced weight distribution guarantees long-term ergonomic comfort for all-day mastering and listening sessions.',
        imageUrl: '/headphone.png',
    },
];
