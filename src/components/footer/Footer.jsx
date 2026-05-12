import React from "react";
import { Button } from "../ui/Button";
import socialLinks from "../../data/socialLinks";
import { NavLink } from "react-router-dom";
import FooterLinks from "../../data/FooterLinks";
export default function Footer() {
  return (
    <footer className="w-full flex justify-center max-w-9xl h-full lg:min-h-[70vh] px-4 sm:px-6 md:px-10 lg:px-12 py-3 lg:py-5 bg-[#f8f1f4]">
      <div className="mt-10 flex flex-col items-start gap-2 w-full max-w-[800px] mx-auto">
        <h4 className="text-left text-[17px] md:text-[20px] leading-[20px] md:leading-[22px] font-semibold text-[#393939] font-sans tracking-normal">
          sign up for updates:
        </h4>
        <span className="font-sans text-[16px] font-normal text-[#393939] leading-[18px]">
          please enter a valid email address
        </span>
        <div className="flex items-start gap-2 w-full">
          <input
            type="email"
            placeholder="email"
            className="bg-transparent border border-black rounded-md w-full py-1.5 px-4 outline-none"
          />

          <Button variant="secondary">submit</Button>
        </div>
        <div className="flex items-center justify-center gap-4 mx-auto py-4 sm:py-6 md:py-8">
          {socialLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <a key={index} href={item.path} target="_blank">
                <Icon className="text-[18px] md:text-[20px]lg:text-[24px] leading-[21px] font-medium text-[#b3848f]" />
              </a>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-4  mx-auto">
          {FooterLinks.map((item) => {
            return (
              <NavLink
                to={item.path}
                className="text-[17px] leading-[21px] font-normal text-[#b3848f] hover:text-[#000] transition-colors duration-150"
              >
                {item.name}
              </NavLink>
            );
          })}
        </div>
        <div className="flex items-center justify-end text-center  mx-auto">
          <p className="text-[12px] leading-[14px] text-[#393939] font-normal py-3 md:py-5">
            Developed by: <span className="text-[#b3848f] font-medium">Wakuma hailu</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
