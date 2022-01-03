import React from "react";
import Images from "../Util/images";
// import { Link as li } from "react-router-dom";
import img1 from "../Util/logo-bookmark-white.png";

const Nav: React.FC = () => {
  return (
    <nav className="flex justify-between md:justify-around w-full gap-x-5  px-10 xss:py-2 py-5 items-center">
      <div className="py-1 bg-red-200 sm:px-4 justify-self-start flex-initial sm:ml-8 flex-shrink-0 cursor-pointer">
        <img className="bg-cover" src={img1} />
      </div>
      <ul className="mdd:hidden flex-1 justify-self-center justify-center items-center self-center w-100% mdd:basis-3/4 md:flex">
        <li> Featues </li>
        <li> About Us </li>
        <li> Our services </li>
        <li> Contact </li>
      </ul>
      <ul className="hidden md:flex">
        <li> Login </li>
        <button>Register</button>
      </ul>
      <div className="flex md:hidden flex-1 justify-end flex-shrink-0">
        <i className="text-3xl text-gray-700 fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Nav;
