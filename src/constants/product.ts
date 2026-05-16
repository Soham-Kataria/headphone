export interface ProductVariant {
    id: string;
    name: string;
    colorCode: string;
    description: string;
    imageUrl: string;
}

export const productVariants: ProductVariant[] = [
    {
        id: 'carbon-black',
        name: 'Carbon Black',
        colorCode: '#09090b',
        description: 'A deep, matte finish inspired by aerospace-grade carbon fiber.',
        imageUrl: '/headphone.png', // Fallback to existing image
    },
    {
        id: 'silver-mist',
        name: 'Silver Mist',
        colorCode: '#d4d4d8',
        description: 'A refined, brushed aluminum aesthetic with subtle metallic depth.',
        imageUrl: '/headphone.png',
    },
    {
        id: 'midnight-blue',
        name: 'Midnight Blue',
        colorCode: '#1e3a8a',
        description: 'A sophisticated navy tone that shifts elegantly with light.',
        imageUrl: '/headphone.png',
    },
];

export const productSpecs = [
    { label: 'Weight', value: '250g' },
    { label: 'Battery', value: '60 Hours' },
    { label: 'Bluetooth', value: 'v5.3' },
    { label: 'ANC', value: 'Adaptive' },
];
