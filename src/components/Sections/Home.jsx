// React
//import React from "react";

// Images
import imgDog from "../../imgs/dog.png";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="text-presentation">
        <h1>Hi,</h1> I'm Edy
        <h2>Web Developer.</h2>
      </div>
      <img className="dog" src={imgDog} />
    </section>
  );
};

export default Home;
