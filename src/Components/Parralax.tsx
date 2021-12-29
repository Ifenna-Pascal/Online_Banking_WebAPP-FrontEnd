import React from "react";

function Parralax() {
  return (
    <div>
      <div className="from-gray-400 via-gray-500 to-gray-700 h-screen">
        <header className="flex from-gray-900 via-gray-500 to-gray-700 items-center justify-center h-screen bg-fixed bg-center mix-blend-darken bg-cover bg-hero">
          <div className="px-5 py-8 text-2xl text-white bg-gray-200 rounded-lg bg-opacity-50 rounded-xl">
            <h1 className="text-center text-4xl font-Poppins text-gray-700  font-bold">
              Contact Us
            </h1>
          </div>
        </header>
      </div>
      <div className="max-w-full bg-indigo-600 flex items-center justify-center flex-col">
        <form className="w-3/4 mx-auto flex flex-col gap-7 py-24">
          <input
            type="text"
            placeholder="Enter you name"
            className="block w-full px-3 py-4 bg-white border border-gray-300 rounded-md text-md text-gray-600 shadow-sm focus:outline-none placeholder-gray-600"
          />
          <input
            type="Email"
            placeholder="Enter your email"
            className="block w-full px-3 py-4 bg-white border border-gray-300 rounded-md text-md text-gray-600 shadow-sm focus:outline-none placeholder-gray-600"
          />
          <textarea
            name=""
            id=""
            placeholder="You can talk to us..."
            className="block w-full px-3 py-4 h-32 bg-white border border-gray-300 rounded-md text-md text-gray-600 shadow-sm focus:outline-none placeholder-gray-600"
          />
          <button>Contact Us</button>
        </form>
      </div>
    </div>
  );
}

export default Parralax;
