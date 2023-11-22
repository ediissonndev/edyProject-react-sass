// React
import { Link } from "react-router-dom";

// Icons
import { BsFillRocketFill } from "react-icons/bs";
import { BsJustify } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav>
      <div className="title">
        <BsFillRocketFill className="airPlane"></BsFillRocketFill>
        <h1 href="../routes/Home.jsx">Edy</h1>
      </div>
      <div className="buttons-all">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="menu-icon">
            <BsJustify className="icon" />
          </i>
        </label>
        <ul>
          <Link className="buttons" to={"/"}>
            Home
          </Link>
          <Link className="buttons" to={"/about-me"}>
            About
          </Link>
          <Link className="buttons" to={"/education"}>
            Education
          </Link>
          <Link className="buttons" to={"/experience"}>
            Experience
          </Link>
          <Link className="buttons" to={"/contact"}>
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
