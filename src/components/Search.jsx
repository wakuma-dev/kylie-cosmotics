import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoIosSearch } from "react-icons/io";
import ModalSearch from "./modal/ModalSearch";

export default function Search() {
  const [openModal, setOpenModal] = useState(false);

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
          /* z-[110] puts it above navbar but BELOW mobile menu z-[150] */
          <div className="fixed inset-0 z-[110] flex items-start justify-center">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpenModal(false)}
            />

            {/* Content Wrapper - w-full and no top padding removes the gap */}
            <div className="relative z-10 w-full animate-in fade-in slide-in-from-top-4 duration-200">
              <ModalSearch closeMenu={() => setOpenModal(false)} />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
