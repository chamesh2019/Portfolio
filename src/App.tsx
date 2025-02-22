import { NavBarBase } from "./components/NavBar/NavBarBase";
import { HeroSection } from "./components/mainContent/heroSection";
import { AboutMe } from "./components/aboutMe/AboutMe";

export function App() {
  return (
    <>
      <NavBarBase />
      <div className="scroll-container">
        <HeroSection />
        <AboutMe />
      </div>
    </>
  );
}
