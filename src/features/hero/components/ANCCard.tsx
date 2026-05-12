import { StatCard } from './StatCard';
import { Waveform } from '../viz/Waveform';

export interface ANCCardProps {
    className?: string;
}

export const ANCCard = ({ className }: ANCCardProps) => {
    return (
        <StatCard
            graphic={<Waveform accentColor="#3b82f6" className="w-28 h-12" />}
            value="99% ANC"
            label="AMBIENT NOISE CANCELLATION"
            variant="accent"
            className={className}
        />
    );
};
