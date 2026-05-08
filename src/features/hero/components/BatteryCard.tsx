import { BatteryProgress } from '../viz/BatteryProgress';
import { StatCard } from './StatCard';

export interface BatteryCardProps {
    className?: string;
}

export const BatteryCard = ({ className }: BatteryCardProps) => {
    return (
        <StatCard
            graphic={<BatteryProgress percentage={85} accentColor="#5c3317" />}
            value="40+ Hour"
            label="BATTERY LIFE"
            variant="accent"
            className={className}
        />
    );
};
