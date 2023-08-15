import React from "react";
import { feedback } from "../constants";
import Feedback from "./Feedback";

const Testimonials = () => (
  <section
    id="speakers"
    className="sm:py-16 py-6 flex flex-col justify-center item-center relative"
  >
    <div className="absolute w-[60%] h-[60%] rounded-full -right-[60%] z-[0] blue__gradient flex-1" />
    <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-centers md:mb-16 mb-6 z-[1]">
      <h2 className=" text-white font-poppins font-semibold sm:text[30px] text-[35px] flex-1 xs:leading-53px leading-43px">
        Have you heard what people <br className="sm:block hidden" /> talk our
        conferences
      </h2>
      <p className="flex-1 text-slate-400 font-poppins font-semibold xs:text-[15px] text-[20px] leading-[30px] max-w-[490px] mt-5">
        All the knowlegdes you require to acquire your card and make your
        business seamlessly easy as never before, lets teach you that
      </p>
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center z-[1] feedback-container">
      {feedback.map((card) => {
        return <Feedback key={card.id} {...card} />;
      })}
    </div>
  </section>
);

export default Testimonials;
