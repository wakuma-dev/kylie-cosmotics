import React from "react";

const Card = ({ text, backImage, frontImage }) => {
  return (
    <div className="flex h-[467px] w-[467px] [perspective:1000px]">
      <div className="group relative h-full w-full">
        {/* Inner Card */}
        <div
          className="
            relative h-full w-full
            transition-transform duration-700
            [transform-style:preserve-3d]
            group-hover:[transform:rotateY(180deg)]
          "
        >
          {/* Front */}
          <div
            className="
              absolute inset-0 overflow-hidden rounded-2xl
              shadow-[0_8px_14px_0_rgba(0,0,0,0.2)]
              [backface-visibility:hidden]
            "
          >
            {/* Image */}
            <img
              src={frontImage}
              alt="front-image"
              className="h-full w-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />

            {/* Text */}
            <p
              className="
                absolute inset-0 z-10
                flex items-center justify-center
                text-3xl font-black text-white
              "
            >
              {text}
            </p>
          </div>

          {/* Back */}
          <div
            className="
              absolute inset-0 overflow-hidden rounded-2xl
              shadow-[0_8px_14px_0_rgba(0,0,0,0.2)]
              [backface-visibility:hidden]
              [transform:rotateY(180deg)]
            "
          >
            <img
              src={backImage}
              alt="back-image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
