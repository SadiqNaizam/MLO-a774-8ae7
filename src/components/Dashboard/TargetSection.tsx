import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TargetItemProps {
  label: string;
  percentage: number;
  progressColor: string; // Tailwind background color class e.g. 'bg-primary'
}

const targetData: TargetItemProps[] = [
  { label: 'Income Target', percentage: 71, progressColor: 'bg-destructive' }, // Red
  { label: 'Expenses Target', percentage: 54, progressColor: 'bg-accent-green' }, // Green
  { label: 'Spendings Target', percentage: 32, progressColor: 'bg-accent-yellow' }, // Yellow
  { label: 'Totals Target', percentage: 89, progressColor: 'bg-primary' }, // Blue
];

interface TargetSectionProps {
  className?: string;
}

const TargetItem: React.FC<TargetItemProps> = ({ label, percentage, progressColor }) => {
  return (
    <div className="flex-1 min-w-[120px]">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-semibold text-card-foreground">{percentage}%</span>
        {/* Placeholder for potential icons or additional info */}
      </div>
      <Progress value={percentage} className={cn("h-2 rounded", progressColor)} indicatorClassName={progressColor} />
      <p className="text-xs text-muted-foreground mt-1.5">{label}</p>
    </div>
  );
};

const TargetSection: React.FC<TargetSectionProps> = ({ className }) => {
  return (
    <Card className={cn('shadow-sm', className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-lg font-medium">Target Section</CardTitle>
        <div className="flex items-center gap-2">
           <Button variant="link" className="text-primary p-0 h-auto text-sm">
            View Details
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary -mr-2">
            <Settings className="h-5 w-5" />
          </Button>
        </div> 
      </CardHeader>
      <CardContent className="pt-2 pb-4">
        <div className="flex flex-wrap gap-x-6 gap-y-4">
          {targetData.map((item) => (
            <TargetItem
              key={item.label}
              label={item.label}
              percentage={item.percentage}
              progressColor={item.progressColor}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TargetSection;
