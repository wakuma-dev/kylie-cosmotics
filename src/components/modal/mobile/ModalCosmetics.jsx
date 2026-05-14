import React, { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import CosemticsLinks from "../../../data/CosemticsLinks";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

export default function ModalCosmetics({ closeMenu }) {
  const [openModal, setOpenModal] = useState(null);

  const toggleMenu = useCallback((index) => {
    setOpenModal((prev) => (prev === index ? null : index));
  }, []);
  
  const handleNavigate = useCallback(() => {
    setOpenModal(null);
    closeMenu();
  }, [closeMenu]);

  return (
    <div className="fixed top-[140px] left-0 w-screen flex flex-col gap-3 h-dvh bg-white overflow-y-auto px-4">
      {CosemticsLinks.map((item, index) => {
        return (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.path}
                className="w-[50px] h-[50px] rounded-md object-cover"
              />

              <NavLink
                to={item.path}
                onClick={handleNavigate}
                className="text-[18px] leading-[17px] text-[#b3848f] font-semibold font-serif"
              >
                {item.name}
              </NavLink>

              {item.subLinks && (
                <button
                  onClick={() => toggleMenu(index)}
                  className="text-[#b3848f] cursor-pointer"
                >
                  {openModal === index ? (
                    <FiMinus size={8} />
                  ) : (
                    <FaPlus size={8} />
                  )}
                </button>
              )}
            </div>
            <hr className="w-full h-[1px] bg-[#b3848f]" />
            {item.subLinks && openModal === index && (
              <div className="mt-2 flex flex-col gap-2 pl-2">
                {item.subLinks.map((sub, i) => (
                  <NavLink
                    key={i}
                    to={sub.path}
                    onClick={handleNavigate}
                    className="text-[15px] leading-[20px] font-normal hover:font-bold transition-all duration-150"
                  >
                    {sub.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
