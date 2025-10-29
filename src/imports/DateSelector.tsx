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

export default function DateSelector() {
  return (
    <div className="bg-gray-50 relative rounded-[8px] size-full" data-name="date-selector">
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[6px] relative size-full">
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
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_8px_0px_inset_rgba(0,0,0,0.4)]" />
    </div>
  );
}