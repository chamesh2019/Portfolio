import { NavBarElement } from "./NavBarElement.tsx";
import { Logo } from "./Logo.tsx";

export function NavBarBase() {
  return (
    <div className="absolute top-0 left-0 w-full pl-8 pr-8 pt-4">
      <div className="float-left">
        <Logo />
      </div>
      <div className="float-right flex flex-row">
        <NavBarElement name="Home" isActive />
        <NavBarElement name="About" />
        <NavBarElement name="Projects" />
        <NavBarElement name="Contact" />
      </div>
    </div>
  );
}