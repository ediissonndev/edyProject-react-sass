// Components
import NavBar from "../components/Navbar";

// Icons
import { FaGithub } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// Images
import person from "../imgs/person.png";

const AboutMe = () => {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <section id="about-me" className="container about-me">
          <h2 className="title-one">About Me</h2>
          <div className="container-about-me">
            <img src={person} alt="" className="img-about-me" />
            <div className="content-text">
              <h3>Edy</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                minus aspernatur vero, minima perspiciatis ut. Nam deleniti
                neque ut nulla libero officia reprehenderit corporis,
                consequatur sed. Doloribus, exercitationem dolore eveniet libero
                provident autem repellat culpa, pariatur esse mollitia, neque
                nesciunt incidunt laboriosam. Voluptas mollitia odit vitae natus
                officia, error maxime labore ratione ducimus quaerat! Deserunt
                laborum voluptate tempore eum voluptatibus?
              </p>
              <div className="icons-links">
                <a href="https://github.com/ediissonnProgra">
                  <FaGithub className="icon-link"></FaGithub>
                </a>
                <a href="https://codepen.io/ediissonn">
                  <FaCodepen className="icon-link"></FaCodepen>
                </a>
                <a href="https://twitter.com/ediissonnProgra">
                  <FaTwitter className="icon-link"></FaTwitter>
                </a>
                <a href="https://www.linkedin.com/in/edissonmontealegre/">
                  <FaLinkedin className="icon-link"></FaLinkedin>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutMe;
