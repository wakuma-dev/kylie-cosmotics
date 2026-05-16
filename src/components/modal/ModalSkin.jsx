import React from "react";
import { NavLink } from "react-router-dom";
import SkinList from "../../data/SkinList";
import img from "../../assets/e9cc1d1c473ee2271aa34da7334998c3.jpg";

export default function ModalSkin({ closeMenu }) {
  return (
    <div className="fixed top-18 left-0 w-screen min-h-[60dvh] bg-white z-50 shadow-lg">
      <div className="flex flex-wrap gap-3 md:px-10 lg:px-12 py-6">
        {SkinList.map((item) => {
          return (
            <div key={item.path} className="flex flex-col items-start gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-[150px] h-[150px] object-cover rounded-md"
              />

              <NavLink
                to={item.path}
                onClick={closeMenu}
                className="lowercase text-[17px] leading-[19px] text-[#b3848f] font-medium"
              >
                {item.name}
              </NavLink>

              {item.subLinks && (
                <div className="flex flex-col gap-1">
                  {item.subLinks.map((sub) => (
                    <NavLink
                      key={sub.path}
                      onClick={closeMenu}
                      to={sub.path}
                      className="text-[17px] leading-[20px] text-[#393939] hover:text-[#b3848f]"
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        <div className="ml-12 w-[500px] h-[500px]">
          <img
            src={img}
            alt="image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
