import React, { useState } from "react";
interface IProps {
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  phone: string;
}

function Register() {
  const [signin, setSignin] = useState(false);
  const initialState = {
    firstname: "",
    lastname: "",
    phone: "",
    password: "",
    email: "",
  };
  const [input, setinput] = useState(initialState);
  const handleChange = (e: any) => {
    setinput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: any): void => {
    e.preventDefault();
    console.log(input);
    setinput(initialState);
  };
  return (
    <div className="md:w-1/2 w-3/4 mx-auto h-screen flex flex-col justify-center">
      <h1 className="mb-4 text-left text-2xl font-semibold text-indigo-400 ">
        {signin ? "Signin Account" : "Create Account"}
      </h1>
      <form onSubmit={handleSubmit}>
        {!signin && (
          <div>
            <label className="block mb-5">
              <span className="block text-md font-medium text-gray-700">
                Firstname
              </span>
              <input
                type="text"
                onChange={handleChange}
                value={input.firstname}
                name="firstname"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-md shadow-sm placeholder-gray-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
            </label>
            <label className="block mb-5">
              <span className="block text-md font-medium text-gray-700">
                Lastname
              </span>
              <input
                type="text"
                onChange={handleChange}
                value={input.lastname}
                name="lastname"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-md shadow-sm placeholder-gray-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
            </label>
            <label className="block mb-5">
              <span className="block text-md font-medium text-gray-700">
                Phone Number
              </span>
              <input
                type="number"
                onChange={handleChange}
                value={input.phone}
                name="phone"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-md shadow-sm placeholder-gray-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
            </label>
          </div>
        )}
        <label className="block mb-5">
          <span className="block text-md font-medium text-gray-700">Email</span>
          <input
            value={input.email}
            onChange={handleChange}
            type="Email"
            name="email"
            className="peer mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-md shadow-sm placeholder-gray-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
          />
          <p className="invisible peer-invalid:visible -mb-2 text-pink-600 text-md">
            Please provide a valid email address.
          </p>
        </label>
        <label className="block mb-5">
          <span className="block text-md font-medium text-gray-700">
            Password
          </span>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-md shadow-sm placeholder-gray-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
          />
        </label>

        <div className="block mb-3 font-Poppins text-gray-500">
          {signin ? (
            <span>
              Don't have an account?{" "}
              <span
                onClick={() => setSignin(false)}
                className="font-semibold cursor-pointer text-indigo-400"
              >
                Register here
              </span>
            </span>
          ) : (
            <span>
              {" "}
              Do you have an account?{" "}
              <span
                onClick={() => setSignin(true)}
                className="font-semibold cursor-pointer text-indigo-400"
              >
                Signin
              </span>{" "}
            </span>
          )}
        </div>
        <button defaultChecked={!input ? true : false} className="text-md">
          {signin ? "Login" : "Create Account"}
        </button>
      </form>
    </div>
  );
}

export default Register;
