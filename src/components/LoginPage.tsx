import { createClient } from '../utils/supabase/client';
import svgPaths from '../imports/svg-l5244e9plf';
import mobileSvgPaths from '../imports/svg-g93ufxe0nx';

function LogoDesktop() {
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

function LogoMobile() {
  return (
    <div className="h-[91.512px] relative shrink-0 w-[205.541px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 206 92">
        <g id="logo">
          <path d={mobileSvgPaths.p3e757300} fill="var(--fill-0, #F9FAFB)" id="Vector" />
          <path d={mobileSvgPaths.p25664700} fill="var(--fill-0, #F9FAFB)" id="Vector_2" />
          <path d={mobileSvgPaths.p4c75250} fill="var(--fill-0, #F9FAFB)" id="Vector_3" />
          <path d={mobileSvgPaths.p36aa0100} fill="var(--fill-0, #F9FAFB)" id="Vector_4" />
          <path d={mobileSvgPaths.p33fcb80} fill="var(--fill-0, #F9FAFB)" id="Vector_5" />
          <path d={mobileSvgPaths.pe279b00} fill="var(--fill-0, #F9FAFB)" id="Vector_6" />
          <path d={mobileSvgPaths.pbb2eef2} fill="var(--fill-0, #F9FAFB)" id="Vector_7" />
          <path d={mobileSvgPaths.p297c2840} fill="var(--fill-0, #F9FAFB)" id="Vector_8" />
          <path d={mobileSvgPaths.p32f76b80} fill="var(--fill-0, #F9FAFB)" id="Vector_9" />
          <path d={mobileSvgPaths.p1436d900} fill="var(--fill-0, #F9FAFB)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function LogoBanner() {
  return (
    <div className="bg-gray-900 content-stretch flex flex-col gap-[6.875px] md:gap-[10px] h-[323px] md:h-full md:basis-0 md:grow items-center justify-center relative shrink-0 w-full md:min-h-px md:min-w-px md:z-[2]" data-name="logo-banner">
      <div className="md:hidden">
        <LogoMobile />
      </div>
      <div className="hidden md:block">
        <LogoDesktop />
      </div>
    </div>
  );
}

function ProgressGridCells() {
  return <div className="bg-primary rounded-[1.375px] md:rounded-[var(--radius-small)] shrink-0 size-[16.5px] md:size-[24px]" data-name="progress-grid-cells" />;
}

function ProgressGridCells13() {
  return <div className="bg-muted rounded-[1.375px] md:rounded-[var(--radius-small)] shrink-0 size-[16.5px] md:size-[24px]" data-name="progress-grid-cells" />;
}

function VectorIllustration() {
  return (
    <div className="bg-background box-border content-start flex flex-wrap gap-[7.563px] md:gap-[11px] items-start p-[8.25px] md:p-[12px] relative rounded-[2.75px] md:rounded-[var(--radius-button)] shrink-0 w-[225.5px] md:w-[328px]" data-name="vector-illustration">
      {[...Array(13).keys()].map((_, i) => (
        <ProgressGridCells key={i} />
      ))}
      {[...Array(18).keys()].map((_, i) => (
        <ProgressGridCells13 key={i} />
      ))}
    </div>
  );
}

function DeviconGoogleDesktop() {
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

function DeviconGoogleMobile() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="devicon:google">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_12_6545)" id="devicon:google">
          <path d={mobileSvgPaths.p34750e00} fill="var(--fill-0, white)" id="Vector" />
          <path d={mobileSvgPaths.p35cb2600} fill="var(--fill-0, #E33629)" id="Vector_2" />
          <path d={mobileSvgPaths.p4fa8000} fill="var(--fill-0, #F8BD00)" id="Vector_3" />
          <path d={mobileSvgPaths.p184ea000} fill="var(--fill-0, #587DBD)" id="Vector_4" />
          <path d={mobileSvgPaths.p244b200} fill="var(--fill-0, #319F43)" id="Vector_5" />
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

function Icons1() {
  return (
    <div className="box-border content-stretch flex gap-[6.875px] md:gap-[10px] items-center justify-center p-[2.75px] md:p-[4px] relative shrink-0 size-[17.875px] md:size-[26px]" data-name="icons">
      <div className="md:hidden">
        <DeviconGoogleMobile />
      </div>
      <div className="hidden md:block">
        <DeviconGoogleDesktop />
      </div>
    </div>
  );
}

interface ButtonsProps {
  onGoogleLogin: () => void;
}

function Buttons1({ onGoogleLogin }: ButtonsProps) {
  return (
    <button
      onClick={onGoogleLogin}
      className="bg-background h-[34.375px] md:h-[50px] relative rounded-[2.75px] md:rounded-[var(--radius-button)] shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity"
      data-name="buttons"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[5.5px] md:gap-[8px] h-[34.375px] md:h-[50px] items-center justify-center px-[16.5px] md:px-[24px] py-[8.25px] md:py-[12px] relative w-full">
          <Icons1 />
          <p className="font-['Geist',_sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[18px] text-gray-900 text-nowrap whitespace-pre">Login with Google</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.375px] md:border-2 border-gray-900 border-solid inset-0 pointer-events-none rounded-[2.75px] md:rounded-[var(--radius-button)]" />
    </button>
  );
}

interface LoginFormProps {
  onGoogleLogin: () => void;
}

function LoginForm({ onGoogleLogin }: LoginFormProps) {
  return (
    <div className="content-stretch flex flex-col gap-[27.5px] md:gap-[40px] items-center relative shrink-0 w-full md:w-auto px-4 md:px-0" data-name="login-form">
      <p className="font-['Geist',_sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16.5px] md:text-[18px] text-black w-[207.548px] md:w-[301.888px] text-center">Stack your habits with Habitstack</p>
      <VectorIllustration />
      <div className="w-[225.5px] md:w-full">
        <Buttons1 onGoogleLogin={onGoogleLogin} />
      </div>
    </div>
  );
}

interface LoginPageContentProps {
  onGoogleLogin: () => void;
}

function LoginPageContent({ onGoogleLogin }: LoginPageContentProps) {
  return (
    <div className="bg-background content-stretch flex flex-col gap-[27.5px] md:gap-[40px] grow items-center justify-center relative shrink-0 w-full md:basis-0 md:h-full md:min-h-px md:min-w-px md:z-[1]" data-name="login-page">
      <LoginForm onGoogleLogin={onGoogleLogin} />
    </div>
  );
}

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const handleGoogleLogin = async () => {
    const supabase = createClient();
    
    try {
      console.log('Initiating Google sign-in with redirect to:', window.location.origin);
      
      // Do not forget to complete setup at https://supabase.com/docs/guides/auth/social-login/auth-google
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      });
      
      if (error) {
        console.error('Google sign-in error:', error);
        alert('Failed to sign in with Google. Please ensure Google OAuth is configured in your Supabase project.');
      } else {
        console.log('Google sign-in initiated successfully:', data);
      }
    } catch (error) {
      console.error('Error during Google sign-in:', error);
      alert('An error occurred during sign-in.');
    }
  };

  return (
    <div className="bg-background content-stretch flex flex-col md:flex-row isolate items-center justify-center relative size-full overflow-auto" data-name="login">
      <LogoBanner />
      <LoginPageContent onGoogleLogin={handleGoogleLogin} />
    </div>
  );
}
