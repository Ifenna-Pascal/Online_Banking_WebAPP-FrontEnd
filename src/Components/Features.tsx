import React from "react";
import { overrideTailwindClasses } from "tailwind-override";
interface IFeature {
  className: string;
  logo: React.ReactNode;
  title: string;
  body: string;
}

const OneFature: React.FC<IFeature> = ({ className, logo, title, body }) => {
  return (
    <div
      className={overrideTailwindClasses(
        `flex-1 sm:basis-3/12 sm:mr-4 shadow-lg sm:rounded-none w-17/20  mx-auto sm:m-0 mb-6 xs:mb-12 sm:mb-0 flex flex-col sm:gap-3 xss:gap-5 xs:gap-4 gap-2 py-6`
      )}
    >
      <div
        className={overrideTailwindClasses(
          `shadow-xl shadow-purple-300 xs:mb-3 flex items-center justify-center w-16 mx-auto p-3 rounded-lg ${className}`
        )}
      >
        {logo}
      </div>
      <span
        className={overrideTailwindClasses(
          `font-semibold text-lg text-center xs:mb-2 text-indigo-400 text-center`
        )}
      >
        {title}
      </span>
      <span className="text-gray-400 font-Poppins xs:mb-1 px-6 text-lg text-center">
        {body}
      </span>
    </div>
  );
};

function Features() {
  return (
    <div className="container mx-auto sm:mb-32 mb-12">
      <h1 className="text-center text-4xl mb-4 font-Poppins text-indigo-500  font-bold">
        Features
      </h1>{" "}
      <hr className="w-32 mx-auto text-gray-500" />
      <p className="px-8 text-center py-4 text-md text-gray-500 font-Poppins">
        Powerful metrics to btter understand ur business are right on your
        fingertips once you start working with them
      </p>
      <div className="flex flex-col mt-10 sm:flex-row xs:gap-12 gap-12">
        <OneFature
          logo={
            <i
              className="text-white text-3xl fa fa-user"
              aria-hidden="true"
            ></i>
          }
          className="bg-indigo-500"
          title="User Dashboard"
          body="Powerful metrics to understand your business, users profile exists"
        />
        <OneFature
          logo={
            <i
              className="text-white text-3xl fa fa-credit-card text-center"
              aria-hidden="true"
            ></i>
          }
          className="bg-red-500"
          title="Bank Accounts"
          body="Create bank account with unique account numbers and store finance"
        />
        <OneFature
          logo={
            <i
              className="text-white text-center text-3xl fa fa-paper-plane"
              aria-hidden="true"
            ></i>
          }
          className="bg-blue-500"
          title="Bank Transactions"
          body="Perform seamless credit, debit and transfer transactions"
        />
      </div>
    </div>
  );
}

export default Features;
