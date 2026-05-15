import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchProvider";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";

export default function ModalSearch({ closeMenu }) {
  const { input, setInput } = useContext(SearchContext);

  return (
    <section className="w-screen bg-white fixed top-16 left-0 z-50 p-4">
      <div className="flex items-center gap-3 max-w-7xl mx-auto">
        {/* input wrapper */}
        <div className="relative w-full">
          <input
            type="search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full py-2 pl-10 pr-10 outline-none border border-[#b3848f] rounded-md"
          />

          <IoIosSearch
            className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-500"
            size={16}
          />
        </div>

        {/* close button */}
        <MdOutlineClose
          size={20}
          className="cursor-pointer"
          onClick={closeMenu}
        />
      </div>
    </section>
  );
}
