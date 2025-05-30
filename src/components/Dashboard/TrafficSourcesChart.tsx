import React from 'react';
import {
  Bar, BarChart, CartesianGrid, Legend, Line, ComposedChart,
  ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, Dot } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TrafficSourcesChartProps {
  className?: string;
}

const chartData = [
  { name: 'Jan 00', websiteBlog: 400, socialMedia: 22 },
  { name: '02 Jan', websiteBlog: 520, socialMedia: 30 },
  { name: '03 Jan', websiteBlog: 410, socialMedia: 25 },
  { name: '04 Jan', websiteBlog: 650, socialMedia: 42 },
  { name: '05 Jan', websiteBlog: 220, socialMedia: 20 },
  { name: '06 Jan', websiteBlog: 450, socialMedia: 28 },
  { name: '07 Jan', websiteBlog: 200, socialMedia: 15 },
  { name: '08 Jan', websiteBlog: 380, socialMedia: 33 },
  { name: '09 Jan', websiteBlog: 780, socialMedia: 24 },
  { name: '10 Jan', websiteBlog: 280, socialMedia: 20 },
  { name: '11 Jan', websiteBlog: 180, socialMedia: 12 },
  { name: '12 Jan', websiteBlog: 340, socialMedia: 18 },
];

const TrafficSourcesChart: React.FC<TrafficSourcesChartProps> = ({ className }) => {
  return (
    <Card className={cn('shadow-sm', className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">Traffic Sources</CardTitle>
        <Button variant="default" size="sm" className="bg-accent-yellow text-black hover:bg-accent-yellow/90 h-8">
          Actions
        </Button>
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={chartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.5} vertical={false} />
              <XAxis 
                dataKey="name" 
                tickLine={false} 
                axisLine={false} 
                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                dy={10}
              />
              <YAxis 
                yAxisId="left" 
                orientation="left" 
                stroke="hsl(var(--muted-foreground))" 
                tickLine={false} 
                axisLine={false} 
                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                tickFormatter={(value) => `${value}`}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                stroke="hsl(var(--muted-foreground))" 
                tickLine={false} 
                axisLine={false} 
                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip
                cursor={{ fill: 'hsl(var(--card))', fillOpacity: 0.1 }}
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--popover))', 
                  borderColor: 'hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
                }}
                labelStyle={{ color: 'hsl(var(--popover-foreground))', fontWeight: 'bold' }}
              />
              <Legend 
                verticalAlign="bottom" 
                height={36} 
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: 13, color: 'hsl(var(--muted-foreground))' }}
                formatter={(value, entry) => (
                  <span style={{ color: entry.color }}>{value}</span>
                )}
              />
              <Bar dataKey="websiteBlog" yAxisId="left" fill="hsl(var(--primary))" name="Website Blog" barSize={20} radius={[4, 4, 0, 0]} />
              <Line type="monotone" dataKey="socialMedia" yAxisId="right" stroke="hsl(var(--accent-green))" strokeWidth={2} name="Social Media" dot={{ r: 4, strokeWidth: 2, fill: 'hsl(var(--accent-green))' }} activeDot={{ r: 6 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrafficSourcesChart;
