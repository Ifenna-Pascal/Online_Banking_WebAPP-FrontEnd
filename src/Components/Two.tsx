import React from "react";
interface IProps {
  img?: string;
  text_p?: string;
  text_h1?: string;
  reverse?: boolean;
}

const Twos: React.FC<IProps> = ({ img, text_p, text_h1, reverse }) => {
  return (
    <div className="h-screen sm:h-17/20 flex flex-col items-center">
      <div
        className={`container flex flex-col xs:mt-4 sm:mt-8 mt-6 ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center justify-center gap-x-24`}
      >
        {/* <!-- Image --> */}
        <div className="flex flex-1 justify-center sm:mb-10  lg:mb-0">
          <img
            className="w-full h-5/6 sm:w-3/4 sm:h-3/4 md:w-full sm:mb-0 md:h-full"
            src={img}
            alt=""
          />
        </div>
        {/* <!-- Content --> */}
        <div className="flex py-1 px-3 flex-1 flex-col sm:gap-5 gap-3 items-center lg:items-start">
          <h1 className="sm:text-4xl xs:text-2xl text-4xl leading-10 text-center sm:text-left font-Poppins font-bold text-indigo-500">
            {text_h1}
          </h1>
          <p className="text-gray-500 font-Poppins text-lg xs:text-md sm:text-lg my-2 sm:my-4 text-center lg:text-left sm:w-3/4 lg:w-3/4">
            {text_p}
          </p>
          <button className="text-sm flex-1 text-center sm:mt-0 mt-4">
            Register{" "}
            <i className="text-sm text-center ml-1 text-white fas fa-angle-right"></i>
          </button>
        </div>
      </div>
      {/* <!-- Rounded Rectangle --> */}
      {/* <div className={`${reverse ? "reverse" : "no_reverse"}`}></div> */}
    </div>
  );
};

export default Twos;
