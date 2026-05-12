import React from "react";
import useMobileMenu from "../../hooks/useMobileMenu";
import { motion, AnimatePresence } from "framer-motion";
import navItems from "../../data/navItems";
import { NavLink } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

export default function MobileMenu() {
  const { mobileMenu, menuToggle, closeToggle } = useMobileMenu();

  return (
    <div className="lg:hidden">
      {/* Toggle Button */}
      <button onClick={menuToggle} className="fixed top-4 left-4 z-50">
        {mobileMenu ? <IoCloseOutline size={20} /> : <HiBars3 size={20} />}
      </button>

      {/* Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            className="w-full h-screen fixed inset-0 z-40 bg-white"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center justify-center h-screen gap-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className="text-[#393939] text-[16px] leading-[15px] font-bold font-sans"
                    onClick={closeToggle}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
