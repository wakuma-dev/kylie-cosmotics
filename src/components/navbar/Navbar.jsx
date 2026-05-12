import { memo } from "react";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
import Cta from "./Cta";
import MobileMenu from "./MobileMenu";

const Navbar = memo(function Navbar({ isScrolled }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full px-4 sm:px-6 md:px-10 lg:px-12 py-4 md:py-6 backdrop-blur-lg  transition-all duration-300
      ${isScrolled ? "bg-white/80 shadow-md" : "bg-transparent"}`}
    >
      <div className="relative flex items-center justify-between">
       <MobileMenu />
        <NavMenu />
        <Logo />
        <Cta />
      </div>
    </div>
  );
});

export default Navbar;
