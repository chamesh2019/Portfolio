import { ProfileImage } from "./profileImage";

export function AboutMe() {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
        {/* Add content here if needed */}
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
        <ProfileImage />
      </div>
    </div>
  );
}