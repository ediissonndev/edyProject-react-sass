// React
//import React from "react";

// Components
import Home from "./Sections/Home";

// Icons
import { BsAirplane } from "react-icons/bs";

const NavBar = () => {
  return (
    <>
      <nav>
        <h1>
          <BsAirplane></BsAirplane> Edy
        </h1>
        <a href={Home}>Home</a>
        <a href="#">About</a>
        <a href="#">Education</a>
        <a href="#">Experience</a>
        <a href="#">Contact</a>
      </nav>
    </>
  );
};

export default NavBar;
