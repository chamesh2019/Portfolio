import { NavBarBase } from "./components/NavBar/NavBarBase";
import { HeroSection } from "./components/mainContent/heroSection";
import { AboutMe } from "./components/aboutMe/AboutMe";

export function App() {
  return (
    <>
      <NavBarBase />
      <HeroSection />
      <AboutMe />
    </>
  );
}
