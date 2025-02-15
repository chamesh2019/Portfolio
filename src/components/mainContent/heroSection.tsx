import { TitleText } from "./TitleText";

export function HeroSection(){
    return (
        <div className="h-screen w-full flex">
            <div className="w-1/2 flex flex-col justify-center items-center">
                image here
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center">
                <TitleText />
            </div>
        </div>
    );
}