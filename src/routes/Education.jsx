// Components
import NavBar from "../components/Navbar";

const Education = () => {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <section id="education" className="education">
          <div className="container">
            <h2 className="title-education">Education & Work</h2>
            <div className="cards">
              <div className="card">
                <img src="#" alt="" />
                <div className="content-text-card">
                  <h3>Name</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere voluptates dolorem quasi ipsum voluptatem totam.
                  </p>
                </div>
              </div>
              <div className="card">
                <img src="#" alt="" />
                <div className="content-text-card">
                  <h3>Name</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatibus dignissimos minus soluta aut fugit ipsa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Education;
