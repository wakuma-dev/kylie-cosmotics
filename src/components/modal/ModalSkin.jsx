import React from "react";
import { NavLink } from "react-router-dom";
import SkinList from "../../data/SkinList";
import img from "../../assets/e9cc1d1c473ee2271aa34da7334998c3.jpg"
export default function ModalSkin({ closeMenu }) {
  return (
    <div className="fixed top-20 left-0 w-screen min-h-[70vh] bg-white z-50 shadow-lg">
      <div className="flex flex-wrap gap-8 md:px-10 lg:px-12 py-6">
        {SkinList.map((item) => {
          return (
            <div key={item.path} className="flex flex-col items-start gap-3">
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="w-[150px] h-[150px] object-cover rounded-md"
              />

              {/* MAIN LINK */}
              <NavLink
                to={item.path}
                onClick={closeMenu}
                className="uppercase text-[17px] text-[#b3848f] font-semibold"
              >
                {item.name}
              </NavLink>

              {/* SUB LINKS */}
              {item.subLinks && (
                <div className="flex flex-col gap-1">
                  {item.subLinks.map((sub) => (
                    <NavLink
                      key={sub.path}
                      to={sub.path}
                      onClick={closeMenu}
                      className="text-[17px] leading-[20px] text-[#393939] hover:text-[#b3848f] transition-colors duration-300"
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
        <div className="ml-16 w-[420px] h-[420px]">
         <img src={img} alt="image" className="w-full h-full object-cover rounded-md" />
        </div>
      </div>
    </div>
  );
}
