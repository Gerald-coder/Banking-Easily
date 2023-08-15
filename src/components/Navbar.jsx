import React, { useState } from "react";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex justify-between items-start w-full py-6 navbar ">
      <img src={logo} alt="bankyEasy" className="w-[120px] h-[30px]" />
      <span className="text-teal-600 absolute top-14 left-20 font-bold text-[18px] ">
        conference
      </span>
      <ul className="list-none justify-end sm:flex  flex-1 items-center hidden ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins cursor-pointer text-[16px] font-normal accent-white text-white  ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex-1  flex justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
          className="w-[30px] h-[28px] object-contain"
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-lg sidebar `}
        >
          <ul className="list-none justify-end  flex-1 items-center">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins cursor-pointer text-[16px] font-normal  text-white   ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-6"
                }`}
              >
                <a
                  href={`#${nav.id}`}
                  className="hover:text-orange-300 active:text-orange-700"
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
