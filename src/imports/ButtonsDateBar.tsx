import svgPaths from "./svg-i8q0dg1iu4";

interface DateButtonProps {
  className?: string;
  active?: "false" | "true";
  currentDay?: "false" | "true";
}

function DateButton({ className, active = "false", currentDay = "false" }: DateButtonProps) {
  if (active === "true" && currentDay === "false") {
    return (
      <div className={className} data-name="active=true, current-day=false">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[12px] relative size-full">
            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-gray-900 text-nowrap whitespace-pre">Mon 22</p>
          </div>
        </div>
      </div>
    );
  }
  if (active === "false" && currentDay === "true") {
    return (
      <div className={className} data-name="active=false, current-day=true">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[12px] relative size-full">
            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#009463] text-[16px] text-nowrap whitespace-pre">Mon 22</p>
          </div>
        </div>
      </div>
    );
  }
  if (active === "true" && currentDay === "true") {
    return (
      <div className={className} data-name="active=true, current-day=true">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[12px] relative size-full">
            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#009463] text-[16px] text-nowrap whitespace-pre">Mon 22</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="active=false, current-day=false">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[12px] relative size-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-gray-900 text-nowrap whitespace-pre">Mon 22</p>
        </div>
      </div>
    </div>
  );
}

interface ButtonsDateBarProps {
  className?: string;
  buttonLabel?: string;
}

function ButtonsDateBar({ className, buttonLabel = "Button Label" }: ButtonsDateBarProps) {
  return (
    <div className={className} data-name="buttons/date-bar">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[24px] py-[12px] relative size-full">
          <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="buttons">
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[4px] relative shrink-0 size-[26px]" data-name="icons">
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                  <div className="h-[13.71px] relative w-[8.085px]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 14">
                      <path d={svgPaths.p167b7740} fill="var(--fill-0, #8F8F8F)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-0 bg-gray-50 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="date-selector">
            <div aria-hidden="true" className="absolute border border-gray-900 border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
                <div className="flex flex-row items-center self-stretch">
                  <DateButton active="true" currentDay="true" className="bg-[#ececec] box-border content-stretch flex gap-[8px] h-full items-center justify-center p-[12px] relative rounded-[4px] shrink-0" />
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <DateButton className="bg-gray-50 box-border content-stretch flex gap-[8px] h-full items-center justify-center p-[12px] relative rounded-[4px] shrink-0" />
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <DateButton className="bg-gray-50 box-border content-stretch flex gap-[8px] h-full items-center justify-center p-[12px] relative rounded-[4px] shrink-0" />
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <DateButton className="bg-gray-50 box-border content-stretch flex gap-[8px] h-full items-center justify-center p-[12px] relative rounded-[4px] shrink-0" />
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <DateButton className="bg-gray-50 box-border content-stretch flex gap-[8px] h-full items-center justify-center p-[12px] relative rounded-[4px] shrink-0" />
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <DateButton className="bg-gray-50 box-border content-stretch flex gap-[8px] h-full items-center justify-center p-[12px] relative rounded-[4px] shrink-0" />
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <DateButton className="bg-gray-50 box-border content-stretch flex gap-[8px] h-full items-center justify-center p-[12px] relative rounded-[4px] shrink-0" />
                </div>
              </div>
            </div>
          </div>
          <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="buttons">
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[4px] relative shrink-0 size-[26px]" data-name="icons">
              <div className="h-[13.71px] relative shrink-0 w-[8.085px]" data-name="Vector">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 14">
                  <path d={svgPaths.p167b7740} fill="var(--fill-0, #8F8F8F)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ButtonsDateBar1() {
  return <ButtonsDateBar className="bg-[#ececec] relative size-full" />;
}