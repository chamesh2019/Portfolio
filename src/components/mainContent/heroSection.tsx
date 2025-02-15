import { TitleText } from "./TitleText";

export function HeroSection() {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row">
      <div className="w-full h-full md:w-1/2 flex flex-col justify-center items-center">
        image here
      </div>
      <div className="w-full h-full md:w-1/2 flex flex-col justify-center items-center">
        <TitleText />
      </div>
    </div>
  );
}