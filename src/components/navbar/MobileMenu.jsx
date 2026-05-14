import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

import navItems from "../../data/navItems";

import ModalCosmetics from "../modal/mobile/ModalCosmetics";
import ModalFragrance from "../modal/mobile/ModalFragrance";
import { NavLink } from "react-router-dom";


export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("cosmetics"); // ✅ default cosmetics

  return (
    <div className="lg:hidden">
      {/* TOGGLE */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed top-4 left-4 z-[120]"
      >
        {open ? <IoCloseOutline size={20} /> : <HiBars3 size={20} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 w-full h-dvh bg-white z-[100] overflow-y-auto"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            {/* NAV ITEMS (CENTER) */}
            <div className="flex justify-center items-center gap-4 mt-20">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setActive(item.name.toLowerCase())}
                  className={`text-[16px] leading-[11px] font-bold font-sans rounded-md p-2 z-[120] ${
                    active === item.name.toLowerCase()
                      ? "text-[#000] bg-[#b3848f]/10"
                      : "text-[#b3848f] bg-transparent"
                  }`}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* MODALS */}
            {active === "cosmetics" && (
              <ModalCosmetics closeMenu={() => setOpen(false)} />
            )}

            {active === "fragrance" && (
              <ModalFragrance closeMenu={() => setOpen(false)} />
            )}

            {active === "skin" && (
              <ModalSkin closeMenu={() => setOpen(false)} />
            )}

            {active === "discover" && (
              <ModalDiscover closeMenu={() => setOpen(false)} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
