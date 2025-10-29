import svgPaths from "./svg-g93ufxe0nx";

function Logo() {
  return (
    <div className="h-[91.512px] relative shrink-0 w-[205.541px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 206 92">
        <g id="logo">
          <path d={svgPaths.p3e757300} fill="var(--fill-0, #F9FAFB)" id="Vector" />
          <path d={svgPaths.p25664700} fill="var(--fill-0, #F9FAFB)" id="Vector_2" />
          <path d={svgPaths.p4c75250} fill="var(--fill-0, #F9FAFB)" id="Vector_3" />
          <path d={svgPaths.p36aa0100} fill="var(--fill-0, #F9FAFB)" id="Vector_4" />
          <path d={svgPaths.p33fcb80} fill="var(--fill-0, #F9FAFB)" id="Vector_5" />
          <path d={svgPaths.pe279b00} fill="var(--fill-0, #F9FAFB)" id="Vector_6" />
          <path d={svgPaths.pbb2eef2} fill="var(--fill-0, #F9FAFB)" id="Vector_7" />
          <path d={svgPaths.p297c2840} fill="var(--fill-0, #F9FAFB)" id="Vector_8" />
          <path d={svgPaths.p32f76b80} fill="var(--fill-0, #F9FAFB)" id="Vector_9" />
          <path d={svgPaths.p1436d900} fill="var(--fill-0, #F9FAFB)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function LogoBanner() {
  return (
    <div className="bg-gray-900 content-stretch flex flex-col gap-[6.875px] h-[323px] items-center justify-center relative shrink-0 w-[440px]" data-name="logo-banner">
      <Logo />
    </div>
  );
}

function ProgressGridCells() {
  return <div className="bg-[#009463] rounded-[1.375px] shrink-0 size-[16.5px]" data-name="progress-grid-cells" />;
}

function ProgressGridCells13() {
  return <div className="bg-[#dedede] rounded-[1.375px] shrink-0 size-[16.5px]" data-name="progress-grid-cells" />;
}

function VectorIllustration() {
  return (
    <div className="bg-gray-50 box-border content-start flex flex-wrap gap-[7.563px] items-start p-[8.25px] relative rounded-[2.75px] shrink-0 w-[225.5px]" data-name="vector-illustration">
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
    <div className="relative shrink-0 size-[11px]" data-name="devicon:google">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_12_6545)" id="devicon:google">
          <path d={svgPaths.p34750e00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p35cb2600} fill="var(--fill-0, #E33629)" id="Vector_2" />
          <path d={svgPaths.p4fa8000} fill="var(--fill-0, #F8BD00)" id="Vector_3" />
          <path d={svgPaths.p184ea000} fill="var(--fill-0, #587DBD)" id="Vector_4" />
          <path d={svgPaths.p244b200} fill="var(--fill-0, #319F43)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_12_6545">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="box-border content-stretch flex gap-[6.875px] items-center justify-center p-[2.75px] relative shrink-0 size-[17.875px]" data-name="icons">
      <DeviconGoogle />
    </div>
  );
}

function Buttons() {
  return (
    <div className="h-[34.375px] relative rounded-[2.75px] shrink-0 w-[225.5px]" data-name="buttons">
      <div className="box-border content-stretch flex gap-[5.5px] h-[34.375px] items-center justify-center overflow-clip px-[16.5px] py-[8.25px] relative rounded-[inherit] w-[225.5px]">
        <Icons />
        <p className="font-['Geist:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-gray-900 text-nowrap whitespace-pre">Login with Google</p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.375px] border-gray-900 border-solid inset-0 pointer-events-none rounded-[2.75px]" />
    </div>
  );
}

function LoginForm() {
  return (
    <div className="content-stretch flex flex-col gap-[27.5px] items-center relative shrink-0" data-name="login-form">
      <p className="font-['Geist:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16.5px] text-black w-[207.548px]">Start stacking your habits with HabitStack</p>
      <VectorIllustration />
      <Buttons />
    </div>
  );
}

function LoginPage() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[27.5px] grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="login-page">
      <LoginForm />
    </div>
  );
}

export default function IPhone16ProMax1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="iPhone 16 Pro Max - 1">
      <LogoBanner />
      <LoginPage />
    </div>
  );
}