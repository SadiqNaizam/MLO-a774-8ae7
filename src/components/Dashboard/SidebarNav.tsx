import React from 'react';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  LayoutDashboard, BarChart3, ShoppingCart, DollarSign, FileText, Users, Aperture,
  StickyNote, AppWindow, Component, Puzzle, Table, GalleryVerticalEnd, BarChartHorizontalBig, 
  UserSquare, ClipboardEdit, FormInput, ToyBrick, AreaChart, LineChart, Sparkles, ChevronDown
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href?: string;
  subItems?: NavItem[];
  isActive?: boolean; // To show active state for demo
}

const mainNavigationItems: NavItem[] = [
  {
    id: 'dashboards',
    label: 'Dashboards',
    icon: LayoutDashboard,
    subItems: [
      { id: 'analytics', label: 'Analytics', icon: BarChart3, href: '#' },
      { id: 'commerce', label: 'Commerce', icon: ShoppingCart, href: '#' },
      { id: 'sales', label: 'Sales', icon: DollarSign, href: '#' },
      {
        id: 'minimal',
        label: 'Minimal',
        icon: FileText,
        subItems: [
          { id: 'variation1', label: 'Variation 1', icon: LineChart, href: '#', isActive: true },
          { id: 'variation2', label: 'Variation 2', icon: LineChart, href: '#' },
        ],
      },
      { id: 'crm', label: 'CRM', icon: Users, href: '#' },
    ],
  },
  {
    id: 'pages',
    label: 'Pages',
    icon: StickyNote,
    subItems: [
      { id: 'applications', label: 'Applications', icon: AppWindow, href: '#' },
    ],
  },
];

const uiKitNavigationItems: NavItem[] = [
 {
    id: 'uiComponents',
    label: 'UI COMPONENTS',
    icon: Component, // This is a category header, icon might not be used or styled differently
    subItems: [
      { id: 'elements', label: 'Elements', icon: Puzzle, href: '#' },
      { id: 'components', label: 'Components', icon: Component, href: '#' }, // Re-using Component icon
      { id: 'tables', label: 'Tables', icon: Table, href: '#' },
    ],
  },
  {
    id: 'dashboardWidgets',
    label: 'DASHBOARD WIDGETS',
    icon: GalleryVerticalEnd,
    subItems: [
      { id: 'chartBoxes1', label: 'Chart Boxes 1', icon: BarChartHorizontalBig, href: '#' },
      { id: 'chartBoxes2', label: 'Chart Boxes 2', icon: BarChartHorizontalBig, href: '#' },
      { id: 'chartBoxes3', label: 'Chart Boxes 3', icon: BarChartHorizontalBig, href: '#' },
      { id: 'profileBoxes', label: 'Profile Boxes', icon: UserSquare, href: '#' },
    ],
  },
  {
    id: 'forms',
    label: 'FORMS',
    icon: ClipboardEdit,
    subItems: [
      { id: 'formElements', label: 'Elements', icon: FormInput, href: '#' },
      { id: 'formWidgets', label: 'Widgets', icon: ToyBrick, href: '#' },
    ],
  },
  {
    id: 'charts',
    label: 'CHARTS',
    icon: AreaChart,
    subItems: [
      { id: 'chartjs', label: 'ChartJS', icon: AreaChart, href: '#' },
      { id: 'apexCharts', label: 'Apex Charts', icon: LineChart, href: '#' },
      { id: 'chartSparklines', label: 'Chart Sparklines', icon: Sparkles, href: '#' },
    ],
  },
];

const NavLink: React.FC<{ item: NavItem; isSubItem?: boolean }> = ({ item, isSubItem = false }) => {
  const Icon = item.icon;
  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start text-sm font-normal hover:bg-primary/10 hover:text-primary",
        isSubItem ? "pl-10 pr-2 py-2 h-auto" : "pl-4 pr-2 py-2 h-auto",
        item.isActive && "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
      )}
      asChild={!item.subItems}
    >
      {item.href && !item.subItems ? (
        <a href={item.href}>
          <Icon className={cn("mr-2 h-4 w-4", item.isActive ? "text-primary-foreground": "text-sidebar-foreground/70 group-hover:text-primary")} />
          {item.label}
        </a>
      ) : (
        <>
          <Icon className={cn("mr-2 h-4 w-4", item.isActive ? "text-primary-foreground": "text-sidebar-foreground/70 group-hover:text-primary")} />
          {item.label}
          {item.subItems && <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform duration-200" />}
        </>
      )}
    </Button>
  );
};

const SidebarNav: React.FC = () => {
  const [openSections, setOpenSections] = React.useState<string[]>(['dashboards', 'minimal']); // Default open sections

  const renderNavItems = (items: NavItem[], isSubItemLevel = false, parentId?: string) => {
    return items.map((item) => {
      if (item.subItems) {
        return (
          <AccordionItem value={item.id} key={item.id} className="border-none">
            <AccordionTrigger 
              className={cn(
                "hover:no-underline p-0",
                item.isActive && "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground rounded-md",
                isSubItemLevel ? "pl-10 pr-2 py-2 h-auto" : "pl-4 pr-2 py-2 h-auto"
              )}
              showChevron={false} // Using custom NavLink for chevron
            >
              <NavLink item={item} isSubItem={isSubItemLevel} />
            </AccordionTrigger>
            <AccordionContent className="pb-0 pl-0 pr-0 pt-1 space-y-1">
              {renderNavItems(item.subItems, true, item.id)}
            </AccordionContent>
          </AccordionItem>
        );
      }
      return (
        <NavLink item={item} key={item.id} isSubItem={isSubItemLevel} />
      );
    });
  };

  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground fixed top-0 left-0 h-screen flex flex-col">
      <div className="h-16 flex items-center px-4 border-b border-sidebar-foreground/10">
        <Aperture className="h-8 w-8 mr-2 text-primary" />
        <h1 className="text-xl font-semibold text-white">Architect</h1>
      </div>
      <ScrollArea className="flex-1 px-2 py-4">
        <div className="mb-4">
          <h2 className="px-2 py-2 text-xs font-semibold uppercase text-sidebar-foreground/50">Menu</h2>
          <Accordion type="multiple" value={openSections} onValueChange={setOpenSections} className="w-full space-y-1">
            {renderNavItems(mainNavigationItems)}
          </Accordion>
        </div>
        <div>
          {uiKitNavigationItems.map(category => (
            <div key={category.id} className="mb-4">
              <h2 className="px-2 py-2 text-xs font-semibold uppercase text-sidebar-foreground/50">{category.label}</h2>
              {category.subItems && (
                <Accordion type="multiple" defaultValue={[category.subItems[0]?.id || '']} className="w-full space-y-1">
                  {renderNavItems(category.subItems, false, category.id)}
                </Accordion>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
};

export default SidebarNav;
