import svgPaths from "./svg-ew0rcils0e";

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

function Buttons() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="buttons">
      <Icons />
    </div>
  );
}

function CardHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-header">
      <p className="font-['Geist:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-gray-900 text-nowrap whitespace-pre">Delete this habit</p>
      <Buttons />
    </div>
  );
}

function InputField() {
  return (
    <div className="bg-[#ececec] relative rounded-[8px] shrink-0 w-full" data-name="input-field">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[16px] relative w-full">
          <p className="basis-0 font-['Geist:Regular',_sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-gray-900">You did this habit for 17 days. Are you sure you want to lose the progress and delete this habit?</p>
        </div>
      </div>
    </div>
  );
}

function SubmitButton() {
  return (
    <div className="bg-gray-50 h-[58px] relative rounded-[8px] shrink-0 w-full" data-name="submit-button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[58px] items-center justify-center px-[24px] py-[12px] relative w-full">
          <p className="font-['Geist:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#db2a19] text-[18px] text-nowrap whitespace-pre">Delete Habit</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#db2a19] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="menu">
      <InputField />
      <SubmitButton />
      <p className="font-['Geist:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#db2a19] text-[16px] text-nowrap whitespace-pre">This action is irreversible and this habit will be permanently deleted.</p>
    </div>
  );
}

export default function Modal() {
  return (
    <div className="bg-gray-50 relative rounded-[8px] size-full" data-name="modal">
      <div aria-hidden="true" className="absolute border border-gray-900 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <CardHeader />
          <Menu />
        </div>
      </div>
    </div>
  );
}