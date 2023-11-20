// Components
import NavBar from "../components/Navbar";

// Images
import imgDog from "../imgs/dog.png";

const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <header>
        <section id="home" className="home">
          <div className="text-presentation">
            <h1>Hi,</h1> I'm Edy
            <h2>Web Developer.</h2>
          </div>
            <img className="dog" src={imgDog} />
        </section>
      </header>
    </>
  );
};

export default Home;
