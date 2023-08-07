import React from "react";
import { stats } from "../constants";

console.log(stats);
const Stats = () => {
  return (
    <div className="flex flex-wrap w-[100%] xs:place-content-center">
      {stats.map((stat) => {
        return (
          <div
            key={stat.id}
            className="flex flex-1 justify-center items-center flex-wrap m-3"
          >
            <h3 className="text-white font-poppins font-semibold sm:text[40px] text-[35px] mr-4 xs:leading-53px leading-43px">
              {stat.value}
            </h3>
            <p className="text-gradient font-poppins font-semibold sm:text[20px] text-[15px] mr-4 xs:leading-27px leading-21px uppercase whitespace-nowrap">
              {stat.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
