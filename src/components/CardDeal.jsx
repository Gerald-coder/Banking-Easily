import React from "react";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section
      id="product"
      className="flex flex-col sm:flex-row py-6 sm:py-16 gg:gap-6"
    >
      <div className="flex flex-1 flex-col justify-center  items-start gap-3">
        <h2 className=" text-white font-poppins font-semibold sm:text[30px] text-[35px]  xs:leading-53px leading-43px">
          Easy guide to inform and enlighten you
          <br className="sm:block hidden" />
          in choosing the best card.
        </h2>
        <p className="text-slate-400 font-poppins font-semibold xs:text-[15px] text-[20px] leading-[30px] max-w-[490px] mt-5">
          The speakers will explore how banks can access the vast and rapidly
          growing market in the GBA through card withdrawals by further
          fostering partnerships and collaborations.
        </p>
        <div className="flex flex-row gap-8 sm:mt-10 mt-6">
          <Button text="Get tickets"  />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
        <img src={card} alt="bills" className="w-[100%] h-[100%] z-[5]" />
        <div className="w-[50%] h-[50%] rounded-full z-[3] white__gradient absolute top-0 left-1/2 " />
        <div className="w-[50%] h-[50%] rounded-full z-[0] pink__gradient absolute bottom-0 left-1/2 " />
      </div>
    </section>
  );
};

export default CardDeal;
