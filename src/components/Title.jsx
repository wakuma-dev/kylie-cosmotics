export default function Title({ text, subtext, className = "" }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 ${className}`}
    >
      <h2 className="uppercase text-[28px] leading-[20px] tracking-tighter font-bold font-serif text-black">
        {text}
      </h2>

      <p className="uppercase text-[15px] tracking-wider font-light font-serif text-black">
        {subtext}
      </p>
    </div>
  );
}
