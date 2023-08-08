import React from "react";
import { bill } from "../assets";
import Button from "./Button";
import { apple, google } from "../assets";

const Billing = () => {
  return (
    <section
      id="product"
      className="flex flex-col-reverse sm:flex-row py-6 sm:py-16 gg:gap-6"
    >
      <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
        <img src={bill} alt="bills" className="w-[100%] h-[100%] z-[5]" />
        <div className="w-[50%] h-[50%] rounded-full z-[3] white__gradient absolute top-0 left-1/2 " />
        <div className="w-[50%] h-[50%] rounded-full z-[0] pink__gradient absolute bottom-0 left-1/2 " />
      </div>
      <div className="flex flex-1 flex-col justify-center  items-start gap-3">
        <h2 className=" text-white font-poppins font-semibold sm:text[30px] text-[35px]  xs:leading-53px leading-43px">
          Transforming Finance into, <br className="sm:block hidden" /> an
          Uncertain Landscape.
        </h2>
        <p className="text-slate-400 font-poppins font-semibold xs:text-[15px] text-[20px] leading-[30px] max-w-[490px] mt-5">
          Industry experts, thought leaders, and innovators will discuss some of
          the challenges facing financial institutions today as they try to
          adapt to these new realities and find ways to innovate within them.
        </p>
        <div className="flex flex-row gap-8 sm:mt-10 mt-6">
          <img
            src={apple}
            alt="apple"
            className="h-[50px] w-[150px] cursor-pointer object-contain mr-5 "
          />
          <img
            src={google}
            alt="apple"
            className="h-[50px] w-[150px] cursor-pointer object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
// screens: {
//       xs: "480px",
//       ss: "620px",
//       sm: "768px",
//       md: "1060px",
//       lg: "1200px",
//       xl: "1700px",
//     },
