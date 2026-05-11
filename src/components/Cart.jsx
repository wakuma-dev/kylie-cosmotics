import React, { useContext } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartProvider";

export default function Cart() {
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <NavLink to="/checkout" className="relative">
      <MdOutlineShoppingBag size={20} className="cursor-pointer" />

      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
          {totalItems}
        </span>
      )}
    </NavLink>
  );
}
