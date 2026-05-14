import React, {useCallback, useState} from "react";
import { NavLink } from "react-router-dom";
import SkinList from "../../../data/SkinList";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

export default function ModalSkin({closeMenu}){
    const [openModal, setOpenModal] = useState(null);
    const toggleMenu = useCallback((index) => {
        setOpenModal((prevValue) => prevValue === index ? null : index)
    }, []);
    const handleNavigate = useCallback(() => {
        setOpenModal(null);
        closeMenu();
    }, [closeMenu]);
    return(
    <div className="fixed top-[140px] left-0 w-screen h-dvh flex flex-col gap-3 px-4  overflow-y-auto bg-white">
        {SkinList.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-2 ">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.path}
                    className="rounded-md object-cover w-[50px] h-[50px]"
                  />
                  <NavLink
                    to={item.path}
                    onClick={closeMenu}
                    className="text-[18px] leading-[17px] lowercase text-[#b3848f] font-sans"
                  >
                    {item.name}
                  </NavLink>
                  {item.subLinks && (
                    <button
                      onClick={() => toggleMenu(index)}
                      className="cursor-pointer text-[#b3848f]"
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
                    <div className="flex flex-col gap-2 pl-2 mt-2">
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
    )
}