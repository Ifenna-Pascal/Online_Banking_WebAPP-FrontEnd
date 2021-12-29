import React from "react";
import Images from "../Util/images";
// import { Link as li } from "react-router-dom";
import img1 from "../Util/logo-bookmark-white.png";

const Nav: React.FC = () => {
  return (
    <nav className="flex justify-between  px-10 py-5 items-center">
      <div className="py-1 sm:px-4 justify-self-start basis-3/12 sm:ml-8 flex-shrink-0 cursor-pointer">
        <img className="bg-cover" src={img1} />
      </div>
      <ul className="hidden md:flex flex-1 justify-center mdd:basis-3/4 basis-5/12">
        <li> Featues </li>
        <li> About Us </li>
        <li> Our services </li>
        <li> Contact </li>
      </ul>
      <ul className="hidden md:flex basis-2/12 ml-4 flex-1 mdd:basis-1/12 items-center justify-center">
        <li className="mx-12"> Login </li>
        <button>Register</button>
      </ul>
      <div className="flex md:hidden flex-1 justify-end flex-shrink-0">
        <i className="text-3xl text-gray-700 fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Nav;
