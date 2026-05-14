import React, { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import FragranceList from "../../../data/FragranceList";


export default function ModalFragrance({ closeMenu }) {
 ;

  return (
    <div className="flex flex-col gap-3 fixed top-[140px] left-0 w-screen h-dvh px-4 bg-white overflow-y-auto">
      {FragranceList.map((item, index) => {
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
                onClick={closeMenu}
                className="lowercase text-[18px] leading-[17px] text-[#b3848f] font-semibold font-serif"
              >
                {item.name}
              </NavLink>
            </div>
            <hr className="w-full h-[1px] bg-[#b3848f]" />
          </div>
        );
      })}
    </div>
  );
}
