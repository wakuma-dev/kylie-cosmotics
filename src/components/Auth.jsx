import React from "react";
import { FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function Auth() {
  return (
    <NavLink to="/auth/login" className="cursor-pointer">
      <FiUser size={20} />
    </NavLink>
  );
}
