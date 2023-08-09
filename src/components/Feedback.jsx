import React from "react";
import { quotes } from "../assets";

const Feedback = ({ content, name, title, img }) => {
  return (
    <div className="flex flex-col justify-between items-start px-10 py-12 max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card rounded-[20px] gap-8 ">
      <img
        src={quotes}
        alt="quotes"
        className="object-contain w-[40px] h-[27px]"
      />
      <p className="flex-1 text-slate-400 font-poppins font-normal xs:text-[15px] text-[20px]  max-w-[490px] mt-5">
        {content}
      </p>
      <div className="flex justify-between items-center gap-3  ">
        <img src={img} alt={name} className="w-[37px] mr-5" />
        <div className="flex flex-col justify-center items-start ">
          <p className="flex-1 text-slate-400 font-poppins font-normal xs:text-[15px] text-[20px] max-w-[490px] ">
            {name}
          </p>
          <p className="flex-1 text-slate-400 font-poppins font-semibold xs:text-[15px] text-[20px]  max-w-[490px] ">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
