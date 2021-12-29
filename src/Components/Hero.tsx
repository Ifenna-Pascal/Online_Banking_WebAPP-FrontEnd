import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="h-[calc(100vh_-_3rem)] sm:h-1/2 container items-center  flex flex-col sm:flex-row  sm:my-5 my-32">
      <div>
        <h1 className="text-xl">Next Generation Digital Banking</h1>
        <p>
          {" "}
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in
        </p>
        <button>Register Now</button>
      </div>
      <div className="hidden"></div>
    </section>
  );
};

export default Hero;
