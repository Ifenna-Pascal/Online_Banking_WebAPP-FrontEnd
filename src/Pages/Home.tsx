import React from "react";
import Features from "../Components/Features";
import Nav from "../Components/Nav";
import Twos from "../Components/Two";
import img1 from "../Util/herosvg.svg";

function Home() {
  return (
    <>
      <Nav />
      <Twos
        img={img1}
        text_h1="Seamless Transactions For Any Business Worldwie"
        reverse={true}
        text_p="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <Features />
    </>
  );
}

export default Home;
