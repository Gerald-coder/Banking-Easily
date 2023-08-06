import React from "react";
import { arrowUp } from "../assets";

const Getstarted = () => {
  return (
    <div
      className={`flex justify-center items-center w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] `}
    >
      <div
        className={`flex flex-col gap-2 justify-center items-center rounded-full bg-primary w-[100%] h-[100%] cursor-pointer`}
      >
        <div className="flex justify-center items-start flex-row  ">
          <p className="font-poppins font-medium leading-[23px] text-[23px] ">
            <span className="text-gradient ">Get </span>
          </p>
          <img src={arrowUp} alt="arrow" className="h-23px w-[23px]" />
        </div>
        <div className="flex justify-center items-start flex-row ">
          <p className="font-poppins font-medium leading-[23px] text-[23px]">
            <span className="text-gradient">Ticket </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Getstarted;
