import React from "react";
import Features from "../Components/Features";
import Nav from "../Components/Nav";
import Side_by_side from "../Components/Side_by_side";
import Twos from "../Components/Two";
import img1 from "../Util/herosvg.svg";
import img2 from "../Util/img3.svg";
import img3 from "../Util/img4.svg";

function Home() {
  return (
    <>
      <Nav />
      <Twos
        img={img1}
        text_h1="Seamless Transactions For Any Business Worldwie"
        reverse={true}
        text_p="It was popularised in the 1960s and more recently with desktop publishing software like Aldus PageMaker Ipsum."
      />
      <Features />
      <Side_by_side
        img={img3}
        btn_text="Create Account"
        text_h1="Banking for you and others"
        text_p="It was popularised in the 1960s and more recently with desktop publishing software like Aldus PageMaker Ipsu"
      />
      <Side_by_side
        img={img2}
        reverse={true}
        btn_text="Download Now"
        text_h1="Download our Android app on Playstore"
        text_p="It was popularised in the 1960s and more recently with desktop publishing software like Aldus PageMaker Ipsu"
      />
    </>
  );
}

export default Home;
