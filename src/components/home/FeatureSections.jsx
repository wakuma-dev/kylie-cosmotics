import { useNavigate } from "react-router-dom";

export default function FeatureSections({ image, title, desc, button }) {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f8f1f4] px-4 sm:px-6 md:px-10 lg:px-12 py-8">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-y-2">
        <div className="w-full h-[400px] md:h-[500px] rounded-md md:rounded-tl-md md:rounded-bl-md">
          <img
            src={image}
            alt={title}
            className="w-full h-full rounded-md lg:rounded-tl-md lg:rounded-bl-md object-cover"
          />
        </div>

        <div className="flex flex-col items-center justify-center mt-4  md:mt-0 gap-3
         text-center w-full h-[400px] md:h-[500px] bg-white rounded-md lg:rounded-tr-md lg:rounded-br-md">
          <h4 className="text-[34px] leading-[37px] text-[#b3848f] font-sans font-bold uppercase max-w-[300px] tracking-tight">
            {title}
          </h4>

          <p className="max-w-[370px] text-[16px] leading-[19px] md:text-[20px] md:leading-[23px] font-normal font-serif text-[#393939]">
            {desc}
          </p>

          <button
            className="p-2 outline-none text-[13px] font-normal leading-[15px] border border-black rounded-md bg-white"
            onClick={() => navigate("/shop")}
          >
            {button}
          </button>
        </div>
      </div>
    </section>
  );
}
