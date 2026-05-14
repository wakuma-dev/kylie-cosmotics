import React from "react";
import { NavLink } from "react-router-dom";
import CosemticsLinks from "../../data/CosemticsLinks";
import img from "../../assets/83d7340339e0227772e518ef43bccb00.jpg";

export default function ModalCosemetics({ closeMenu }) {
  return (
    <div className="fixed top-18 left-0 w-screen min-h-[60dvh] bg-white z-50 shadow-lg">
      <div className="flex flex-wrap justify-between gap-3 md:px-10 lg:px-12 py-6">
        {CosemticsLinks.map((item) => {
          return (
            <div key={item.path} className="flex flex-col items-start gap-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-[150px] h-[150px] object-cover rounded-md"
              />

              <NavLink
                to={item.path}
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

        <div className="ml-20 w-[300px] h-[300px]">
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
