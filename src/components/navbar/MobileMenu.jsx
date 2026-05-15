import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import navItems from "../../data/navItems";
import ModalSkin from "../modal/mobile/ModalSkin";
import ModalCosmetics from "../modal/mobile/ModalCosmetics";
import ModalFragrance from "../modal/mobile/ModalFragrance";
import { NavLink } from "react-router-dom";

export default function MobileMenu({ setIsMenuOpen }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("cosmetics");

  const toggleMenu = () => {
    const newState = !open;
    setOpen(newState);
    setIsMenuOpen(newState);
    setIsMenuOpen(newState) // Sync state with Navbar
  };

  return (
    <div className="lg:hidden">
      <button onClick={toggleMenu} className="fixed top-4 left-4 z-[170]">
        {open ? <IoCloseOutline size={20} /> : <HiBars3 size={20} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 w-full h-dvh bg-white z-[160] overflow-y-auto"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-center items-center gap-4 mt-20">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setActive(item.name.toLowerCase())}
                  className={`text-[16px] leading-[11px] z-[160] font-bold font-sans rounded-md p-2 ${
                    active === item.name.toLowerCase()
                      ? "text-[#000] bg-[#b3848f]/10"
                      : "text-[#b3848f] bg-transparent"
                  }`}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {active === "cosmetics" && (
              <ModalCosmetics
                closeMenu={() => {
                  setOpen(false);
                  setIsMenuOpen(false);
                }}
              />
            )}
            {active === "fragrance" && (
              <ModalFragrance
                closeMenu={() => {
                  setOpen(false);
                  setIsMenuOpen(false);
                }}
              />
            )}
            {active === "skin" && (
              <ModalSkin
                closeMenu={() => {
                  setOpen(false);
                  setIsMenuOpen(false);
                }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
