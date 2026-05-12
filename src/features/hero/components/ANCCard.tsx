import { StatCard } from './StatCard';
import { Waveform } from '../viz/Waveform';

export interface ANCCardProps {
    className?: string;
}

export const ANCCard = ({ className }: ANCCardProps) => {
    return (
        <StatCard
            graphic={<Waveform accentColor="#ef4444" className="w-24 h-10" />}
            value="99% ANC"
            label="AMBIENT NOISE CANCELLATION"
            variant="dark"
            className={className}
        />
    );
};
