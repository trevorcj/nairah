function Button({ width, children, classnames, type = "", ...props }) {
  return (
    <button
      type={type}
      className={`w-md bg-primary rounded-full py-4 font-semibold cursor-pointer hover:bg-primary/95 transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-primary/70 focus:outline-none disabled:bg-gray-light ${classnames}`}
      style={{ width: width }}
      {...props}>
      {children}
    </button>
  );
}

export default Button;
