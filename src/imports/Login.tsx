import svgPaths from "./svg-l5244e9plf";

function Logo() {
  return (
    <div className="h-[133.108px] relative shrink-0 w-[298.969px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 299 134">
        <g id="logo">
          <path d={svgPaths.p1d983d00} fill="var(--fill-0, #F9FAFB)" id="Vector" />
          <path d={svgPaths.pba34600} fill="var(--fill-0, #F9FAFB)" id="Vector_2" />
          <path d={svgPaths.p35235f80} fill="var(--fill-0, #F9FAFB)" id="Vector_3" />
          <path d={svgPaths.p1470da80} fill="var(--fill-0, #F9FAFB)" id="Vector_4" />
          <path d={svgPaths.p1c545b00} fill="var(--fill-0, #F9FAFB)" id="Vector_5" />
          <path d={svgPaths.p1df21d00} fill="var(--fill-0, #F9FAFB)" id="Vector_6" />
          <path d={svgPaths.p1a503b00} fill="var(--fill-0, #F9FAFB)" id="Vector_7" />
          <path d={svgPaths.p38e91c80} fill="var(--fill-0, #F9FAFB)" id="Vector_8" />
          <path d={svgPaths.p4198900} fill="var(--fill-0, #F9FAFB)" id="Vector_9" />
          <path d={svgPaths.p6362300} fill="var(--fill-0, #F9FAFB)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function LogoBanner() {
  return (
    <div className="basis-0 bg-gray-900 content-stretch flex flex-col gap-[10px] grow h-full items-center justify-center min-h-px min-w-px relative shrink-0 z-[2]" data-name="logo-banner">
      <Logo />
    </div>
  );
}

function ProgressGridCells() {
  return <div className="bg-[#009463] rounded-[2px] shrink-0 size-[24px]" data-name="progress-grid-cells" />;
}

function ProgressGridCells13() {
  return <div className="bg-[#dedede] rounded-[2px] shrink-0 size-[24px]" data-name="progress-grid-cells" />;
}

function VectorIllustration() {
  return (
    <div className="bg-gray-50 box-border content-start flex flex-wrap gap-[11px] items-start p-[12px] relative rounded-[4px] shrink-0 w-[328px]" data-name="vector-illustration">
      {[...Array(13).keys()].map((_, i) => (
        <ProgressGridCells key={i} />
      ))}
      {[...Array(18).keys()].map((_, i) => (
        <ProgressGridCells13 key={i} />
      ))}
    </div>
  );
}

function DeviconGoogle() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="devicon:google">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_295)" id="devicon:google">
          <path d={svgPaths.pe99f870} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1c603b80} fill="var(--fill-0, #E33629)" id="Vector_2" />
          <path d={svgPaths.p390e0ff0} fill="var(--fill-0, #F8BD00)" id="Vector_3" />
          <path d={svgPaths.p38144c80} fill="var(--fill-0, #587DBD)" id="Vector_4" />
          <path d={svgPaths.p346ae080} fill="var(--fill-0, #319F43)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_295">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icons1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[4px] relative shrink-0 size-[26px]" data-name="icons">
      <DeviconGoogle />
    </div>
  );
}

function Buttons1() {
  return (
    <div className="bg-gray-50 h-[50px] relative rounded-[4px] shrink-0 w-full" data-name="buttons">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[50px] items-center justify-center px-[24px] py-[12px] relative w-full">
          <Icons1 />
          <p className="font-['Geist:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-gray-900 text-nowrap whitespace-pre">Login with Google</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-gray-900 border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function LoginForm() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0" data-name="login-form">
      <p className="font-['Geist:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black w-[301.888px]">Start stacking your habits with HabitStack</p>
      <VectorIllustration />
      <Buttons1 />
    </div>
  );
}

function LoginPage() {
  return (
    <div className="basis-0 bg-gray-50 content-stretch flex flex-col gap-[40px] grow h-full items-center justify-center min-h-px min-w-px relative shrink-0 z-[1]" data-name="login-page">
      <LoginForm />
    </div>
  );
}

export default function Login() {
  return (
    <div className="bg-gray-50 content-stretch flex isolate items-center justify-center relative size-full" data-name="login">
      <LogoBanner />
      <LoginPage />
    </div>
  );
}