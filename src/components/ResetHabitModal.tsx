import svgPaths from '../imports/svg-j2edpkqdgh';
import { useIsMobile } from './ui/use-mobile';
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
} from './ui/drawer';

interface ResetHabitModalProps {
  isOpen: boolean;
  habitName: string;
  onClose: () => void;
  onConfirm: () => void;
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="icons">
          <path d={svgPaths.p16fe5d00} fill="var(--fill-0, #8F8F8F)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function ModalContent({ onClose, onConfirm }: {
  onClose: () => void;
  onConfirm: () => void;
}) {
  return (
    <div className="bg-gray-50 relative rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="modal">
      <div aria-hidden="true" className="absolute border border-gray-900 border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          {/* Card Header */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
            <p className="font-['Geist',_sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[18px] text-gray-900 text-nowrap whitespace-pre">Reset this habit</p>
            <button
              onClick={onClose}
              className="box-border content-stretch flex gap-[8px] items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0 hover:bg-secondary transition-colors cursor-pointer"
              data-name="buttons"
            >
              <Icons />
            </button>
          </div>
          
          {/* Menu */}
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="menu">
            {/* Description Field */}
            <div className="bg-[#ececec] relative rounded-[8px] shrink-0 w-full" data-name="input-field">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="box-border content-stretch flex gap-[4px] items-center p-[16px] relative w-full">
                  <p className="font-['Geist',_sans-serif] leading-[normal] not-italic relative text-[18px] text-gray-900">Would you like to reset this habit and start over again?</p>
                </div>
              </div>
            </div>
            
            {/* Submit Button */}
            <button
              onClick={onConfirm}
              className="bg-gray-50 h-[58px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity"
              data-name="submit-button"
            >
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="box-border content-stretch flex gap-[8px] h-[58px] items-center justify-center px-[24px] py-[12px] relative w-full">
                  <p className="font-['Geist',_sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#db2a19] text-[18px] text-nowrap whitespace-pre">Reset Habit</p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-2 border-[#db2a19] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </button>
            
            {/* Warning Text */}
            <p className="font-['Geist',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#db2a19] text-[16px] text-nowrap whitespace-pre">This action is irreversible and will permanently reset the habit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResetHabitModal({ isOpen, habitName, onClose, onConfirm }: ResetHabitModalProps) {
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
              onConfirm={onConfirm}
            />
          </DrawerContent>
        </DrawerPortal>
      </Drawer>
    );
  }

  return (
    <div className="absolute backdrop-blur-sm backdrop-filter bg-[rgba(98,104,126,0.1)] content-stretch flex isolate items-center justify-center inset-0 overflow-clip z-50" data-name="modal">
      <div className="bg-gray-50 relative rounded-[8px] w-full max-w-[600px] mx-4" data-name="modal">
        <div aria-hidden="true" className="absolute border border-gray-900 border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
            {/* Card Header */}
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
              <p className="font-['Geist',_sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[18px] text-gray-900 text-nowrap whitespace-pre">Reset this habit</p>
              <button
                onClick={onClose}
                className="box-border content-stretch flex gap-[8px] items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0 hover:bg-secondary transition-colors cursor-pointer"
                data-name="buttons"
              >
                <Icons />
              </button>
            </div>
            
            {/* Menu */}
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="menu">
              {/* Description Field */}
              <div className="bg-[#ececec] relative rounded-[8px] shrink-0 w-full" data-name="input-field">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex gap-[4px] items-center p-[16px] relative w-full">
                    <p className="font-['Geist',_sans-serif] leading-[normal] not-italic relative text-[18px] text-gray-900">Would you like to reset this habit and start over again?</p>
                  </div>
                </div>
              </div>
              
              {/* Submit Button */}
              <button
                onClick={onConfirm}
                className="bg-gray-50 h-[58px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity"
                data-name="submit-button"
              >
                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex gap-[8px] h-[58px] items-center justify-center px-[24px] py-[12px] relative w-full">
                    <p className="font-['Geist',_sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#db2a19] text-[18px] text-nowrap whitespace-pre">Reset Habit</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-2 border-[#db2a19] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </button>
              
              {/* Warning Text */}
              <p className="font-['Geist',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#db2a19] text-[16px] text-nowrap whitespace-pre">This action is irreversible and will permanently reset the habit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
