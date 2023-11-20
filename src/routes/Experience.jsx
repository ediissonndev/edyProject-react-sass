// Components
import NavBar from "../components/Navbar";

// Images
import imgDog from "../imgs/dog.png";

const Experience = () => {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <section id="experience" className="container experience">
          <h2 className="title-one">Experience</h2>
          <div className="service-cont">
            <div className="service-ind">
              <img src={imgDog} alt="" />
              <h3>Project 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, neque.
              </p>
            </div>
            <div className="service-ind">
              <img src={imgDog} alt="" />
              <h3>Project 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, neque.
              </p>
            </div>
            <div className="service-ind">
              <img src={imgDog} alt="" />
              <h3>Project 3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, neque.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Experience;
