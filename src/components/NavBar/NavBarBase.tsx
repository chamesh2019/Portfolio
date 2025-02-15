import { useState } from "react";
import { NavBarElement } from "./NavBarElement";
import { Logo } from "./Logo";

export function NavBarBase() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-full top-0 left-0 pl-8 pr-8 pt-4 pb-4 z-40 backdrop-blur-md">
      <div className="flex justify-between items-center">
        <Logo />
        <button
          className="md:hidden text-white z-50"
          onMouseEnter={() => setIsOpen(true)}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      <div
        onMouseLeave={() => setIsOpen(false)}
        className={`md:flex transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
        } absolute right-0 top-4 flex-row md:float-right`}
      >
        <NavBarElement name="Home" />
        <NavBarElement name="About" />
        <NavBarElement name="Projects" />
        <NavBarElement name="Contact" />
      </div>
    </div>
  );
}