import svgPaths from '../imports/svg-1baqr63k1o';
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

interface DeleteHabitModalProps {
  isOpen: boolean;
  habit: Habit | null;
  onClose: () => void;
  onDelete: (habitId: string) => void;
}

function ModalContent({ habit, onClose, onDelete }: {
  habit: Habit;
  onClose: () => void;
  onDelete: (habitId: string) => void;
}) {
  // Calculate completed and skipped days
  const completedDays = Object.values(habit.statuses).filter(status => status === 'done').length;
  const skippedDays = Object.values(habit.statuses).filter(status => status === 'skip').length;
  
  // Determine which message to show
  const showProgressMessage = completedDays > skippedDays;

  const handleDelete = () => {
    onDelete(habit.id);
  };

  return (
    <div className="bg-gray-50 box-border content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full z-[1]" data-name="modal">
      <div aria-hidden="true" className="absolute border border-gray-900 border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      
      {/* Card Header */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
        <p className="font-['Geist',_sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[18px] text-gray-900 text-nowrap whitespace-pre">Delete this habit</p>
        <button
          onClick={onClose}
          className="box-border content-stretch flex gap-[8px] items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
          data-name="buttons"
        >
          <div className="relative shrink-0 size-[26px]" data-name="icons">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
              <g id="icons">
                <path d={svgPaths.p16fe5d00} fill="var(--fill-0, #8F8F8F)" id="vector" />
              </g>
            </svg>
          </div>
        </button>
      </div>
      
      {/* Menu */}
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="menu">
        {/* Input Field with conditional content */}
        <div className="bg-[#ececec] relative rounded-[8px] shrink-0 w-full" data-name="input-field">
          <div className={`flex flex-row items-center ${showProgressMessage ? 'justify-center' : ''} overflow-clip rounded-[inherit] size-full`}>
            <div className="box-border content-stretch flex gap-[4px] items-center p-[16px] relative w-full">
              {showProgressMessage ? (
                <p className="basis-0 font-['Geist:Regular',_sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-gray-900">
                  You did this habit for {completedDays} days. Are you sure you want to lose the progress and delete this habit?
                </p>
              ) : (
                <p className="font-['Geist:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-gray-900 w-full">
                  You failed to do it. Better delete it before anyone sees!
                </p>
              )}
            </div>
          </div>
        </div>
        
        {/* Submit Button */}
        <button
          onClick={handleDelete}
          className="bg-gray-50 h-[58px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity"
          data-name="submit-button"
        >
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex gap-[8px] h-[58px] items-center justify-center px-[24px] py-[12px] relative w-full">
              <p className="font-['Geist:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#db2a19] text-[18px] text-nowrap whitespace-pre">Delete Habit</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-2 border-[#db2a19] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </button>
        
        {/* Warning text */}
        <p className="font-['Geist:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#db2a19] text-[16px] text-nowrap whitespace-pre">This action is irreversible and this habit will be permanently deleted.</p>
      </div>
    </div>
  );
}

export default function DeleteHabitModal({ isOpen, habit, onClose, onDelete }: DeleteHabitModalProps) {
  const isMobile = useIsMobile();

  if (!isOpen || !habit) return null;

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DrawerPortal>
          <DrawerOverlay className="backdrop-blur-sm backdrop-filter bg-[rgba(98,104,126,0.1)]" />
          <DrawerContent className="!bg-transparent border-none !mt-0 !max-h-none">
            <ModalContent 
              habit={habit}
              onClose={onClose}
              onDelete={onDelete}
            />
          </DrawerContent>
        </DrawerPortal>
      </Drawer>
    );
  }

  return (
    <div className="fixed inset-0 backdrop-blur-sm backdrop-filter bg-[rgba(98,104,126,0.1)] content-stretch flex isolate items-center justify-center z-50 overflow-clip" data-name="modal">
      <div className="bg-gray-50 box-border content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[8px] shrink-0 w-[90%] max-w-[600px] z-[1]" data-name="modal">
        <div aria-hidden="true" className="absolute border border-gray-900 border-solid inset-0 pointer-events-none rounded-[8px]" />
        
        {/* Card Header */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
          <p className="font-['Geist',_sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[18px] text-gray-900 text-nowrap whitespace-pre">Delete this habit</p>
          <button
            onClick={onClose}
            className="box-border content-stretch flex gap-[8px] items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
            data-name="buttons"
          >
            <div className="relative shrink-0 size-[26px]" data-name="icons">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
                <g id="icons">
                  <path d={svgPaths.p16fe5d00} fill="var(--fill-0, #8F8F8F)" id="vector" />
                </g>
              </svg>
            </div>
          </button>
        </div>
        
        {/* Menu */}
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="menu">
          {/* Input Field with conditional content */}
          <div className="bg-[#ececec] relative rounded-[8px] shrink-0 w-full" data-name="input-field">
            <div className={`flex flex-row items-center ${Object.values(habit.statuses).filter(status => status === 'done').length > Object.values(habit.statuses).filter(status => status === 'skip').length ? 'justify-center' : ''} overflow-clip rounded-[inherit] size-full`}>
              <div className="box-border content-stretch flex gap-[4px] items-center p-[16px] relative w-full">
                {Object.values(habit.statuses).filter(status => status === 'done').length > Object.values(habit.statuses).filter(status => status === 'skip').length ? (
                  <p className="basis-0 font-['Geist:Regular',_sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-gray-900">
                    You did this habit for {Object.values(habit.statuses).filter(status => status === 'done').length} days. Are you sure you want to lose the progress and delete this habit?
                  </p>
                ) : (
                  <p className="font-['Geist:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-gray-900 w-full">
                    You failed to do it. Better delete it before anyone sees!
                  </p>
                )}
              </div>
            </div>
          </div>
          
          {/* Submit Button */}
          <button
            onClick={() => onDelete(habit.id)}
            className="bg-gray-50 h-[58px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity"
            data-name="submit-button"
          >
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-[8px] h-[58px] items-center justify-center px-[24px] py-[12px] relative w-full">
                <p className="font-['Geist:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#db2a19] text-[18px] text-nowrap whitespace-pre">Delete Habit</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#db2a19] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </button>
          
          {/* Warning text */}
          <p className="font-['Geist:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#db2a19] text-[16px] text-nowrap whitespace-pre">This action is irreversible and this habit will be permanently deleted.</p>
        </div>
      </div>
    </div>
  );
}
