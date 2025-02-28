import { useState, useEffect } from "react";
import { NavBarBase } from "./components/NavBar/NavBarBase";
import { HeroSection } from "./components/mainContent/heroSection";
import { AboutMe } from "./components/aboutMe/AboutMe";
import { BackDrop } from "./components/backDrop/base";

export function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <BackDrop key={windowSize} />
      <NavBarBase />
      <div className="scroll-container">
        <HeroSection />
        <AboutMe />
      </div>
    </>
  );
}