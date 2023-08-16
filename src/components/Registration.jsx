import React from "react";

function Registration() {
  return (
    <div className="bg-black-gradient-2 flex items-start sm:items-center justify-center  rounded-[1rem] p-6 flex-col sm:flex-row">
      <form action="" className="flex flex-col sm:flex-row">
        <label htmlFor="email" className="text-white text-[2rem] mx-4">
          {" "}
          Email
        </label>{" "}
        <br />
        <input
          type="email"
          name=""
          id="email"
          placeholder="email"
          width="2rem"
          className="bg-black-gradient-2 text-white sm:text-[1.3rem] text-[2rem] w-[40rem] sm:w-[15rem] h-[4rem] rounded-[1rem] p-[10px]"
        />{" "}
        <br />
        <label htmlFor="Name" className="text-white text-[2rem] mx-4">
          {" "}
          Name
        </label>{" "}
        <br />
        <input
          type="text"
          name=""
          placeholder="Oduigwe Gerald"
          id="name"
          className="bg-black-gradient-2 text-white sm:text-[1.3rem] text-[2rem] w-[40rem] h-[4rem] rounded-[1rem] p-[10px] sm:w-[15rem]"
        />{" "}
        <br />
        <label htmlFor="phone" className="text-white text-[2rem] mx-4">
          Phone
        </label>{" "}
        <br />
        <input
          type="phone"
          name=""
          id="phone"
          placeholder="+234-7048444616"
          className="bg-black-gradient-2 text-white sm:text-[1.3rem] text-[2rem] w-[40rem] h-[4rem] rounded-[1rem] p-[10px] sm:w-[15rem]"
        />
      </form>
    </div>
  );
}

export default Registration;
