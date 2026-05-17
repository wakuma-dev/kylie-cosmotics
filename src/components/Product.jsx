import React, { useContext } from "react";
import img from "../assets/ec0ff93c71abb79e1ce060bd93cb46b7.jpg";
import img2 from "../assets/63d937c460f5254374db7c3b541cdcdf.jpg";
import img3 from "../assets/43ec142940534118117de763d2e7f9b7.jpg";

import { CartContext } from "../context/CartProvider";
import { Button } from "./ui/Button";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: "cosmic-intense", // Added unique IDs
    image: img,
    price1: 120,
    price2: 150,
    desc: "cosmic kylie jenner intense eau de parfum",
  },
  {
    id: "cosmic-standard",
    image: img2,
    price1: 140,
    price2: 150,
    desc: "cosmic kylie jenner eau de perfume",
  },
  {
    id: "ambery-floral",

    image: img3,
    price1: 250,
    price2: 150,
    desc: "ambery floral eau de perfume",
  },
  {
    id: "cosmic-2",
    image: img,
    price1: 300,
    price2: 150,
    desc: "cosmic kylie jenner 2.0 eau de perfume",
  },
];

export default function Product() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();



  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-12 py-8 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((pro) => (
          <div
            key={pro.id}
            className="group relative bg-white/10 rounded-lg w-full h-[400px] overflow-hidden
             border border-gray-100 shadow-sm"
          >
            {/* Product Image */}
            <img
              src={pro.image}
              alt={pro.desc}
              className="w-full h-[350px] object-cover rounded-tl-full rounded-tr-full"
            />

            {/* Slide-up Content Panel */}
            <div className="absolute bottom-2.5 left-0 w-full bg-[#fff]
             text-black p-3 transform translate-y-16 hover:translate-y-0 
             transition-transform duration-300 ease-in-out flex flex-col justify-end ">
              <div className="flex items-center justify-between w-full mb-1">
                <span className="text-[17px] text-[#393939] font-semibold leading-[19px] font-sans">
                  30ml
                </span>
                <p className="text-[17px] leading-[19px] text-[#393939] font-semibold font-sans">
                  ${pro.price1}
                </p>
              </div>

              <p className="">{pro.desc}</p>

              <button className="p-2 outline-none bg-white border border-black rounded-md"
               onClick={() => addToCart(pro)}>
                Add To Cart
               </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center my-10">
        <Button variant="secondary" onClick={() => navigate("/shop")}>
            Shop Now
        </Button>
      </div>
    </section>
  );
}
