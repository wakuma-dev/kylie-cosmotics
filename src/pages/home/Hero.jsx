import React, { useState, useEffect, useRef } from "react";
import img from '../../assets/704fb0232a24750851ab2d1c11a65349.jpg'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      ref={sectionRef}
      style={bgStyle}
      className="min-h-[50vh] md:min-h-[60vh] lg:min-h-[80vh] flex flex-col items-start justify-end gap-4 px-4 sm:px-6 md:px-10 lg:px-12"
    >
      <h1
        className={`text-black text-2xl mg:text-4xl font-bold transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        Luxury Beauty Experience
      </h1>
    </section>
  );
}
