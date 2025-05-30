import React from 'react';
import Sidebar from './Sidebar';
import TopHeader from './TopHeader';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn("min-h-screen flex bg-background text-foreground", className)}>
      <Sidebar />
      {/* Main content area: ml-64 to offset for fixed sidebar */}
      <div className="flex-1 flex flex-col sm:ml-64">
        <TopHeader />
        {/* Page content: mt-16 to offset for fixed header, p-6 for content padding */}
        <main className="flex-1 overflow-y-auto mt-16">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;
