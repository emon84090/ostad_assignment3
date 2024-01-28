import React from "react";

const Button = ({ children }) => {
  return (
    <>
      <button
        type="submit"
        className="w-[163px]  h-16 rounded-[30px] uppercase  bg-gradient-to-r from-[#D93D59] shadow-lg cursor-pointer to-[#d93d599c] text-white"
      >
        {children}
      </button>
    </>
  );
};

export default Button;
