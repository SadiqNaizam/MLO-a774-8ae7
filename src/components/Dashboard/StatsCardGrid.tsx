import React from 'react';
import StatCard, { StatCardProps } from './StatCard';
import { cn } from '@/lib/utils';

interface StatsCardGridProps {
  className?: string;
}

const statsData: StatCardProps[] = [
  {
    title: 'NEW ACCOUNTS',
    value: '234 %',
    trend: 'up' as const,
    trendColor: 'text-accent-green',
    progressValue: 58,
    progressColor: 'bg-primary',
  },
  {
    title: 'TOTAL EXPENSES',
    value: '71 %',
    trend: 'down' as const,
    trendColor: 'text-destructive',
    progressValue: 62,
    progressColor: 'bg-destructive',
  },
  {
    title: 'COMPANY VALUE',
    value: '$ 1,45M',
    trend: 'up' as const, // Example, image doesn't show trend icon but implies positive
    trendColor: 'text-accent-green', // Using green for positive, as value is positive
    progressValue: 72,
    progressColor: 'bg-accent-yellow',
  },
  {
    title: 'NEW EMPLOYEES',
    value: '+ 34 hires',
    trend: 'up' as const,
    trendColor: 'text-accent-green',
    progressValue: 81,
    progressColor: 'bg-accent-green',
  },
];

const StatsCardGrid: React.FC<StatsCardGridProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6', className)}>
      {statsData.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          trend={stat.trend}
          trendColor={stat.trendColor}
          trendValue={stat.trendValue} // Pass trendValue if it's different from the main value part
          progressValue={stat.progressValue}
          progressColor={stat.progressColor}
        />
      ))}
    </div>
  );
};

export default StatsCardGrid;
