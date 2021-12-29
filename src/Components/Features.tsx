import React from "react";
interface IFeature {
  color: string;
  logo: React.ReactNode;
  title: string;
  body: string;
}

const OneFature: React.FC<IFeature> = ({ color, logo, title, body }) => {
  return (
    <div className="flex-1 sm:basis-3/12 sm:mr-4 shadow-lg  rounded-3xl sm:rounded-none w-full  mx-auto sm:m-0 flex flex-col sm:gap-3 xss:gap-5 xs:gap-4 gap-2 py-6 ">
      <div
        className={`bg-indigo-600 shadow-xl shadow-purple-300 w-16 mx-auto p-3 rounded-lg`}
      >
        {logo}
      </div>
      <span className="font-semibold text-lg text-center text-indigo-600 text-center">
        {title}
      </span>
      <span className="text-gray-400 font-Poppins px-6 text-lg text-center">
        {body}
      </span>
    </div>
  );
};

function Features() {
  return (
    <div className="container">
      <span>FEATURES</span>
      <div>
        <h2>Features We Provide</h2>
        <p>
          Powerful metrics to btter understand ur business are right on your
          fingertips once you start working with them
        </p>
      </div>
      <div className="flex flex-col mt-10 sm:flex-row xs:gap-12 gap-12">
        <OneFature
          logo={
            <i
              className="text-white text-3xl fa fa-home"
              aria-hidden="true"
            ></i>
          }
          color="purple"
          title="Dashboard"
          body="Powerful metrics to btter understand ur business"
        />
        <OneFature
          logo={
            <i
              className="text-white text-3xl fa fa-home text-center"
              aria-hidden="true"
            ></i>
          }
          color="purple"
          title="Dashboard"
          body="Powerful metrics to btter understand ur business"
        />
        <OneFature
          logo={
            <i
              className="text-white   text-3xl fa fa-home"
              aria-hidden="true"
            ></i>
          }
          color="purple"
          title="Dashboard"
          body="Powerful metrics to btter understand ur business"
        />
        <OneFature
          logo={
            <i
              className="text-white text-lg  text-3xl fa fa-home"
              aria-hidden="true"
            ></i>
          }
          color="purple"
          title="Dashboard"
          body="Powerful metrics to btter understand ur business"
        />
      </div>
    </div>
  );
}

export default Features;
