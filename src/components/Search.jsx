import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoIosSearch } from "react-icons/io";
import ModalSearch from "./modal/ModalSearch";

export default function Search({ isMenuOpen }) {
  const [openModal, setOpenModal] = useState(false);

  // Close the search box if the mobile menu is opened
  useEffect(() => {
    if (isMenuOpen) {
      setOpenModal(false);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (openModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [openModal]);

  return (
    <>
      <IoIosSearch
        size={20}
        className="cursor-pointer text-gray-600 hover:text-black transition-colors"
        onClick={() => setOpenModal(true)}
      />

      {openModal &&
        createPortal(
          <div className="fixed top-16 left-0 w-screen z-[150] flex items-start justify-center">
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpenModal(false)}
            />

            <div className="relative z-10 w-full animate-in fade-in slide-in-from-top-2 duration-200">
              <ModalSearch closeMenu={() => setOpenModal(false)} />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
