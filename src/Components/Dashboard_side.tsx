import React, { useState } from "react";
import { Util } from "./sideUtil";
import EachNav from "./EachNav";
function SideNav() {
  const [show, setShow] = useState(false);
  const toggle = (): void => {
    setShow(!show);
  };
  return (
    <>
      <div
        className={`${
          show ? "flex" : "hidden"
        } bg-indigo-500 shadow-2xl h-screen transition duration-300 delay-150 shadow-md px-5 py-6 w-60 md:flex flex-col items-start text-left justify-start`}
      >
        <div className="mt-16">
          {Util.map((util, index) => (
            <EachNav
              key={index}
              name={util.name}
              logo={util.logo}
              drop={util.drop}
              sub={util.sub}
            />
          ))}
        </div>
      </div>
      <div className="flex-start md:hidden" onClick={toggle}>
        {show ? (
          <i className="text-3xl text-indigo-400 fas fa-times"></i>
        ) : (
          <i className="text-3xl text-indigo-400 fas fa-bars"></i>
        )}
      </div>
    </>
  );
}

export default SideNav;
