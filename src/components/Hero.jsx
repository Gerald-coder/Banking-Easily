import React from "react";
import { bank, discount, robot } from "../assets";
import styles from "../style";
import Getstarted from "./Getstarted";

function IMG() {
  return (
    <div className={`grid h-100% ${styles.paddingY} mt-[5rem] `} id="home">
      <img
        src={bank}
        alt="my bank and I"
        width="1920"
        height="967"
        className="px-6"
      />
    </div>
  );
}
const Hero = () => (
  <>
    <IMG />
    <section className={`flex gap-10 md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex  justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div
          className={`flex flex-row justify-between items-center bg-discount-gradient rounded-[10px] mb-2 px-[8px] py-[6px]`}
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p
            className={`ml-3 font-poppins font-normal text-dimWhite text-[18px]`}
          >
            <span className="text-white"> 20 </span> Discount for
            <span className="text-white"> when you get your ticket</span> here
            🔥🔥
          </p>
        </div>
        <div className="flex justify-between flex-row items-center w-full leading-2">
          <h1 className="text-white flex-1 ss:text-[52px] text-[38px] ss:leading-[70px] leading-[52px] font-poppins font-semibold py-3 ">
            networking <br />
            <span className=" text-gradient">To create </span> <br />
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0 text-white">
            <Getstarted />
          </div>
        </div>

        <h1 className="text-white  ss:text-[52px] text-[38px] ss:leading-[70px] leading-[52px] font-poppins font-semibold py-3 ">
          transitional banking
        </h1>
        <p className="text-slate-400 font-poppins font-semibold text-[18px] leading-[30px] max-w-[490px] mt-5">
          An educative team of experts uses a methodology to identify the credit
          cards most likely to fit your needs. We examine annual percentage
          rates, annual fees.
        </p>
      </div>
      <div className="relative flex-1 flex justify-center items-center">
        <img
          src={robot}
          alt="billing"
          className="relative z-[5] w-[100%] h-[100%]  "
        />
        <div className="absolute z-0 h-[35%] w-[40%]  pink__gradient top-0" />
        <div className="absolute z-1 w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-0 w-[50%] h-[55%] bottom-20 right-20 blue__gradient" />
      </div>
      <div className="xs:flex justify-center items-center hidden ss:hidden">
        <Getstarted />
      </div>
    </section>
  </>
);

export default Hero;
