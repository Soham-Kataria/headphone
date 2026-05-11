import { StatCard } from './StatCard';
import { Waveform } from '../viz/Waveform';

export interface ANCCardProps {
    className?: string;
}

export const ANCCard = ({ className }: ANCCardProps) => {
    return (
        <StatCard
            graphic={<Waveform accentColor="#FFFFFF" className="w-20 h-8" />}
            value="99% ANC"
            label="AMBIENT NOISE CANCELLATION"
            variant="accent"
            className={className}
        />
    );
};
