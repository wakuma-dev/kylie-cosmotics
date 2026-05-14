import { memo, useState, useRef } from "react";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
import Cta from "./Cta";
import MobileMenu from "./MobileMenu";
import ModalFragrance from "../modal/ModalFragrance";
import ModalSkin from "../modal/ModalSkin";
import ModalDiscover from "../modal/ModalDiscover";
import ModalCosemetics from "../modal/ModalCosemetics";
const Navbar = memo(function Navbar({ isScrolled }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const timeOut = useRef(null);

  // OPEN MENU
  const openMenu = (menu) => {
    clearTimeout(timeOut.current);
    setActiveMenu(menu);
  };

  // CLOSE MENU
  const closeMenu = () => {
    timeOut.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  // KEEP OPEN ON HOVER
  const keepOpen = () => {
    clearTimeout(timeOut.current);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-10 lg:px-12 py-4 md:py-6 backdrop-blur-lg transition-all duration-300
      ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      {/* NAVBAR */}
      <div
        className="relative flex items-center justify-between"
        onMouseEnter={() => clearTimeout(timeOut.current)}
        onMouseLeave={closeMenu}
      >
        <MobileMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

        {/* PASS openMenu */}
        <NavMenu openMenu={openMenu} />

        <Logo />

        <Cta />
      </div>

      {/* FRAGRANCE MODAL */}
      {activeMenu === "fragrance" && (
        <div
          className="absolute left-0 top-full w-full"
          onMouseEnter={keepOpen}
          onMouseLeave={closeMenu}
        >
          <ModalFragrance closeMenu={() => setActiveMenu(null)} />
        </div>
      )}
      {/* COSEMTICS MODAL */}
      {activeMenu === "cosmetics" && (
        <div
          className="absolute left-0 top-full w-full"
          onMouseEnter={keepOpen}
          onMouseLeave={closeMenu}
        >
          <ModalCosemetics closeMenu={() => setActiveMenu(null)} />
        </div>
      )}
      {/* SKIN MODAL */}
      {activeMenu === "skin" && (
        <div
          className="absolute left-0 top-full w-full"
          onMouseEnter={keepOpen}
          onMouseLeave={closeMenu}
        >
          <ModalSkin closeMenu={() => setActiveMenu(null)} />
        </div>
      )}
      {activeMenu === "discover" && (
        <div
          className="absolute left-0 top-full w-full"
          onMouseEnter={keepOpen}
          onMouseLeave={closeMenu}
        >
          <ModalDiscover closeMenu={() => setActiveMenu(null)} />
        </div>
      )}
    </div>
  );
});

export default Navbar;
