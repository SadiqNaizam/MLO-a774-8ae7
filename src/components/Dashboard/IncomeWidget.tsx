import React from 'react';
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IncomeWidgetProps {
  className?: string;
}

const incomeData = [{ name: 'Income', value: 75, fill: 'url(#incomeGradient)' }];

const IncomeWidget: React.FC<IncomeWidgetProps> = ({ className }) => {
  const percentage = incomeData[0].value;

  return (
    <Card className={cn('shadow-sm', className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">Income</CardTitle>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5 text-muted-foreground" />
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col items-center pt-4 pb-6">
        <div className="h-[200px] w-[200px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              innerRadius="70%"
              outerRadius="100%"
              data={incomeData}
              startAngle={90}
              endAngle={90 + (percentage / 100) * 360 * -1} // Adjust end angle for partial circle
              barSize={20}
            >
              <defs>
                <linearGradient id="incomeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0AB39C" /> {/* accent-green */} 
                  <stop offset="100%" stopColor="hsl(var(--primary))" /> {/* primary blue */} 
                </linearGradient>
              </defs>
              <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
              <RadialBar
                background={{ fill: 'hsl(var(--muted))' }}
                dataKey="value"
                angleAxisId={0}
                cornerRadius={10}
              />
            </RadialBarChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xs text-muted-foreground">Percent</span>
            <span className="text-4xl font-bold text-card-foreground">{percentage}</span>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="text-lg font-semibold text-accent-yellow">32%</span> Spendings Target
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default IncomeWidget;
