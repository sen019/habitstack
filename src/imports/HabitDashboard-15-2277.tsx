import svgPaths from "./svg-mdghwiclrz";

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

function Month() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="month">
      <p className="font-['Geist:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-gray-900 text-nowrap whitespace-pre">October</p>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="info">
      <Logo />
      <Month />
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
    <div className="bg-gray-900 box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[12px] relative rounded-[4px] shrink-0 size-[50px]" data-name="buttons">
      <Icons1 />
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
          <Info />
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
            <DateButton1 />
          </div>
          <div className="flex flex-row items-center self-stretch">
            <DateButton1 />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_8px_0px_inset_rgba(0,0,0,0.4)]" />
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
    <div className="bg-[#ececec] relative shrink-0 w-full z-[2]" data-name="buttons/date-bar">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[24px] py-[12px] relative w-full">
          <Buttons3 />
          <DateSelector />
          <Buttons4 />
        </div>
      </div>
    </div>
  );
}

function StreakCountDefault() {
  return (
    <div className="bg-gray-50 box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" data-name="streak-count/Default">
      <div aria-hidden="true" className="absolute border-2 border-[#dedede] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Geist:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-gray-900 text-nowrap whitespace-pre">0</p>
    </div>
  );
}

function HabitInfo() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="habit-info">
      <StreakCountDefault />
      <p className="font-['Geist:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-gray-900 text-nowrap whitespace-pre">Habit</p>
    </div>
  );
}

function Icons5() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="icons">
          <path d={svgPaths.p1e558f00} fill="var(--fill-0, #DB2A19)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Buttons5() {
  return (
    <div className="bg-gray-50 box-border content-stretch flex gap-[8px] items-center overflow-clip px-[20px] py-[8px] relative rounded-[4px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.6)] shrink-0" data-name="buttons">
      <Icons5 />
    </div>
  );
}

function Icons6() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="icons">
          <path d={svgPaths.p145e8e00} fill="var(--fill-0, #009463)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Buttons6() {
  return (
    <div className="bg-gray-50 box-border content-stretch flex gap-[8px] items-center overflow-clip px-[20px] py-[8px] relative rounded-[4px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.6)] shrink-0" data-name="buttons">
      <Icons6 />
    </div>
  );
}

function Buttons7() {
  return (
    <div className="bg-[#ececec] box-border content-stretch flex gap-[6px] items-center p-[4px] relative rounded-[8px] shrink-0" data-name="buttons">
      <Buttons5 />
      <Buttons6 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_4px_0px_inset_rgba(0,0,0,0.4)]" />
    </div>
  );
}

function Icons7() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="icons">
          <path d={svgPaths.p41d0d00} fill="var(--fill-0, #8F8F8F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Buttons8() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="buttons">
      <Icons7 />
    </div>
  );
}

function HabitCardHeaderMenu() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="habit-card-header-menu">
      <Buttons7 />
      <Buttons8 />
    </div>
  );
}

function HabitCardHeader() {
  return (
    <div className="bg-[#ececec] relative rounded-[4px] shrink-0 w-full z-[2]" data-name="habit-card-header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <HabitInfo />
          <HabitCardHeaderMenu />
        </div>
      </div>
    </div>
  );
}

function ProgressGridCells() {
  return <div className="bg-[#009463] rounded-[2px] shrink-0 size-[24px]" data-name="progress-grid-cells" />;
}

function ProgressGridCells4() {
  return <div className="bg-[#db2a19] rounded-[2px] shrink-0 size-[24px]" data-name="progress-grid-cells" />;
}

function ProgressGridCells7() {
  return <div className="bg-[#dedede] rounded-[2px] shrink-0 size-[24px]" data-name="progress-grid-cells" />;
}

function HabitProgressGraph() {
  return (
    <div className="bg-gray-50 relative rounded-[4px] shrink-0 w-full z-[1]" data-name="habit-progress-graph">
      <div className="size-full">
        <div className="box-border content-start flex flex-wrap gap-[11px] items-start p-[12px] relative w-full">
          <ProgressGridCells />
          <ProgressGridCells />
          <ProgressGridCells />
          <ProgressGridCells />
          {[...Array(2).keys()].map((_, i) => (
            <ProgressGridCells4 key={i} />
          ))}
          <ProgressGridCells />
          {[...Array(24).keys()].map((_, i) => (
            <ProgressGridCells7 key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function HabitCard() {
  return (
    <div className="bg-gray-50 relative rounded-[8px] shrink-0 w-full" data-name="habit-card">
      <div aria-hidden="true" className="absolute border-2 border-gray-900 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] isolate items-start p-[12px] relative w-full">
          <HabitCardHeader />
          <HabitProgressGraph />
        </div>
      </div>
    </div>
  );
}

function StreakCountDefault2() {
  return (
    <div className="bg-gray-50 box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" data-name="streak-count/Default">
      <div aria-hidden="true" className="absolute border-2 border-[#dedede] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Geist:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-gray-900 text-nowrap whitespace-pre">0</p>
    </div>
  );
}

function HabitInfo2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="habit-info">
      <StreakCountDefault2 />
      <p className="font-['Geist:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-gray-900 text-nowrap whitespace-pre">Habit Name</p>
    </div>
  );
}

function Icons11() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="icons">
          <path d={svgPaths.p1e558f00} fill="var(--fill-0, #DB2A19)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Buttons13() {
  return (
    <div className="bg-gray-50 box-border content-stretch flex gap-[8px] items-center overflow-clip px-[20px] py-[8px] relative rounded-[4px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.6)] shrink-0" data-name="buttons">
      <Icons11 />
    </div>
  );
}

function Icons12() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="icons">
          <path d={svgPaths.p145e8e00} fill="var(--fill-0, #009463)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Buttons14() {
  return (
    <div className="bg-gray-50 box-border content-stretch flex gap-[8px] items-center overflow-clip px-[20px] py-[8px] relative rounded-[4px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.6)] shrink-0" data-name="buttons">
      <Icons12 />
    </div>
  );
}

function Buttons15() {
  return (
    <div className="bg-[#ececec] box-border content-stretch flex gap-[6px] items-center p-[4px] relative rounded-[8px] shrink-0" data-name="buttons">
      <Buttons13 />
      <Buttons14 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_4px_0px_inset_rgba(0,0,0,0.4)]" />
    </div>
  );
}

function Icons13() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="icons">
          <path d={svgPaths.p41d0d00} fill="var(--fill-0, #8F8F8F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Buttons16() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="buttons">
      <Icons13 />
    </div>
  );
}

function HabitCardHeaderMenu2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="habit-card-header-menu">
      <Buttons15 />
      <Buttons16 />
    </div>
  );
}

function HabitCardHeader2() {
  return (
    <div className="bg-[#ececec] relative rounded-[4px] shrink-0 w-full z-[2]" data-name="habit-card-header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <HabitInfo2 />
          <HabitCardHeaderMenu2 />
        </div>
      </div>
    </div>
  );
}

function ProgressGridCells62() {
  return <div className="bg-[#009463] rounded-[2px] shrink-0 size-[24px]" data-name="progress-grid-cells" />;
}

function ProgressGridCells66() {
  return <div className="bg-[#db2a19] rounded-[2px] shrink-0 size-[24px]" data-name="progress-grid-cells" />;
}

function ProgressGridCells69() {
  return <div className="bg-[#dedede] rounded-[2px] shrink-0 size-[24px]" data-name="progress-grid-cells" />;
}

function HabitProgressGraph2() {
  return (
    <div className="bg-gray-50 relative rounded-[4px] shrink-0 w-full z-[1]" data-name="habit-progress-graph">
      <div className="size-full">
        <div className="box-border content-start flex flex-wrap gap-[11px] items-start p-[12px] relative w-full">
          <ProgressGridCells62 />
          <ProgressGridCells62 />
          <ProgressGridCells62 />
          <ProgressGridCells62 />
          {[...Array(2).keys()].map((_, i) => (
            <ProgressGridCells66 key={i} />
          ))}
          <ProgressGridCells62 />
          {[...Array(24).keys()].map((_, i) => (
            <ProgressGridCells69 key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function HabitCard2() {
  return (
    <div className="bg-gray-50 relative rounded-[8px] shrink-0 w-full" data-name="habit-card">
      <div aria-hidden="true" className="absolute border-2 border-gray-900 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] isolate items-start p-[12px] relative w-full">
          <HabitCardHeader2 />
          <HabitProgressGraph2 />
        </div>
      </div>
    </div>
  );
}

function StreakCountDefault3() {
  return (
    <div className="bg-gray-50 box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" data-name="streak-count/Default">
      <div aria-hidden="true" className="absolute border-2 border-[#dedede] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Geist:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-gray-900 text-nowrap whitespace-pre">0</p>
    </div>
  );
}

function HabitInfo3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="habit-info">
      <StreakCountDefault3 />
      <p className="font-['Geist:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-gray-900 text-nowrap whitespace-pre">Habit Name</p>
    </div>
  );
}

function Icons14() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="icons">
          <path d={svgPaths.p1e558f00} fill="var(--fill-0, #DB2A19)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Buttons17() {
  return (
    <div className="bg-gray-50 box-border content-stretch flex gap-[8px] items-center overflow-clip px-[20px] py-[8px] relative rounded-[4px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.6)] shrink-0" data-name="buttons">
      <Icons14 />
    </div>
  );
}

function Icons15() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="icons">
          <path d={svgPaths.p145e8e00} fill="var(--fill-0, #009463)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Buttons18() {
  return (
    <div className="bg-gray-50 box-border content-stretch flex gap-[8px] items-center overflow-clip px-[20px] py-[8px] relative rounded-[4px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.6)] shrink-0" data-name="buttons">
      <Icons15 />
    </div>
  );
}

function Buttons19() {
  return (
    <div className="bg-[#ececec] box-border content-stretch flex gap-[6px] items-center p-[4px] relative rounded-[8px] shrink-0" data-name="buttons">
      <Buttons17 />
      <Buttons18 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_4px_0px_inset_rgba(0,0,0,0.4)]" />
    </div>
  );
}

function Icons16() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="icons">
          <path d={svgPaths.p41d0d00} fill="var(--fill-0, #8F8F8F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Buttons20() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="buttons">
      <Icons16 />
    </div>
  );
}

function HabitCardHeaderMenu3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="habit-card-header-menu">
      <Buttons19 />
      <Buttons20 />
    </div>
  );
}

function HabitCardHeader3() {
  return (
    <div className="bg-[#ececec] relative rounded-[4px] shrink-0 w-full z-[2]" data-name="habit-card-header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <HabitInfo3 />
          <HabitCardHeaderMenu3 />
        </div>
      </div>
    </div>
  );
}

function ProgressGridCells93() {
  return <div className="bg-[#009463] rounded-[2px] shrink-0 size-[24px]" data-name="progress-grid-cells" />;
}

function ProgressGridCells97() {
  return <div className="bg-[#db2a19] rounded-[2px] shrink-0 size-[24px]" data-name="progress-grid-cells" />;
}

function ProgressGridCells100() {
  return <div className="bg-[#dedede] rounded-[2px] shrink-0 size-[24px]" data-name="progress-grid-cells" />;
}

function HabitProgressGraph3() {
  return (
    <div className="bg-gray-50 relative rounded-[4px] shrink-0 w-full z-[1]" data-name="habit-progress-graph">
      <div className="size-full">
        <div className="box-border content-start flex flex-wrap gap-[11px] items-start p-[12px] relative w-full">
          <ProgressGridCells93 />
          <ProgressGridCells93 />
          <ProgressGridCells93 />
          <ProgressGridCells93 />
          {[...Array(2).keys()].map((_, i) => (
            <ProgressGridCells97 key={i} />
          ))}
          <ProgressGridCells93 />
          {[...Array(24).keys()].map((_, i) => (
            <ProgressGridCells100 key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function HabitCard3() {
  return (
    <div className="bg-gray-50 box-border content-stretch flex flex-col gap-[12px] isolate items-start p-[12px] relative rounded-[8px] shrink-0 w-[606px]" data-name="habit-card">
      <div aria-hidden="true" className="absolute border-2 border-gray-900 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <HabitCardHeader3 />
      <HabitProgressGraph3 />
    </div>
  );
}

function HabitListing() {
  return (
    <div className="basis-0 bg-gray-50 grow min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="habit-listing">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start p-[24px] relative size-full">
          {[...Array(2).keys()].map((_, i) => (
            <HabitCard key={i} />
          ))}
          <HabitCard2 />
          {[...Array(2).keys()].map((_, i) => (
            <HabitCard3 key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HabitDashboard() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative size-full" data-name="habit-dashboard">
      <Navbar />
      <ButtonsDateBar />
      <HabitListing />
    </div>
  );
}