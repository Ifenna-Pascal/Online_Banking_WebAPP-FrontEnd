import React from "react";
import Features from "../Components/Features";
import Nav from "../Components/Nav";
import Twos from "../Components/Two";
import img1 from "../Util/herosvg.svg";

function Home() {
  return (
    <>
      <div
        className="sm:h-3/4 h-screen flex flex-col"
        style={
          {
            // clipPath: "polygon(0 0, 100% 0, 100% 70%, 20% 75%, 0 90% )",
          }
        }
      >
        <Nav />
        <Twos
          img={img1}
          text_h1="Seamless Transactions For Any Business Worldwie"
          reverse={true}
          text_p="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </div>
      <Features />
    </>
  );
}

export default Home;
