import React, { useState } from "react";

function Modal({ modal }) {
  return (
    <div
      className={`${
        modal ? "block" : "hidden"
      } text-red-600  top-10 z-40 w-[30rem] h-[40rem] bg-black opacity-100`}
    >
      <h2>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
        pariatur tenetur alias? Asperiores nisi consectetur, adipisci culpa
        minima recusandae sint distinctio beatae animi expedita cum vel alias
        repudiandae nam unde.
      </h2>
    </div>
  );
}

export default Modal;
