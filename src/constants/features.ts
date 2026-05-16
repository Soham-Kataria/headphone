import { Speaker, Battery, Wifi, Shield, Zap, Mic2, Wind, Layers } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
    id: string;
    title: string;
    description: string;
    Icon: LucideIcon;
    stats?: string;
    category: string;
}

export const featuresData: FeatureItem[] = [
    {
        id: 'anc',
        title: 'Adaptive ANC',
        description: 'Military-grade noise cancellation that adapts to your environment in real-time.',
        Icon: Shield,
        stats: '45dB',
        category: 'Audio',
    },
    {
        id: 'battery',
        title: 'Endurance Power',
        description: 'Industry-leading battery life with ultra-fast charging capabilities.',
        Icon: Battery,
        stats: '60hrs',
        category: 'Power',
    },
    {
        id: 'drivers',
        title: 'Beryllium Drivers',
        description: 'Ultra-lightweight beryllium-coated drivers for zero distortion and pure sound.',
        Icon: Speaker,
        stats: '10Hz-40kHz',
        category: 'Audio',
    },
    {
        id: 'connectivity',
        title: 'HyperLink Wireless',
        description: 'Proprietary low-latency wireless protocol for lossless audio transmission.',
        Icon: Wifi,
        stats: '2.4GHz',
        category: 'Connectivity',
    },
    {
        id: 'charging',
        title: 'Flash Charge',
        description: 'Get 5 hours of high-fidelity playback with just a 10-minute charge.',
        Icon: Zap,
        stats: '10min',
        category: 'Power',
    },
    {
        id: 'voice',
        title: 'Studio Mic Array',
        description: 'Beam-forming microphone array for crystal clear communication in any weather.',
        Icon: Mic2,
        stats: '6-Mic',
        category: 'Communication',
    },
    {
        id: 'transparency',
        title: 'Smart Awareness',
        description: 'Intelligent transparency mode that amplifies human voices while filtering wind.',
        Icon: Wind,
        stats: 'Vocal+',
        category: 'Audio',
    },
    {
        id: 'customization',
        title: 'Modular Design',
        description: 'Swappable ear cushions and headbands for personalized comfort and longevity.',
        Icon: Layers,
        stats: 'Swappable',
        category: 'Design',
    },
];
