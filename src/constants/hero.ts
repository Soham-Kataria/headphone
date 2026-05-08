import { LucideIcon, Speaker, Ear, Shield } from 'lucide-react';

export interface HeroFeature {
    id: string;
    title: string;
    description: string | string[];
    Icon: LucideIcon;
    imageUrl?: string;
}

export const heroFeaturesData: HeroFeature[] = [
    {
        id: 'titanium-drivers',
        title: 'TITANIUM DRIVERS',
        description: 'Precisely engineered dynamic responsiveness for studio clarity.',
        Icon: Speaker,
    },
    {
        id: 'spatial-audio',
        title: 'IMMERSIVE SPATIAL AUDIO',
        description: 'Dynamic head tracking and object-based sound optimization.',
        Icon: Ear,
    },
    {
        id: 'aluminum-chassis',
        title: 'ALUMINUM CHASSIS DETAIL',
        description: ['Lightweight alloy build', 'Robust construction'],
        Icon: Shield,
        imageUrl: '/card.png',
    }
];
