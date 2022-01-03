import React from "react";
import Barchart from "./BarChart";

function SideCenter() {
  return (
    <div className="w-6/10 max-h-screen shadow-md rounded-xl my-10 p-12 mx-16 flex flex-col gap-y-12">
      <div>
        <h1 className="text-3xl text-gray-600 font-Poppins font-semibold mb-3">
          Hello, Ifenna Monanu this is your Dashboard
        </h1>
        <p className="text-gray-400 font-Poppins text-lg">
          Carry out your seamless debit and credit transactions here
        </p>
      </div>
      <div className="flex justify-between flex-1 max-h-36">
        <div className="flex flex-col text-left font-Poppins rounded-l-md bg-gradient-to-r from-indigo-500 mr-3 h-full via-purple-500  to-pink-500 flex-1 py-7 pl-5 shadow-2xl justify-start items-start">
          <p className="text-white mb-3  text-lg text-center">
            Total Debit Price
          </p>
          <h2 className="text-white font-Poppins tracking-wider text-2xl font-semibold text-center">
            2,3300
          </h2>
        </div>
        <div className="flex flex-col text-left bg-gradient-to-r bg-gradient-to-r rounded-l-md from-green-400 to-blue-500 mr-3 font-Poppins flex-1  py-7 shadow-2xl justify-start items-start pl-5">
          <p className="text-white mb-3 text-center tracking-wider text-lg">
            Total Debit Price
          </p>
          <h2 className="text-white font-Poppins text-2xl tracking-wider font-semibold text-center">
            2,3300
          </h2>
        </div>
        <div className="flex flex-col text-left bg-gradient-to-r from-pink-500 font-Poppins rounded-l-md to-yellow-500 mr-3 flex-1 py-7  pl-5 shadow-2xl justify-start items-start">
          <p className="text-white mb-3 text-center text-lg">
            Total Debit Price
          </p>
          <h2 className="text-white text-2xl font-Poppins tracking-wider text-center font-semibold">
            2,3300
          </h2>
        </div>
      </div>
      <div>
        <Barchart />
      </div>
    </div>
  );
}

export default SideCenter;
