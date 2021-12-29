import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="h-[calc(100vh_-_3rem)] bg-red-300 sm:h-1/2 container items-center justify-center  flex flex-col sm:flex-row  sm:my-5 my-32">
      <div>
        <h1 className="text-xl">Next Generation Digital Banking</h1>
        <p>
          {" "}
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took.
        </p>
        <button>Register Now</button>
      </div>
      <div className="hidden"></div>
    </section>
  );
};

export default Hero;
