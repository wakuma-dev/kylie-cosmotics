import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img from "../../assets/cbdd362eaef9e0c4c8067b6c988f70c2.jpg";
import img2 from "../../assets/1a94e48ea58bf7e9c1e650330de8f2d2.jpg";
import { Button } from "../ui/Button";

const FeatureProducts = () => {
  const navigate = useNavigate();

  const motionProps = {
    initial: { opacity: 0, y: 80 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 }, 
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-12 py-12 bg-[#f8f1f4]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          {...motionProps}
          className="rounded-xl overflow-hidden shadow-md"
        >
          <img src={img} alt="product" className="w-full h-90 object-cover" />
        </motion.div>

        {/* CENTER CONTENT */}
        <motion.div
          {...motionProps}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="rounded-xl bg-white text-black flex flex-col items-center justify-center gap-4 p-6 shadow-md text-center"
        >
          <h3 className="text-[28px] leading-[31px] text-[#b3848f] font-bold font-sans uppercase">hydrate, tint, go</h3>{" "}
          <p className="font-light font-sans text-[17px] leading-[20px] text-[#393939] max-w-[180px]">
            {" "}
            discover two new limited-edition formulas for hydrated, juicy lips
            all summer long:{" "}
          </p>{" "}
          <p className="text-[16px] leading-[20px] font-light font-sans">
            {" "}
            <span className="font-bold">coconut water lip stain </span> <br />delivers lasting comfort and <br /> up
            to 24 hours moisture{" "}
          </p>{" "}
          <p className="text-[16px] leading-[20px] font-light font-sans">
            {" "}
            <span className="font-bold">cloud balm</span> offers instant <br /> hydration and doubles <br /> as a
            daily lip mask{" "}
          </p>
          <Button onClick={() => navigate("/shop")}>Shop Now</Button>
        </motion.div>

        {/* IMAGE 2 */}
        <motion.div
          {...motionProps}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="rounded-md overflow-hidden shadow-md"
        >
          <img src={img2} alt="product" className="w-full h-80 object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureProducts;
