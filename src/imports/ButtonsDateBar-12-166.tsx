import svgPaths from "./svg-8mfygu4nrc";

function Icons() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="icons">
          <path d={svgPaths.p3753480} fill="var(--fill-0, #8F8F8F)" id="Vector" />
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

function DateButton() {
  return (
    <div className="bg-gray-50 box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center p-[12px] relative rounded-[4px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.6)] shrink-0" data-name="date-button">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#009463] text-[16px] text-nowrap whitespace-pre">Mon 22</p>
    </div>
  );
}

function DateButton1() {
  return (
    <div className="bg-gray-50 box-border content-stretch flex gap-[8px] h-full items-center justify-center p-[12px] relative rounded-[4px] shrink-0" data-name="date-button">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-gray-900 text-nowrap whitespace-pre">Mon 22</p>
    </div>
  );
}

function DateSelector() {
  return (
    <div className="basis-0 bg-gray-50 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="date-selector">
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[6px] relative w-full">
          <DateButton />
          <div className="flex flex-row items-center self-stretch">
            {[...Array(6).keys()].map((_, i) => (
              <DateButton1 key={i} />
            ))}
          </div>
          <div className="flex flex-row items-center self-stretch" />
          <div className="flex flex-row items-center self-stretch" />
          <div className="flex flex-row items-center self-stretch" />
          <div className="flex flex-row items-center self-stretch" />
          <div className="flex flex-row items-center self-stretch" />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_8px_0px_inset_rgba(0,0,0,0.8)]" />
    </div>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="icons">
          <path d={svgPaths.p1e6dc6f0} fill="var(--fill-0, #8F8F8F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="buttons">
      <Icons1 />
    </div>
  );
}

export default function ButtonsDateBar() {
  return (
    <div className="bg-[#ececec] relative size-full" data-name="buttons/date-bar">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[24px] py-[12px] relative size-full">
          <Buttons />
          <DateSelector />
          <Buttons1 />
        </div>
      </div>
    </div>
  );
}