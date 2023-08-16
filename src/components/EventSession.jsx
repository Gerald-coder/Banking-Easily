import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { slides } from "../constants";
import { logo, menu, close } from "../assets";
import styles from "../style";
import Registration from "./Registration";

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
      <div className="flex flex-col">
        <div className="grid min-w-[70px] py-8 px-6 sm:px-16">
          <img
            src={slide.url}
            alt={slide.venue}
            className="w-[100%] bg-cover"
          />
        </div>
        <div className="flex flex-col sm:flex-row ">
          <h4 className="flex-1 text-slate-400 font-poppins font-semibold xs:text-[15px] text-[20px] leading-[30px] max-w-[490px] mt-5">
            <span className="text-white text-[2rem]">
              What Are We To Achieve
            </span>{" "}
            <br />
            {slide?.title}
          </h4>
          <p className="flex-1 text-slate-400 font-poppins font-semibold xs:text-[15px] text-[20px] leading-[30px] max-w-[490px] mt-5">
            {" "}
            <span className="text-white text-[2rem]">
              how do we achieve them
            </span>{" "}
            <br />
            {slide.details}
          </p>
        </div>
        <div className="my-8">
          <p className="text-slate-400 font-poppins font-semibold xs:text-[25px] text-[30px] leading-[30px] max-w-[490px] mt-5">
            {slide.date}
          </p>
          <h2 className="text-slate-400 font-poppins font-semibold xs:text-[25px] text-[30px] max-w-[490px] mt-5">
            {slide.time}
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row justify-between my-8">
          <ul className="text-dimWhite text-[2rem]">
            <span className="text-white text-[2rem] mb-[1.5rem]">
              Our Speakers
            </span>{" "}
            <br />
            {slide.speakers.map((speaker) => {
              return <li>{speaker}</li>;
            })}
          </ul>
          <p className="text-slate-400 font-poppins font-semibold xs:text-[15px] text-[20px] leading-[30px] max-w-[490px] mt-5">
            <span className="text-white text-[3rem]">Venue</span> <br />
            {slide.venue}
          </p>
        </div>
        {/* <div className={`grid h-100% ${styles.paddingY} mt-[5rem] `}>
          <iframe src={slide.url} frameborder="0" width="1520" height="967">
            {" "}
            my video
          </iframe>
        </div> */}
      </div>
      <div className="py-[1rem]">
        <Registration />
      </div>
    </div>
  );
}

export default EventSession;
