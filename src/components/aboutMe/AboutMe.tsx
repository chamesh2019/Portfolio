import { ProfileImage } from "./profileImage";
import { InfoSection} from "./InfoSection.tsx";

export function AboutMe() {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row">
      <div className="w-full md:w-6/10 flex flex-col justify-center items-center">
        <InfoSection />
      </div>
      <div className="w-full md:w-4/10 flex flex-col justify-center items-center">
        <ProfileImage />
      </div>
    </div>
  );
}