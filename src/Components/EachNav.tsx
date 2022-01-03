import React, { useState } from "react";
import { IProps } from "./sideUtil";

function EachNav({ logo, name, drop, sub }: IProps) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="flex justify-start items-start hover:bg-indigo-700 hover:cursor-pointer hover:rounded-md w-full px-1 py-2 mb-2">
        <div className="flex-1 flex gap-4 py-2 px-2">
          <span className="text-lg tex-white font-medium">{logo}</span>
          <span className="text-lg tracking-wide font-PT text-white font-semibold">
            {" "}
            {name}{" "}
          </span>
        </div>
        {drop && (
          <i
            onClick={() => toggle()}
            className="text-sm text-white  py-2 px-2 justify-end items-center text-center fa fa-angle-down"
            aria-hidden="true"
          ></i>
        )}
      </div>
      {open &&
        sub &&
        sub.length > 0 &&
        sub.map((link, index) => (
          <span
            className="text-left block text-white mb-2 flex items-start text-md font-Poppins justify-start mx-auto hover:cursor-pointer rounded-md  hover:bg-indigo-700 w-100 px-3 py-2"
            key={index}
          >
            {link}
          </span>
        ))}
    </>
  );
}

export default EachNav;
