import React from "react";
import { NavLink } from "react-router-dom";
import DiscoverLinks from "../../data/DiscoverLinks";
import img from "../../assets/1ae0c6df82221396a0169ae9c8b0cc1a.jpg";
import img2 from "../../assets/f31aa13d1e34694881bc6366f0cea353.jpg";

export default function ModalDiscover({ closeMenu }) {
  return (
    <div className="fixed top-18 left-0 w-full bg-white min-h-[6d0vh] z-50">
      <div className="flex flex-wrap justify-between gap-3 lg:py-12 py-6 md:px-10 lg:px-12">
        {DiscoverLinks.map((item) => {
          return (
            <div key={item.path} className="flex flex-col items-center gap-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-[200px] h-[200px] object-cover rounded-md"
              />
              <NavLink
                to={item.path}
                onClick={closeMenu}
                className="lowercase text-[17px] leading-[19px] font-normal font-sans text-[#b3848f]"
              >
                {item.name}
              </NavLink>
            </div>
          );
        })}

        <div className="flex flex-col gap-2">
          <div className="relative w-[300px] h-[300px]">
            <img
              src={img}
              alt="image"
              className="w-full h-full rounded-md object-cover"
            />
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-2">
              <span>
                virtula <br /> try-on
              </span>
            </div>
          </div>

          <div className="relative rounded-md w-[300px] h-[300px]">
            <img
              src={img2}
              alt="image"
              className="w-full h-full rounded-md object-cover"
            />
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-2">
              <span>current offers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
