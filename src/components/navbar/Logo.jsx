import React from "react";
export default function Logo(){
  return(
    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center justify-center text-center gap-1">
         <h2 className="uppercase text-[20px] leading-[16px] md:text-[24px] md:leading-[18px] lg:text-[28px] lg:leading-[20px] tracking-tighter font-bold font-serif text-black">
        kylie cosmetics
      </h2>

      <p className="uppercase text-[15px] tracking-wider font-light font-serif text-black">
       kylie jenner
      </p>
    </div>
  )
}


