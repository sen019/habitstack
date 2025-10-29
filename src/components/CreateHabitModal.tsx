import { useState } from 'react';
import { X } from 'lucide-react';
import { useIsMobile } from './ui/use-mobile';
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
} from './ui/drawer';

interface CreateHabitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (name: string) => void;
}

function ModalContent({ onClose, onCreate, habitName, setHabitName }: {
  onClose: () => void;
  onCreate: (name: string) => void;
  habitName: string;
  setHabitName: (name: string) => void;
}) {
  const handleSubmit = () => {
    if (habitName.trim()) {
      onCreate(habitName.trim());
      setHabitName('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="bg-background box-border content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-tl-[var(--radius)] rounded-tr-[var(--radius)] shrink-0 w-full" data-name="modal">
      <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-tl-[var(--radius)] rounded-tr-[var(--radius)]" />
      
      {/* Card Header */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
        <p className="font-['Geist',_sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[18px] text-foreground text-nowrap whitespace-pre">Add new habit</p>
        <button
          onClick={onClose}
          className="box-border content-stretch flex gap-[8px] items-center overflow-clip p-[8px] relative rounded-[var(--radius)] shrink-0 cursor-pointer hover:bg-secondary transition-colors"
          data-name="buttons"
        >
          <X className="size-[26px] text-muted-foreground" />
        </button>
      </div>
      
      {/* Menu */}
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="menu">
        <div className="bg-input-background h-[58px] relative rounded-[var(--radius)] shrink-0 w-full" data-name="input-field">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex gap-[4px] h-[58px] items-center justify-center px-[16px] py-[8px] relative w-full">
              <input
                type="text"
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter habit name"
                className="font-['Geist',_sans-serif] leading-[normal] not-italic w-full bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-[18px]"
                autoFocus
              />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-muted-foreground border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
        </div>
        
        <button
          onClick={handleSubmit}
          className="bg-primary h-[58px] relative rounded-[var(--radius)] shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          data-name="submit-button"
          disabled={!habitName.trim()}
        >
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex gap-[8px] h-[58px] items-center justify-center px-[24px] py-[12px] relative w-full">
              <p className="font-['Geist',_sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[18px] text-primary-foreground text-nowrap whitespace-pre">{`Let's do It`}</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default function CreateHabitModal({ isOpen, onClose, onCreate }: CreateHabitModalProps) {
  const [habitName, setHabitName] = useState('');
  const isMobile = useIsMobile();

  if (!isOpen) return null;

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DrawerPortal>
          <DrawerOverlay className="backdrop-blur-sm backdrop-filter bg-[rgba(98,104,126,0.1)]" />
          <DrawerContent className="!bg-transparent border-none !mt-0 !max-h-none">
            <ModalContent 
              onClose={onClose}
              onCreate={onCreate}
              habitName={habitName}
              setHabitName={setHabitName}
            />
          </DrawerContent>
        </DrawerPortal>
      </Drawer>
    );
  }

  return (
    <div className="fixed inset-0 backdrop-blur-sm backdrop-filter bg-[rgba(98,104,126,0.1)] content-stretch flex isolate items-center justify-center z-50" data-name="modal">
      <div className="bg-background box-border content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[var(--radius)] shrink-0 w-[90%] max-w-[600px] z-[1]" data-name="modal">
        <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
        
        {/* Card Header */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
          <p className="font-['Geist',_sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[18px] text-foreground text-nowrap whitespace-pre">Add new habit</p>
          <button
            onClick={onClose}
            className="box-border content-stretch flex gap-[8px] items-center overflow-clip p-[8px] relative rounded-[var(--radius)] shrink-0 cursor-pointer hover:bg-secondary transition-colors"
            data-name="buttons"
          >
            <X className="size-[26px] text-muted-foreground" />
          </button>
        </div>
        
        {/* Menu */}
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="menu">
          <div className="bg-input-background h-[58px] relative rounded-[var(--radius)] shrink-0 w-full" data-name="input-field">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[4px] h-[58px] items-center justify-center px-[16px] py-[8px] relative w-full">
                <input
                  type="text"
                  value={habitName}
                  onChange={(e) => setHabitName(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && habitName.trim()) {
                      onCreate(habitName.trim());
                      setHabitName('');
                    }
                  }}
                  placeholder="Enter habit name"
                  className="font-['Geist',_sans-serif] leading-[normal] not-italic w-full bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-[18px]"
                  autoFocus
                />
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-muted-foreground border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
          </div>
          
          <button
            onClick={() => {
              if (habitName.trim()) {
                onCreate(habitName.trim());
                setHabitName('');
              }
            }}
            className="bg-primary h-[58px] relative rounded-[var(--radius)] shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            data-name="submit-button"
            disabled={!habitName.trim()}
          >
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[8px] h-[58px] items-center justify-center px-[24px] py-[12px] relative w-full">
                <p className="font-['Geist',_sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[18px] text-primary-foreground text-nowrap whitespace-pre">{`Let's do It`}</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
