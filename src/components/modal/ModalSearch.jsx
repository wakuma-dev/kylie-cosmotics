import React, { useContext, useRef } from "react";
import { SearchContext } from "../../context/SearchProvider";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";

export default function ModalSearch({ closeMenu }) {
  const { input, setInput } = useContext(SearchContext);
  const inputRef = useRef(null);

  const handleClear = () => {
    setInput("");
    inputRef.current?.focus();
  };

  return (
    /* Removed rounded-xl and fixed classes. Added border-b. */
    <div className="w-full bg-white p-4 shadow-md border-b border-gray-100">
      <div className="flex items-center gap-3 max-w-7xl mx-auto">
        <div className="relative w-full z-40">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full py-2.5 pl-10 pr-10 outline-none border border-[#b3848f] rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#b3848f]/20 transition-all"
            placeholder="Search for lipsticks, blushes, brands..."
            autoFocus
          />

          <IoIosSearch
            className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400"
            size={18}
          />

          {input && (
            <MdOutlineClose
              className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-400 hover:text-gray-600 cursor-pointer"
              size={18}
              onClick={handleClear}
            />
          )}
        </div>

        <button
          onClick={closeMenu}
          className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <MdOutlineClose
            size={24}
            className="text-gray-500 hover:text-gray-800"
          />
        </button>
      </div>
    </div>
  );
}
