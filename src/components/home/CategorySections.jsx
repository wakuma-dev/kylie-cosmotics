import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import bannerImg from "../../assets/507ab4643072180bced5a2b2f4291af4.jpg";
import bannerImg2 from "../../assets/812f188dee32a41d7767c1b09bc7cf4c.jpg";

export default function CategorySections() {
  const navigate = useNavigate();

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 w-full 
      /* Mobile: Full viewport height */
      h-[100dvh] 
      /* Laptop/Desktop: Fixed medium height (adjust 70vh or 700px to taste) */
      md:h-[70vh] md:min-h-[600px] md:max-h-[800px] 
      overflow-hidden bg-neutral-900"
    >
      {/* Left Card */}
      <div
        className="group relative w-full h-full cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-white/10"
        onClick={() => navigate("/shop")}
      >
        <div className="absolute inset-0">
          <img
            src={bannerImg}
            alt="New Collection"
            className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-16">
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight uppercase">
              Hydrating <br />
              <span className="font-bold italic">Lip Stain</span>
            </h2>
            <p className="max-w-xs text-sm text-gray-200 font-medium opacity-90">
              Smudge-resistant formula with a high-shine finish.
            </p>
            <Button
              variant="secondary"
              className="mt-2"
              onClick={() => navigate("/shop")}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>

      {/* Right Card */}
      <div
        className="group relative w-full h-full cursor-pointer overflow-hidden"
        onClick={() => navigate("/shop/eyes")}
      >
        <div className="absolute inset-0">
          <img
            src={bannerImg2}
            alt="Eye Collection"
            className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-16">
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight uppercase">
              Defining <br />
              <span className="font-bold italic">Eye Liner</span>
            </h2>
            <p className="max-w-xs text-sm text-gray-200 font-medium opacity-90">
              Precision application for a bold, lasting look.
            </p>
            <Button
              variant="secondary"
              className="mt-2"
              onClick={() => navigate("/shop")}
            >
              Explore
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
