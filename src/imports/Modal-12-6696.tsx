import svgPaths from "./svg-un0hvn8qab";

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
      <p className="font-['Geist:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-gray-900 text-nowrap whitespace-pre">Add new habit</p>
      <Buttons />
    </div>
  );
}

function InputField() {
  return (
    <div className="bg-gray-50 h-[58px] relative rounded-[8px] shrink-0 w-full" data-name="input-field">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[58px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Geist:Bold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8f8f8f] text-[18px] text-nowrap whitespace-pre">Enter habit name</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8f8f8f] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SubmitButton() {
  return (
    <div className="bg-[#009463] h-[58px] relative rounded-[8px] shrink-0 w-full" data-name="submit-button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[58px] items-center justify-center px-[24px] py-[12px] relative w-full">
          <p className="font-['Geist:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-gray-50 text-nowrap whitespace-pre">{`Let's do It`}</p>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="menu">
      <InputField />
      <SubmitButton />
    </div>
  );
}

function Modal() {
  return (
    <div className="basis-0 bg-gray-50 grow min-h-px min-w-px relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 z-[1]" data-name="modal">
      <div aria-hidden="true" className="absolute border border-gray-900 border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
          <CardHeader />
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default function Modal1() {
  return (
    <div className="backdrop-blur-sm backdrop-filter bg-[rgba(98,104,126,0.1)] content-stretch flex isolate items-end justify-center relative size-full" data-name="modal">
      <Modal />
    </div>
  );
}