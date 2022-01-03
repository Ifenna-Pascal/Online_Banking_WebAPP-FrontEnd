import React from "react";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { TProps } from "./sideUtil";

function EachTransaction({ type, day, month, amount, details }: TProps) {
  return (
    <div className="flex flex-1 py-4">
      <div
        className={`flex w-12 justify-center h-12 justify-center items-center text-center rounded-full ${
          type === "debit" ? "border-red-400" : "border-green-500"
        } border mr-4`}
      >
        {type === "debit" ? (
          <RiArrowUpSLine className="text-red-400 text-lg " />
        ) : (
          <RiArrowDownSLine className="text-green-500 text-lg" />
        )}
      </div>
      <div className="px-2 text-center mr-12">
        <h1 className="text-2xl text-gray-500 font-Poppins font-semibold mb-3 block">
          {day}
        </h1>
        <p className="font-Poppins text-gray-400 text-lg">{month}</p>
      </div>
      <div className="mr-7">
        <h1
          className={`text-xl ${
            type === "debit" ? "text-red-400" : "text-green-500"
          } font-Poppins font-semibold mb-3 block`}
        >
          {`${type === "debit" ? "-" : "+"}` + amount}
        </h1>
        <p className="font-Poppins text-gray-400 text-lg">{details}</p>
      </div>
    </div>
  );
}

export default EachTransaction;
