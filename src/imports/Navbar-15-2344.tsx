import svgPaths from "./svg-bow3xggff6";

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

function Icons() {
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

function Buttons() {
  return (
    <div className="bg-gray-900 box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[12px] relative rounded-[4px] shrink-0 size-[50px]" data-name="buttons">
      <Icons />
    </div>
  );
}

function Icons1() {
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

function Buttons1() {
  return (
    <div className="bg-[#ececec] box-border content-stretch flex gap-[8px] h-[50px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="buttons">
      <Icons1 />
    </div>
  );
}

function NavButtons() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="nav-buttons">
      <Buttons />
      <Buttons1 />
    </div>
  );
}

export default function Navbar() {
  return (
    <div className="bg-gray-50 relative size-full" data-name="navbar">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[24px] py-[16px] relative size-full">
          <Info />
          <NavButtons />
        </div>
      </div>
    </div>
  );
}