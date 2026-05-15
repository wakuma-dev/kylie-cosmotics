export function Button({
  className = "",
  variant = "primary",
  children,
  ...props
}) {
  const style = {
    primary:
      "bg-[#000] text-white border-transparent hover:border-black hover:text-black hover:bg-[#fff]",
    secondary:
      "bg-[#fff] text-black border-black hover:border-transparent hover:bg-[#000] hover:text-white",
  };

  return (
    <button
      className={`px-2 lg:px-4 py-1 lg:py-1.5 transition-all duration-150 rounded-md border ${style[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
