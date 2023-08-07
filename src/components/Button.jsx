import React from "react";

const Button = ({ text }) => (
  <button className="bg-blue-gradient w-[150px] h-[60px] mt-5 rounded-[13px] text-[20px] p-3 cursor-pointer font-poppins font-semibold outline-none text-primary">
    {text}
  </button>
);

export default Button;
