import React, { useState } from "react";
import { slides } from "../constants";
import { Link } from "react-router-dom";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function ImageSlider() {
  const [cur, setCur] = useState(1);
  console.log(`cur is ${cur}`);
  const slideStyles = {
    backgroundImage: `url(${slides[cur].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "20px",
    width: "100%",
    height: "100%",
  };

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const rightArrowStyles = {
    width: "60px",
    height: "60px",
    position: "absolute",
    right: "20px",
    top: "50%",
    // backgroundColor: "white",
    color: "#f2f2f2",
    borderRadius: "40%",
    display: "flex",
    placeContent: "center",
    cursor: "pointer",
    transform: "translate(0, -50%)",
    zIndex: "1",
  };

  const leftArrowStyles = {
    width: "60px",
    height: "60px",
    position: "absolute",
    left: "20px",
    top: "50%",
    // backgroundColor: "white",
    color: "#f2f2f2",
    borderRadius: "40%",
    display: "flex",
    placeContent: "center",
    cursor: "pointer",
    transform: "translate(0, -50%)",
    zIndex: "1",
  };

  const goToPrevious = () => {
    const isFirstIndex = cur === 0;
    const newIndex = isFirstIndex ? slides.length - 1 : cur - 1;
    setCur(newIndex);
  };
  const goToNext = () => {
    const lastIndex = cur === slides.length - 1;
    const newIndex = lastIndex ? 0 : cur + 1;
    setCur(newIndex);
  };

  const indicateStyles = {
    display: "flex",
    placeContent: "center",
  };

  const dotStyle = {
    cursor: "pointer",
    margin: "0 5px",
  };
  return (
    <div style={sliderStyles} id="speakers">
      <h2
        className=" text-white font-poppins font-semibold sm:text[30px] text-[35px]  xs:leading-53px leading-43px mb-6"
        style={{ color: "white", fontSize: "2rem" }}
      >
        {slides[cur].title}
      </h2>
      <button
        style={leftArrowStyles}
        className="w-[2rem] h-[2rem] text-[5rem] font-bold"
        onClick={goToPrevious}
      >
        <IoIosArrowBack />
      </button>
      <button
        style={rightArrowStyles}
        className="w-[4rem] h-[4rem] text-white text-[5rem]"
        onClick={goToNext}
      >
        <IoIosArrowForward className="" />
      </button>
      <Link to={`/events/${cur}`}>
        <div style={slideStyles}></div>
      </Link>

      <div style={indicateStyles} className="my-[1rem]">
        {slides.map((slide, slideIndex) => {
          return (
            <div
              style={dotStyle}
              key={slideIndex}
              onClick={() => setCur(slideIndex)}
            >
              🥚
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ImageSlider;
