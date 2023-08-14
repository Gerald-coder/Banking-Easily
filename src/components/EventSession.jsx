import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { slides } from "../constants";
import { logo, menu, close } from "../assets";

function EventSession() {
  const { id } = useParams();
  console.log(typeof id);
  console.log(slides);
  const slide = slides.find((slide) => {
    return slide.id === Number(id);
  });
  console.log(slide);

  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-primary flex flex-col justify-center items-start text-white w-[100%]  px-6 sm:px-16">
      <nav className=" w-[100%] flex justify-between items-center my-5 px-6 sm:px-16 ">
        <div>
          <img src={logo} alt="bankyEasy" className="w-[120px] h-[30px]" />
          <span className="text-teal-600 absolute top-30 left-20 font-bold text-[18px] ">
            conference{" "}
          </span>
        </div>

        <ul className=" justify-between items-center gap-8 text-[2rem] max-w-[300px] hidden sm:flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Get started</li>
        </ul>
        {/* small screen navbar */}
        <div className="sm:hidden block sidebar ">
          <img
            src={`${toggle ? close : menu}`}
            alt=""
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`justify-start items-start text-[1.5rem] absolute sidebar  flex-col right-5 ${
              toggle ? "flex" : "hidden"
            } whitespace-nowrap  bg-black-gradient p-5 rounded-[5px]`}
          >
            <ul className="flex flex-col gap-5">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Get started</li>
            </ul>
          </div>
        </div>
      </nav>{" "}
      <div>
        <div className="grid min-w-[70px] py-8 px-6 sm:px-16">
          <img
            src={slide.url}
            alt={slide.venue}
            className="w-[100%] bg-cover"
          />
        </div>
        <div>
          <h4 className="">{slide?.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default EventSession;
