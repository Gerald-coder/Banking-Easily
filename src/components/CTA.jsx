import React from "react";
import Button from "./Button";

function CTA() {
  return (
    <div className="flex sm:flex-row flex-col justify-center sm:items-center items-start py-[3rem] px-[2rem] sm:px-[5rem] my-[4rem] bg-black-gradient-2 rounded-[15px]">
      <div className="flex-1 mb-6 sm:mb-0">
        <h2 className=" text-white font-poppins font-semibold sm:text[30px] text-[25px]  xs:leading-53px leading-43px flex flex-wrap">
          Get one time enlightenment <br /> about your bank
        </h2>
        <p className="text-slate-400 font-poppins font-semibold xs:text-[15px] text-[20px] leading-[30px] max-w-[490px] mt-5 flex flex-wrap">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="">
        <Button text="Get Ticket" />
      </div>
    </div>
  );
}

export default CTA;
