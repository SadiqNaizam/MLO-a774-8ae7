import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PageHeader from '../components/Dashboard/PageHeader';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import TrafficSourcesChart from '../components/Dashboard/TrafficSourcesChart';
import IncomeWidget from '../components/Dashboard/IncomeWidget';
import TargetSection from '../components/Dashboard/TargetSection';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';
import { Info, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MiniStatCardData {
  title: string;
  value: string;
  changeText: string;
  TrendIcon: React.ElementType;
  trendColorClass: string;
}

const miniStatsData: MiniStatCardData[] = [
  {
    title: 'Income',
    value: '$5,456',
    changeText: '+14%',
    TrendIcon: TrendingUp,
    trendColorClass: 'text-accent-green',
  },
  {
    title: 'Expenses',
    value: '$4,764',
    changeText: '8%', 
    TrendIcon: TrendingUp,
    trendColorClass: 'text-destructive',
  },
  {
    title: 'Spendings',
    value: '$1.5M',
    changeText: '15%', 
    TrendIcon: TrendingDown,
    trendColorClass: 'text-accent-green',
  },
  {
    title: 'Totals',
    value: '$31,564',
    changeText: '+76%',
    TrendIcon: TrendingUp,
    trendColorClass: 'text-accent-green',
  },
];

const MiniStatCard: React.FC<MiniStatCardData> = ({ title, value, changeText, TrendIcon, trendColorClass }) => {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <p className="text-sm font-medium text-muted-foreground whitespace-nowrap">{title}</p>
        <p className="text-2xl font-semibold text-card-foreground mt-1">{value}</p>
        <div className={cn("flex items-center text-sm mt-2", trendColorClass)}>
          <TrendIcon className="h-4 w-4 mr-1 shrink-0" />
          <span>{changeText}</span>
        </div>
      </CardContent>
    </Card>
  );
};

const DashboardOverviewPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="flex flex-col gap-6">
        <PageHeader />

        <Alert className="bg-accent text-accent-foreground border-primary/30">
          <Info className="h-5 w-5 stroke-current mr-2 shrink-0" />
          <AlertDescription className="text-sm">
            This dashboard example was created using only the available elements and components, no additional SCSS was written!
          </AlertDescription>
        </Alert>

        <StatsCardGrid />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <TrafficSourcesChart className="lg:col-span-2" />
          <IncomeWidget className="lg:col-span-1" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {miniStatsData.map((stat) => (
            <MiniStatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              changeText={stat.changeText}
              TrendIcon={stat.TrendIcon}
              trendColorClass={stat.trendColorClass}
            />
          ))}
        </div>

        <TargetSection />
      </div>
    </MainAppLayout>
  );
};

export default DashboardOverviewPage;
