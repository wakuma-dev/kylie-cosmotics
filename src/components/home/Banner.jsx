import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import ModalBanner from "./ModalBanner";
import img from "../../assets/6d8f5a6a07b8cd2ff1f2de247162719c.jpg";
import { Button } from "../ui/Button";

export default function Banner() {
  const [showModal, setShowModal] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  const bgStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section
      className="relative w-full h-[70vh] md:h-[85vh] flex flex-col items-center justify-center text-center px-6"
      style={bgStyle}
    >
      <div className="max-w-2xl space-y-2">
        <h4 className="text-[34px] leading-[37px] font-bold text-[#b3848f] uppercase">
          virtual <br /> try on
        </h4>

        <p className="text-lg md:text-xl font-light text-gray-100 max-w-md mx-auto">
          Try on lipsticks, blushes & more to discover your new favorite shade.
        </p>

        <Button variant="secondary"
          onClick={() => setShowModal(true)}
          
        >
          Discover More
        </Button>
      </div>

      {showModal &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop with blur */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
              onClick={() => setShowModal(false)}
            />

            {/* Modal Content */}
            <div className="relative z-10 w-full flex justify-center">
              <ModalBanner onClose={() => setShowModal(false)} />
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
