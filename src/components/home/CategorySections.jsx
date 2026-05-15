import React from "react";
import { useNavigate } from "react-router-dom";
const CategorySections = ({
  image,
  heading,
  title,
  description,
  subtitle,
  button,
}) => {
  const navigate = useNavigate();
  return(
    <section className="bg-[#f8f1f4] px-4 sm:px-6 md:px-10 lg:px-12 py-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-0">
        <div className="w-full h-[500px]">
          <img src={image} alt={image} className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-[500px] bg-white flex flex-col items-center justify-center text-center p-3 gap-3">
          <p className="text-[17px] uppercase leading-[26px] font-normal font-sans">{title}</p>
          <h3 className="text-[34px] max-w-[350px] uppercase leading-[37px] font-bold font-sans text-[#b3848f]">{heading}</h3>
          <p className="max-w-[150px]  lg:max-w-[300px] text-[16px] lg:text-[20px] leading-[19px] lg:leading-[23px] text-[#393939] font-serif font-normal">{description}</p>
          <span className="text-[10px] leading-[13px] text-[#393939] font-normal font-serif">{subtitle}</span>
          <button className="p-2 outline-none text-[13px] font-normal leading-[15px] bg-white border border-black rounded-md text-black"
          onClick={() => navigate("/shop")}>
            {button}
          </button>
        </div>
      </div>
    </section>
  );
}
export default CategorySections;