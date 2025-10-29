import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface WeekBarProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
}

export default function WeekBar({ selectedDate, onDateChange }: WeekBarProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileStartDate, setMobileStartDate] = useState<Date | null>(null);
  const hasInitializedMobileDate = useRef(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize mobile start date ONLY ONCE when first switching to mobile
  useEffect(() => {
    if (isMobile && !hasInitializedMobileDate.current) {
      const selected = new Date(selectedDate);
      // Set start date to one day before selected date
      const start = new Date(selected);
      start.setDate(selected.getDate() - 1);
      setMobileStartDate(start);
      hasInitializedMobileDate.current = true;
    } else if (!isMobile) {
      // Reset when switching back to desktop
      hasInitializedMobileDate.current = false;
      setMobileStartDate(null);
    }
  }, [isMobile]);

  const getWeekDates = (centerDate: string) => {
    const center = new Date(centerDate);
    const dates = [];
    
    // Get the day of week (0 = Sunday, 1 = Monday, etc.)
    const dayOfWeek = center.getDay();
    
    // Calculate offset to Monday (if Sunday, go back 6 days, if Monday go back 0, if Tuesday go back 1, etc.)
    const offsetToMonday = dayOfWeek === 0 ? -6 : -(dayOfWeek - 1);
    
    // Get Monday of the current week
    const monday = new Date(center);
    monday.setDate(center.getDate() + offsetToMonday);
    
    // Generate Monday through Sunday
    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      dates.push(date);
    }
    
    return dates;
  };

  const getThreeDayDates = (startDate: Date) => {
    const dates = [];
    
    // Generate 3 consecutive days starting from startDate
    for (let i = 0; i < 3; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date);
    }
    
    return dates;
  };

  const formatDateButton = (date: Date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day = days[date.getDay()];
    const dateNum = date.getDate();
    return `${day} ${dateNum}`;
  };

  const getDateString = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const handlePrevious = () => {
    if (isMobile && mobileStartDate) {
      // On mobile, go back 3 days
      const newStart = new Date(mobileStartDate);
      newStart.setDate(mobileStartDate.getDate() - 3);
      setMobileStartDate(newStart);
      
      // Auto-select the 3rd date (last date) of the new window
      const thirdDate = new Date(newStart);
      thirdDate.setDate(newStart.getDate() + 2);
      
      const today = new Date();
      const todayStr = getDateString(today);
      const thirdDateStr = getDateString(thirdDate);
      
      // Only select if it's not a future date
      if (thirdDateStr <= todayStr) {
        onDateChange(thirdDateStr);
      }
    } else {
      // Desktop: go back to previous week
      const current = new Date(selectedDate);
      const dayOfWeek = current.getDay();
      
      // Calculate offset to get to Monday of current week
      const offsetToMonday = dayOfWeek === 0 ? -6 : -(dayOfWeek - 1);
      
      // Get Monday of current week
      const monday = new Date(current);
      monday.setDate(current.getDate() + offsetToMonday);
      
      // Go back 7 days to get Monday of previous week
      monday.setDate(monday.getDate() - 7);
      
      // Then go forward 6 days to get Sunday of previous week
      const sunday = new Date(monday);
      sunday.setDate(monday.getDate() + 6);
      
      onDateChange(getDateString(sunday));
    }
  };

  const handleNext = () => {
    if (isMobile && mobileStartDate) {
      // On mobile, go forward 3 days
      const newStart = new Date(mobileStartDate);
      newStart.setDate(mobileStartDate.getDate() + 3);
      setMobileStartDate(newStart);
      
      // Auto-select the 1st date of the new window
      const firstDateStr = getDateString(newStart);
      
      const today = new Date();
      const todayStr = getDateString(today);
      
      // Only select if it's not a future date
      if (firstDateStr <= todayStr) {
        onDateChange(firstDateStr);
      }
    } else {
      // Desktop: go forward to next week
      const current = new Date(selectedDate);
      const dayOfWeek = current.getDay();
      
      // Calculate offset to get to Monday of current week
      const offsetToMonday = dayOfWeek === 0 ? -6 : -(dayOfWeek - 1);
      
      // Get Monday of current week
      const monday = new Date(current);
      monday.setDate(current.getDate() + offsetToMonday);
      
      // Go forward 7 days to get Monday of next week
      monday.setDate(monday.getDate() + 7);
      
      onDateChange(getDateString(monday));
    }
  };

  const displayDates = isMobile && mobileStartDate
    ? getThreeDayDates(mobileStartDate) 
    : getWeekDates(selectedDate);
  
  // Get today's date string for comparison
  const today = new Date();
  const todayStr = getDateString(today);

  return (
    <div className="bg-secondary box-border content-stretch flex gap-[16px] items-center px-[24px] py-[12px] relative shrink-0 w-full z-[2]" data-name="buttons/date-bar">
      <button
        onClick={handlePrevious}
        className="box-border content-stretch flex gap-[8px] items-center overflow-clip p-[8px] relative rounded-[var(--radius)] shrink-0 cursor-pointer hover:bg-muted transition-colors"
        data-name="buttons"
      >
        <ChevronLeft className="size-[26px] text-muted-foreground" />
      </button>
      
      <div className="basis-0 bg-gray-50 grow min-h-px min-w-px relative rounded-[var(--radius)]" data-name="date-selector">
        <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[8px] items-center justify-between p-[6px] relative w-full">
            {displayDates.map((date, index) => {
              const dateStr = getDateString(date);
              const isSelected = dateStr === selectedDate;
              const isCurrentDay = dateStr === todayStr;
              const isFuture = dateStr > todayStr;
              
              return (
                <button
                  key={index}
                  onClick={() => !isFuture && onDateChange(dateStr)}
                  disabled={isFuture}
                  className={`bg-gray-50 box-border content-stretch flex flex-1 gap-[8px] h-[40px] items-center justify-center p-[12px] relative rounded-[var(--radius-button)] transition-colors ${
                    isFuture 
                      ? 'cursor-not-allowed opacity-50' 
                      : isSelected 
                        ? 'shadow-[0px_0px_4px_0px_rgba(0,0,0,0.6)] cursor-pointer' 
                        : 'cursor-pointer hover:opacity-80'
                  }`}
                  data-name="date-button"
                >
                  <p className={`font-['Inter',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${
                    isFuture 
                      ? 'text-muted-foreground' 
                      : isCurrentDay 
                        ? 'text-[#009463]' 
                        : 'text-gray-900'
                  }`}>
                    {formatDateButton(date)}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[var(--radius)] shadow-[0px_0px_8px_0px_inset_rgba(0,0,0,0.4)]" />
      </div>
      
      <button
        onClick={handleNext}
        className="box-border content-stretch flex gap-[8px] items-center overflow-clip p-[8px] relative rounded-[var(--radius)] shrink-0 cursor-pointer hover:bg-muted transition-colors"
        data-name="buttons"
      >
        <ChevronRight className="size-[26px] text-muted-foreground" />
      </button>
    </div>
  );
}
