// React
import { Link } from "react-router-dom";

// Icons
import { BsFillRocketFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav>
      <div className="title">
        <BsFillRocketFill className="airPlane"></BsFillRocketFill>
        <h1>Edy</h1>
      </div>
      <div className="buttons-all">
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
      </div>
    </nav>
  );
};

export default NavBar;
