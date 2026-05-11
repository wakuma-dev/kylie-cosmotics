export function Button({
  className = "",
  variant = "primary",
  children,
  ...props
}) {
  const style = {
    primary:
      "bg-[#393939] text-white border-transparent hover:border-black hover:text-black hover:bg-[#f8f1f4]",
    secondary:
      "bg-[#f8f1f4] text-black border-black hover:border-transparent hover:bg-[#393939] hover:text-white",
  };

  return (
    <button
      className={`px-4 py-1.5 transition-all duration-150 rounded-md border ${style[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
