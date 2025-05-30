import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Menu,
  Search,
  Settings,
  Briefcase,
  Grid3x3, // Using Grid3x3 as a stand-in for the square grid icon
  Bell,
  Flag,
  ChevronDown,
  LayoutGrid, // For Mega Menu
} from 'lucide-react';

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        'fixed top-0 left-0 sm:left-64 right-0 h-16 bg-card border-b border-border',
        'flex items-center justify-between px-4 z-40',
        className
      )}
    >
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="sm:hidden"> {/* Hamburger for mobile */} 
          <Menu className="h-5 w-5" />
        </Button>
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-10 w-full sm:w-64 h-9" />
        </div>
        <nav className="hidden lg:flex items-center gap-1">
          <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            <LayoutGrid className="mr-2 h-4 w-4" /> Mega Menu <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
          <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            <Settings className="mr-2 h-4 w-4" /> Settings <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
          <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            <Briefcase className="mr-2 h-4 w-4" /> Projects <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </nav>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Grid3x3 className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Flag className="h-5 w-5" /> {/* Placeholder for flag icon, actual flags are more complex */}
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 px-2 sm:px-3 h-auto py-1.5">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://avatar.vercel.sh/alina.png" alt="Alina Mclourd" />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <div className="hidden md:flex flex-col items-start">
                <p className="text-sm font-medium text-card-foreground">Alina Mclourd</p>
                <p className="text-xs text-muted-foreground">VP People Manager</p>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground hidden md:block" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
