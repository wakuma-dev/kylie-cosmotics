import React, { useState } from "react";
import { createPortal } from "react-dom";
import { IoIosSearch } from "react-icons/io";
import ModalSearch from "./modal/ModalSearch";

export default function Search() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <IoIosSearch
        size={20}
        className="cursor-pointer"
        onClick={() => setOpenModal(true)}
      />

      {openModal &&
        createPortal(
          <ModalSearch closeMenu={() => setOpenModal(false)} />,
          document.body,
        )}
    </>
  );
}
