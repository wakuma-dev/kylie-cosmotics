import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/6d8f5a6a07b8cd2ff1f2de247162719c.jpg'
import { Button } from '../ui/Button';
const bgStyle = {
  backgroundImage: `linear-gradient(to right,
         rgba(0,0,0, 0.6),
         rgba(0,0,0, 0.6)),url(${img})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
export default function Banner(){
    const navigate = useNavigate();
    return(
        <section className=" w-full min-h-[60vh] lg:min-h-[80vh] flex flex-col items-center justify-center text-center gap-3 px-4 sm:px-6 md:px-10
         lg:px-12 py-4 md:py-6 lg:py-8"
         style={bgStyle}>
       <h4 className='text-[34px] leading-[37px] font-bold text-[#fff] font-sans uppercase'>virtual <br /> try on</h4>
       <p className="text-[16px] leading-[19px] font-normal font-sans text-white">try on lipstick, blushes & more to <br /> discover  your new fave shade</p>
       <Button variant="secondary" onClick={() => navigate("/discover")}>
        Discover More
       </Button>
        </section>
    )
}
