import React, { useState, useEffect, useRef } from "react";
import img from "../../assets/704fb0232a24750851ab2d1c11a65349.jpg";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // better than unobserve in this case
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      ref={sectionRef}
      style={bgStyle}
      className={`min-h-[50dvh] lg:min-h-[80dvh] flex flex-col items-start justify-center gap-2 px-4 sm:px-6
       md:px-10 lg:px-12 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <h2 className="text-[16px] leading-[21px] text-white font-sans font-medium uppercase tracking-tighter">
        just dropped
      </h2>
      <h3 className="text-[24px] leading-[26px] text-white md:text-[27px] lg:text-[34px] md:leading-[30px] lg:leading-[37px] font-sans font-bold uppercase tracking-normal">
        hydrating <br /> lip essentials
      </h3>
      <p className="text-[17px] leading-[20px] text-white md:text-[20px] md:leading-[23px] font-light font-sans">
        meet our new juicy, kiss-proof
        <br />
        <span className="font-medium">coconut water lips stain</span>
        and <br />
        nourshing, moisture-rich <span className="font-medium">cloud balm</span>
      </p>
      <Button variant="secondary" onClick={() => navigate("/shop")}>
        Shop Now
      </Button>
    </section>
  );
}
