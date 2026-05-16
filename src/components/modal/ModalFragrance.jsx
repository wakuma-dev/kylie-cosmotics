import React from "react";
import { NavLink } from "react-router-dom";
import FragranceList from "../../data/FragranceList";
import img from '../../assets/0ba85f8962f40c7a62bf2685ae015323.jpg'
export default function ModalFragrance({ closeMenu }) {
  return (
    <div className="fixed top-18 left-0 w-screen bg-white min-h-[60dvh] z-50">
      <div className="flex flex-wrap gap-3 py-6 md:px-10 lg:px-12">
        {FragranceList.map((item) => (
          <div key={item.path} className="flex flex-col items-center gap-2">
            <img
              src={item.image}
              alt={item.name}
              className="w-[150px] h-[150px] object-cover rounded-md"
            />

            <NavLink
              to={item.path}
              onClick={closeMenu}
              className="lowercase text-[17px] text-[#b3848f] leading-[20px] font-medium font-sans max-w-[100px]"
            >
              {item.name}
            </NavLink>
          </div>
        ))}
        <div className="ml-12 relative w-[350px]  h-[350px]">
          <img
            src={img}
            alt="image"
            className="w-full h-full rounded-md object-cover"
          />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <p className="font-medium font-sans text-[20px] leading-[22px] text-[#b3848f]">custom engraving</p>
            <span className="text-[14px] font-normal leading-[16px] font-sans text-white">now available for all size</span>
          </div>
        </div>
      </div>
    </div>
  );
}
