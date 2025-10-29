import svgPaths from "./svg-khjfn58tr1";

function HabitStack() {
  return (
    <div className="h-[21.32px] relative shrink-0 w-[47.887px]" data-name="HABIT STACK">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 22">
        <g id="HABIT STACK">
          <path d={svgPaths.p3bbc5000} fill="var(--fill-0, #F9FAFB)" id="Vector" />
          <path d={svgPaths.p37e65e20} fill="var(--fill-0, #F9FAFB)" id="Vector_2" />
          <path d={svgPaths.p60f3680} fill="var(--fill-0, #F9FAFB)" id="Vector_3" />
          <path d={svgPaths.p394cb700} fill="var(--fill-0, #F9FAFB)" id="Vector_4" />
          <path d={svgPaths.p3a386c00} fill="var(--fill-0, #F9FAFB)" id="Vector_5" />
          <path d={svgPaths.p33025f00} fill="var(--fill-0, #F9FAFB)" id="Vector_6" />
          <path d={svgPaths.p37704c00} fill="var(--fill-0, #F9FAFB)" id="Vector_7" />
          <path d={svgPaths.p13c8fdf2} fill="var(--fill-0, #F9FAFB)" id="Vector_8" />
          <path d={svgPaths.p13a8ff00} fill="var(--fill-0, #F9FAFB)" id="Vector_9" />
          <path d={svgPaths.p338d5500} fill="var(--fill-0, #F9FAFB)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="bg-gray-900 content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[60px]" data-name="logo">
      <HabitStack />
    </div>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="icons">
          <path d={svgPaths.p6d58a70} fill="var(--fill-0, #F9FAFB)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="bg-gray-900 box-border content-stretch flex gap-[8px] h-[50px] items-center overflow-clip px-[24px] py-[12px] relative rounded-[4px] shrink-0" data-name="buttons">
      <Icons1 />
      <p className="font-['Geist:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-gray-50 text-nowrap whitespace-pre">Add new Habit</p>
    </div>
  );
}

function Icons2() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="icons">
          <path d={svgPaths.pdbe700} fill="var(--fill-0, #111827)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Buttons2() {
  return (
    <div className="bg-[#ececec] box-border content-stretch flex gap-[8px] h-[50px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="buttons">
      <Icons2 />
    </div>
  );
}

function NavButtons() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="nav-buttons">
      <Buttons1 />
      <Buttons2 />
    </div>
  );
}

function Navbar() {
  return (
    <div className="bg-gray-50 relative shrink-0 w-full z-[3]" data-name="navbar">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <Logo />
          <NavButtons />
        </div>
      </div>
    </div>
  );
}

function Icons3() {
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

function Buttons3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="buttons">
      <Icons3 />
    </div>
  );
}

function DateButton() {
  return (
    <div className="basis-0 bg-gray-50 grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="date-button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[12px] relative size-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#009463] text-[16px] text-nowrap whitespace-pre">Mon 22</p>
        </div>
      </div>
    </div>
  );
}

function DateButton1() {
  return (
    <div className="basis-0 bg-gray-50 grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="date-button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative size-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-gray-900 text-nowrap whitespace-pre">Mon 22</p>
        </div>
      </div>
    </div>
  );
}

function DateSelector() {
  return (
    <div className="basis-0 bg-gray-50 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="date-selector">
      <div aria-hidden="true" className="absolute border border-gray-900 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <DateButton />
          </div>
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            {[...Array(6).keys()].map((_, i) => (
              <DateButton1 key={i} />
            ))}
          </div>
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0" />
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0" />
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0" />
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0" />
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0" />
        </div>
      </div>
    </div>
  );
}

function Icons4() {
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

function Buttons4() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="buttons">
      <Icons4 />
    </div>
  );
}

function ButtonsDateBar() {
  return (
    <div className="bg-[#ececec] box-border content-stretch flex gap-[16px] items-center px-[24px] py-[12px] relative shrink-0 w-[1280px] z-[2]" data-name="buttons/date-bar">
      <Buttons3 />
      <DateSelector />
      <Buttons4 />
    </div>
  );
}

function Icons5() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="icons">
          <path d={svgPaths.p6d58a70} fill="var(--fill-0, #F9FAFB)" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Buttons5() {
  return (
    <div className="bg-gray-900 box-border content-stretch flex gap-[8px] h-[50px] items-center overflow-clip px-[24px] py-[12px] relative rounded-[4px] shrink-0" data-name="buttons">
      <Icons5 />
      <p className="font-['Geist:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-gray-50 text-nowrap whitespace-pre">Create Habit</p>
    </div>
  );
}

function InfoMenu() {
  return (
    <div className="basis-0 bg-[#ececec] grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="info-menu">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-center justify-center p-[8px] relative size-full">
          <p className="font-['Geist:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-gray-900 text-nowrap whitespace-pre">Start tracking your habits</p>
          <Buttons5 />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[120px] py-[40px] relative size-full">
          <InfoMenu />
        </div>
      </div>
    </div>
  );
}

export default function HabitDashboardEmpty() {
  return (
    <div className="bg-gray-50 content-stretch flex flex-col isolate items-start relative size-full" data-name="habit-dashboard-empty">
      <Navbar />
      <ButtonsDateBar />
      <Content />
    </div>
  );
}