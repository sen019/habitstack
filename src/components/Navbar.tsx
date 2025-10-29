import svgPaths from '../imports/svg-9pgxzba4u8';

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

interface MonthProps {
  selectedDate: string;
}

function Month({ selectedDate }: MonthProps) {
  const monthName = new Date(selectedDate).toLocaleString('en-US', { month: 'long' });
  
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="month">
      <p className="font-['Geist:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-gray-900 text-nowrap whitespace-pre">{monthName}</p>
    </div>
  );
}

interface InfoProps {
  selectedDate: string;
}

function Info({ selectedDate }: InfoProps) {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="info">
      <Logo />
      <Month selectedDate={selectedDate} />
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

interface AddButtonProps {
  onClick: () => void;
}

function Buttons({ onClick }: AddButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-900 box-border content-stretch flex gap-[8px] h-[50px] items-center justify-center overflow-clip px-[24px] py-[12px] md:px-[24px] md:py-[12px] px-[12px] py-[12px] relative rounded-[4px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity md:w-auto w-[50px]"
      data-name="buttons"
    >
      <Icons />
      <p className="font-['Geist:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-gray-50 text-nowrap whitespace-pre hidden md:block">Add new Habit</p>
    </button>
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

interface LogoutButtonProps {
  onClick: () => void;
}

function Buttons1({ onClick }: LogoutButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-[#ececec] box-border content-stretch flex gap-[8px] h-[50px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
      data-name="buttons"
      title="Logout"
    >
      <Icons1 />
    </button>
  );
}

interface NavButtonsProps {
  onAddHabit: () => void;
  onLogout: () => void;
}

function NavButtons({ onAddHabit, onLogout }: NavButtonsProps) {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="nav-buttons">
      <Buttons onClick={onAddHabit} />
      <Buttons1 onClick={onLogout} />
    </div>
  );
}

interface NavbarProps {
  selectedDate: string;
  onAddHabit: () => void;
  onLogout: () => void;
}

export default function Navbar({ selectedDate, onAddHabit, onLogout }: NavbarProps) {
  return (
    <div className="bg-gray-50 relative shrink-0 w-full" data-name="navbar">
      <div className="box-border content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
        <Info selectedDate={selectedDate} />
        <NavButtons onAddHabit={onAddHabit} onLogout={onLogout} />
      </div>
    </div>
  );
}
