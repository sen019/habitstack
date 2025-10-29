import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MoreVertical, X, Check } from 'lucide-react';
import svgPaths from '../imports/svg-v62cv22asy';
import { useIsMobile } from './ui/use-mobile';
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
} from './ui/drawer';

interface Habit {
  id: string;
  name: string;
  createdAt: string;
  streak: number;
  statuses: Record<string, string>;
}

interface HabitCardProps {
  habit: Habit;
  selectedDate: string;
  onStatusChange: (habitId: string, date: string, status: 'done' | 'skip') => void;
  onRename: (habit: Habit) => void;
  onDelete: (habit: Habit) => void;
  onReset: (habit: Habit) => void;
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getMonthGrid(selectedDate: string) {
  const date = new Date(selectedDate);
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  
  const grid = [];
  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    grid.push(dateStr);
  }
  
  return grid;
}

function MenuContent({ onReset, onRename, onDelete }: {
  onReset: () => void;
  onRename: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="bg-background box-border content-stretch flex flex-col gap-[4px] items-start p-[4px] relative rounded-[12px] shrink-0 w-full overflow-hidden" data-name="icons/dropdown">
      <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[12px]" />
      
      <button
        onClick={onReset}
        className="bg-background relative rounded-[var(--radius)] shrink-0 w-full hover:bg-secondary transition-colors cursor-pointer"
        data-name="dropdown-option"
      >
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[8px] items-center px-[24px] py-[12px] relative w-full">
            <p className="font-['Geist',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-foreground text-nowrap whitespace-pre">Reset</p>
          </div>
        </div>
      </button>
      
      <button
        onClick={onRename}
        className="bg-background relative rounded-[var(--radius)] shrink-0 w-full hover:bg-secondary transition-colors cursor-pointer"
        data-name="dropdown-option"
      >
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[8px] items-center px-[24px] py-[12px] relative w-full">
            <p className="font-['Geist',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-foreground text-nowrap whitespace-pre">Rename</p>
          </div>
        </div>
      </button>
      
      <button
        onClick={onDelete}
        className="bg-background relative rounded-[var(--radius)] shrink-0 w-full hover:bg-destructive/10 transition-colors cursor-pointer"
        data-name="dropdown-option"
      >
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[8px] items-center px-[24px] py-[12px] relative w-full">
            <p className="font-['Geist',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-destructive text-nowrap whitespace-pre">Delete</p>
          </div>
        </div>
      </button>
    </div>
  );
}

export default function HabitCard({ habit, selectedDate, onStatusChange, onRename, onDelete, onReset }: HabitCardProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, right: 0 });
  const isMobile = useIsMobile();
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && 
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    
    if (menuOpen && !isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [menuOpen, isMobile]);

  useEffect(() => {
    if (menuOpen && buttonRef.current && !isMobile) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
      });
    }
  }, [menuOpen, isMobile]);

  const monthGrid = getMonthGrid(selectedDate);
  const currentStatus = habit.statuses[selectedDate];

  const handleDone = () => {
    onStatusChange(habit.id, selectedDate, 'done');
  };

  const handleSkip = () => {
    onStatusChange(habit.id, selectedDate, 'skip');
  };

  const handleReset = () => {
    setMenuOpen(false);
    onReset(habit);
  };

  const handleRename = () => {
    setMenuOpen(false);
    onRename(habit);
  };

  const handleDelete = () => {
    setMenuOpen(false);
    onDelete(habit);
  };

  return (
    <>
      <div className="bg-background box-border content-stretch flex flex-col gap-[12px] items-start p-[12px] relative rounded-[var(--radius)] shrink-0 w-full lg:w-[calc(50%-10px)]" data-name="habit-card">
        <div aria-hidden="true" className="absolute border-2 border-border border-solid inset-0 pointer-events-none rounded-[var(--radius)] shadow-[var(--elevation-sm)]" />
        
        {/* Card Header */}
        <div className="bg-secondary relative rounded-[var(--radius-button)] shrink-0 w-full z-[2]" data-name="habit-card-header">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
              {/* Habit Info */}
              <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="habit-info">
                <div className="bg-background box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" data-name="streak-count">
                  <div aria-hidden="true" className="absolute border-2 border-muted border-solid inset-0 pointer-events-none rounded-[20px]" />
                  <p className="font-['Geist',_sans-serif] leading-[normal] not-italic relative shrink-0 text-foreground text-nowrap whitespace-pre">{habit.streak}</p>
                </div>
                <p className="font-['Geist',_sans-serif] leading-[normal] not-italic relative shrink-0 text-foreground text-nowrap whitespace-pre">{habit.name}</p>
              </div>
              
              {/* Action Buttons */}
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="habit-card-header-menu">
                <div className="bg-[#ececec] relative rounded-[8px] overflow-hidden" data-name="buttons">
                  <div className="flex flex-row items-center size-full">
                    <div className="box-border content-stretch flex gap-[6px] items-center p-[4px] relative size-full">
                      <button
                        onClick={handleSkip}
                        className={`box-border content-stretch flex gap-[8px] items-center overflow-clip px-[20px] py-[8px] relative rounded-[4px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.6)] active:shadow-none shrink-0 cursor-pointer hover:opacity-80 transition-all ${
                          currentStatus === 'skip' ? 'bg-[rgba(219,42,25,0.15)]' : 'bg-gray-50'
                        }`}
                        data-name="buttons"
                      >
                        <X className="size-[26px] text-destructive" />
                      </button>
                      
                      <button
                        onClick={handleDone}
                        className={`box-border content-stretch flex gap-[8px] items-center overflow-clip px-[20px] py-[8px] relative rounded-[4px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.6)] active:shadow-none shrink-0 cursor-pointer hover:opacity-80 transition-all ${
                          currentStatus === 'done' ? 'bg-[rgba(0,148,99,0.15)]' : 'bg-gray-50'
                        }`}
                        data-name="buttons"
                      >
                        <Check className="size-[26px] text-primary" />
                      </button>
                    </div>
                  </div>
                  <div className="absolute inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_4px_0px_inset_rgba(0,0,0,0.4)]" />
                </div>
                
                <div className="relative">
                  <button
                    ref={buttonRef}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="box-border content-stretch flex gap-[8px] items-center overflow-clip p-[8px] relative rounded-[var(--radius)] shrink-0 cursor-pointer hover:bg-background transition-colors"
                    data-name="buttons"
                  >
                    <MoreVertical className="size-[26px] text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Progress Grid */}
        <div className="bg-background relative rounded-[var(--radius-button)] shrink-0 w-full z-[1]" data-name="habit-progress-graph">
          <div className="size-full">
            <div className="box-border content-start flex flex-wrap gap-[11px] items-start p-[12px] relative w-full">
              {monthGrid.map((dateStr) => {
                const status = habit.statuses[dateStr];
                let bgColor = 'bg-muted';
                
                if (status === 'done') {
                  bgColor = 'bg-primary';
                } else if (status === 'skip') {
                  bgColor = 'bg-destructive';
                }
                
                return (
                  <div
                    key={dateStr}
                    className={`${bgColor} rounded-[var(--radius-small)] shrink-0 size-[24px]`}
                    data-name="progress-grid-cells"
                    title={dateStr}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Menu - Rendered via Portal */}
      {menuOpen && !isMobile && createPortal(
        <div 
          ref={menuRef}
          className="fixed z-[9999]"
          style={{
            top: `${menuPosition.top}px`,
            right: `${menuPosition.right}px`,
          }}
        >
          <MenuContent
            onReset={handleReset}
            onRename={handleRename}
            onDelete={handleDelete}
          />
        </div>,
        document.body
      )}

      {/* Mobile Menu Drawer */}
      {isMobile && (
        <Drawer open={menuOpen} onOpenChange={(open) => !open && setMenuOpen(false)}>
          <DrawerPortal>
            <DrawerOverlay className="backdrop-blur-sm backdrop-filter bg-[rgba(98,104,126,0.1)]" />
            <DrawerContent className="!bg-transparent border-none !mt-0 !max-h-none">
              <MenuContent
                onReset={handleReset}
                onRename={handleRename}
                onDelete={handleDelete}
              />
            </DrawerContent>
          </DrawerPortal>
        </Drawer>
      )}
    </>
  );
}
