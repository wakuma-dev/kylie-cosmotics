import React, { useMemo, useState, useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import img from "../../assets/0968eacc07cab3058cd8ece4e1d1c722.jpg";
import img2 from "../../assets/63d937c460f5254374db7c3b541cdcdf.jpg";
import img3 from "../../assets/43ec142940534118117de763d2e7f9b7.jpg";
import img4 from "../../assets/ec0ff93c71abb79e1ce060bd93cb46b7.jpg";
import img5 from "../../assets/17e1def0a49451cc39f368b7adcd7a73.jpg";
import img6 from "../../assets/e24eb85eb0908bbb8ae361e55c726382.jpg";
import img7 from "../../assets/bc04e2c92a4f010311c8c3a64787b47c.jpg";
import img8 from "../../assets/1a94e48ea58bf7e9c1e650330de8f2d2.jpg";
import img9 from "../../assets/289f15493a485def8a3f3aca2e13f349.jpg";
import img10 from "../../assets/9a801dafc9157e6a9a1eaa51be53276f.jpg";
import img11 from "../../assets/7a4b3bf29988256ed408c11f72804ecc.jpg";
import img12 from "../../assets/3d8066677ee8530b15f25384ce9d265a.jpg";
import banner from "../../assets/3199dec93184f1b2f7797560d2577356.jpg";
import banner2 from "../../assets/6ea2b980107b698acf224a27a3402f47.jpg"
const products = [
  {
    id: 1,
    image: img,
    amount: "100ml",
    desc: "Cosmic Kylie Jenner Intense Eau de Parfum",
    price: 140,
    featured: true,
    createdAt: "2026-05-10",
  },
  {
    id: 2,
    image: img2,
    amount: "100ml",
    desc: "Cosmic Kylie Jenner Intense Eau de Parfum",
    price: 120,
    featured: true,
    createdAt: "2026-02-04",
  },
  {
    id: 3,
    image: img3,
    amount: "100ml",
    desc: "Cosmic Kylie Jenner Intense Eau de Parfum",
    price: 140,
    featured: true,
    createdAt: "2026-01-05",
  },
  {
    id: 4,
    image: img4,
    amount: "100ml",
    desc: "Cosmic Kylie Jenner Intense Eau de Parfum pen spray",
    price: 160,
    featured: true,
    createdAt: "2026-01-28",
  },
  {
    id: 5,
    image: img5,
    amount: "100ml",
    desc: "Caramel Cloud Hair & Body Mist",
    price: 170,
    featured: true,
    createdAt: "2025-12-28",
  },
  {
    id: 6,
    image: img6,
    amount: "100ml",
    desc: "Vanilla Dew Hair & Body Mist",
    price: 200,
    featured: true,
    createdAt: "2025-11-30",
  },
  {
    id: 7,
    image: img7,
    amount: "100ml",
    desc: "Sweet Eclair Hair & Body Mist",
    price: 250,
    featured: false,
    createdAt: "2024-11-30",
  },
  {
    id: 8,
    image: img8,
    amount: "100ml",
    desc: "Cosmic Kylie Travel Spray",
    price: 180,
    featured: false,
    createdAt: "2025-11-30",
  },
  {
    id: 9,
    image: img9,
    amount: "100ml",
    desc: "Cosmic Kylie Jenner Eau de Parfum",
    price: 210,
    featured: false,
    createdAt: "2026-01-30",
  },
  {
    id: 10,
    image: img10,
    amount: "100ml",
    desc: "Cosmic Kylie Jenner Pen Spray",
    price: 200,
    featured: false,
    createdAt: "2026-02-28",
  },
  {
    id: 11,
    image: img11,
    amount: "100ml",
    desc: "Cosmic Kylie Jenner Pen Spray Trio",
    price: 200,
    featured: false,
    createdAt: "2026-03-30",
  },
  {
    id: 12,
    image: img12,
    amount: "100ml",
    desc: "Hair and Body Mist Travel",
    price: 200,
    featured: false,
    createdAt: "2026-04-28",
  },
];

const Fragrance = () => {
  const [sortType, setSortType] = useState("featured");
  const { addToCart } = useContext(CartContext);

  const sortedProducts = useMemo(() => {
    const copiedProducts = [...products];

    switch (sortType) {
      case "featured":
        return copiedProducts.filter((product) => product.featured);
      case "new":
        return copiedProducts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
      case "highToLow":
        return copiedProducts.sort((a, b) => b.price - a.price);
      case "lowToHigh":
        return copiedProducts.sort((a, b) => a.price - b.price);
      default:
        return copiedProducts;
    }
  }, [sortType]);

  return (
    <main className="w-screen min-h-[70dvh] bg-gradient-to-b from-[rgb(201,69,55)] to-[rgb(230,190,189)] pb-10">
      <Helmet>
        <title>Fragrance and Perfume | Kylie Cosmetics by Kylie Jenner</title>
        <meta
          name="description"
          content="Shop Kylie Jenner fragrance and perfume collection."
        />
      </Helmet>

      <section className="px-4 sm:px-6 md:px-10 lg:px-12 py-10 flex items-start justify-between">
        <p className="text-[34px] leading-[37px] font-bold font-sans text-white tracking-tight">
          FRAGRANCE
        </p>
        <NavLink
          to="/"
          className="text-[15px] leading-[18px] text-white font-light font-sans"
        >
          Home/<span className="ml-2">fragrance</span>
        </NavLink>
      </section>

      <div className="flex justify-end px-4 lg:px-10 py-3">
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="bg-white lowercase text-[15px] text-[#c53627] rounded-md p-1 outline-none"
        >
          <option value="featured">Sort By: Featured</option>
          <option value="new">Sort By: New</option>
          <option value="highToLow">Sort By: Price High To Low</option>
          <option value="lowToHigh">Sort By: Price Low To High</option>
        </select>
      </div>

      {/* FIXED CONTAINER: Added grid-flow-dense to pack empty layout slots seamlessly */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-dense gap-3 px-4 lg:px-10 py-4">
        {sortedProducts.map((product, index) => {
          return (
            <React.Fragment key={product.id}>
              <article className="relative w-full h-[450px] rounded-md overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.desc}
                  className="w-full h-full object-cover"
                />

                <div
                  className="absolute bottom-2.5 left-0 w-full bg-[#fff]
             text-black p-3 transform translate-y-16 hover:translate-y-0 
             transition-transform duration-300 ease-in-out flex flex-col justify-end "
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="text-[17px] text-[#393939] font-semibold leading-[19px] font-sans">
                      {product.amount}
                    </span>
                    <p className="text-[17px] leading-[19px] text-[#393939] font-semibold font-sans">
                      ${product.price}
                    </p>
                  </div>

                  <p className="">{product.desc}</p>

                  <button
                    className="p-2 outline-none bg-white border border-black rounded-md"
                    onClick={() => addToCart(product)}
                  >
                    Add To Cart
                  </button>
                </div>
              </article>

              {/* FIXED BANNER: Made responsive grid allocations */}
              {index === 1 && (
                <div className="col-span-1 md:col-span-2 md:row-span-2 relative w-full h-[300px] md:h-full min-h-[300px]">
                  <img
                    src={banner}
                    alt="banner"
                    className="w-full h-full object-cover rounded-md"
                  />
                  <div className="absolute inset-0 flex flex-col items-start justify-between text-white px-4 py-8 bg-black/60 rounded-md">
                    <h2
                      className="text-white tracking-tight font-semibold text-[22px] leading-[22px] 
                    lg:text-[24px]  lg:leading-[27px]"
                    >
                      cosmic <br />
                      <span className="font-normal">
                        {" "}
                        kylie jenner <br /> intense
                      </span>
                    </h2>
                    <span className="uppercase font-bold text-white font-sans text-[25px] leading-[27px] lg:text-[35px] lg:leading-[37px]">
                      A CREAMY, RICH, AMBERY <br /> GOURMAND SCENT
                    </span>
                  </div>
                </div>
              )}
              {index === 4 && (
                <div className="relative col-span-1 md:col-span-2 w-full h-[450px] rounded-md">
                  <img
                    src={banner2}
                    alt="banner2"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-start justify-between px-4 py-8">
                    <h3 className="text-white tracking-tight text-[22px] leading-[22px] lg:text-[24px] lg:leading-[27px] font-semibold">
                      Cosmic <br />{" "}
                      <span className="font-normal">kylie jenner</span>
                    </h3>
                    <span className=" text-[25px] leading-[27px] lg:text-[35px] lg:leading-[37px] text-white font-bold font-sans uppercase">
                      {" "}
                      a sweet, warm, <br /> ambery florial scent
                    </span>
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </main>
  );
};

export default Fragrance;
