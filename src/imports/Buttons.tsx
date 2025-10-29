import svgPaths from "./svg-fcppvqkg0l";

function Icons() {
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

function Buttons() {
  return (
    <div className="bg-gray-50 box-border content-stretch flex gap-[8px] items-center overflow-clip px-[20px] py-[8px] relative rounded-[4px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.6)] shrink-0" data-name="buttons">
      <Icons />
    </div>
  );
}

function Icons1() {
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

function Buttons1() {
  return (
    <div className="bg-gray-50 box-border content-stretch flex gap-[8px] items-center overflow-clip px-[20px] py-[8px] relative rounded-[4px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.6)] shrink-0" data-name="buttons">
      <Icons1 />
    </div>
  );
}

export default function Buttons2() {
  return (
    <div className="bg-[#ececec] relative rounded-[8px] size-full" data-name="buttons">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[6px] items-center p-[4px] relative size-full">
          <Buttons />
          <Buttons1 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_4px_0px_inset_rgba(0,0,0,0.4)]" />
    </div>
  );
}