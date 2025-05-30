import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface StatCardProps {
  title: string;
  value: string;
  trend: 'up' | 'down' | 'neutral';
  trendColor?: string;
  trendValue?: string; // e.g. "+15%" or just the percentage part
  progressValue: number;
  progressColor: string; // Tailwind background color class e.g. 'bg-primary'
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  trend,
  trendColor = 'text-muted-foreground',
  trendValue,
  progressValue,
  progressColor,
  className,
}) => {
  const TrendIcon = trend === 'up' ? ArrowUpRight : trend === 'down' ? ArrowDownRight : null;
  // The main value is '234 %', but the trend value might be just '%' for this specific card
  // Or it's part of the value string. Here, we assume 'value' is the large display, and 'trendValue' is optional for the small text.
  // For example, NEW ACCOUNTS: value='234 %', trend='up'. The '%' is part of the main value.
  // For others: value='$1.45M', no separate trendValue needed in small text unless design differs.

  const mainValueParts = value.split(' ');
  const numericPart = mainValueParts[0];
  const unitPart = mainValueParts.slice(1).join(' ');

  return (
    <Card className={cn('shadow-sm hover:shadow-md transition-shadow', className)}>
      <CardContent className="p-4 sm:p-5">
        <div className="flex items-start justify-between">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{title}</p>
          <div
            className={cn(
              'w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white',
              progressColor
            )}
          >
            {progressValue}
          </div>
        </div>
        <div className="mt-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-card-foreground">
            {TrendIcon && trend !== 'neutral' && (
              <TrendIcon className={cn('inline h-5 w-5 mr-1', trendColor)} />
            )}
            {numericPart} <span className="text-xl sm:text-2xl">{unitPart}</span>
          </h3>
          {/* Optional: if trendValue is provided and distinct from the main value's formatting */} 
          {trendValue && TrendIcon && (
             <p className={cn("text-xs mt-1", trendColor, "flex items-center")}>
                {trendValue} 
             </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
