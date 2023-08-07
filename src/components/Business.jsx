import React from "react";
import Button from "./Button";
import { features } from "../constants";

const FeatureCard = ({ feature, index }) => {
  return (
    <div
      className={`${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } rounded-[20px] feature-card p-6 flex flex-row gap-5`}
    >
      <div className="flex justify-center items-center bg-black-gradient-2 rounded-full w-[80px] h-[80px]">
        <img
          src={feature.icon}
          alt="logo"
          className="w-[50%] h-[50%] object-contain"
        />
      </div>
      <div className="flex flex-col ml-3">
        <h3 className="text-white font-poppins font-bold text-[18px] mb-1">
          {feature.title}
        </h3>
        <p className="text-slate-400 font-poppins font-semibold xs:text-[15px] text-[20px] leading-[20px] max-w-[490px] mt-5">
          {feature.content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section
      className="flex  justify-center items-center sm:py-16 py-6 flex-col sm:flex-row xs:gap-10 "
      id="features"
    >
      <div className="flex flex-col justify-center  items-start gap-3">
        <h2 className=" text-white font-poppins font-semibold sm:text[40px] text-[35px]  xs:leading-53px leading-43px">
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className="text-slate-400 font-poppins font-semibold xs:text-[15px] text-[20px] leading-[30px] max-w-[490px] mt-5">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button text="Buy Ticket" />
      </div>
      <div className="flex flex-col justify-center  items-start  gap-3">
        {features.map((feature, index) => {
          return (
            <FeatureCard feature={feature} key={feature.id} index={index} />
          );
        })}
      </div>
    </section>
  );
};

export default Business;
