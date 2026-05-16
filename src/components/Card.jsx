import React from "react";

const Card = ({ text, backImage, frontImage, onNavigate }) => {
  return (
    <div className="flex w-full h-[350px] lg:h-[467px] md:max-w-[350px] lg:max-w-[467px] [perspective:1000px]">
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
          {/* Front Side */}
          <div
            onClick={onNavigate}
            className="
              absolute inset-0
              overflow-hidden rounded-2xl
              shadow-[0_8px_14px_0_rgba(0,0,0,0.2)]
              cursor-pointer
              [backface-visibility:hidden]
            "
          >
            {/* Front Image */}
            <img
              src={frontImage}
              alt={text}
              className="h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Text */}
            <div
              className="
                absolute inset-0 z-10
                flex items-center justify-center
                [backface-visibility:hidden]
                [transform:translateZ(60px)]
              "
            >
              <p
                className="
                text-[20px] leading-[22px]  md:text-[24px] md:leading-[26px] lg:text-[28px] lg:leading-[31px]
                  font-bold tracking-tight
                  uppercase text-white
                "
              >
                {text}
              </p>
            </div>
          </div>

          {/* Back Side */}
          <div
            className="
              absolute inset-0
              overflow-hidden rounded-2xl
              shadow-[0_8px_14px_0_rgba(0,0,0,0.2)]
              [transform:rotateY(180deg)]
              [backface-visibility:hidden]
            "
          >
            <img
              src={backImage}
              alt={`${text}-back`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
