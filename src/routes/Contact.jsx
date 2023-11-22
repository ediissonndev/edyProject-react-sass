// Components
import NavBar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <NavBar></NavBar>
      <footer>
      <div className="form-contact">
          <form action="">
            <label htmlFor="fname">First Name:</label>
            <input type="text" name="fname" id="fname" />
            <p>Your first name is invalid!</p>
            <label htmlFor="lname">Last Name:</label>
            <input type="text" name="lname" id="lname" />
            <p>Your last name is invalid!</p>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" />
            <p>Your email is invalid!</p>
            <label htmlFor="number">Phone Number:</label>
            <input type="text" name="number" id="number" />
            <p>Your phone number is invalid!</p>
            <label htmlFor="subject">Comments:</label>
            <textarea name="subject" id="subject"></textarea>
            <p>Your comments is invalid!</p>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div id="contact" className="container-contact">
          <div className="content-contact">
            <h4>Twitter</h4>
            <p>@ediissonndev</p>
          </div>
          <div className="content-contact">
            <h4>Mail</h4>
            <p>breytmon1@gmail.com</p>
          </div>
          <div className="content-contact">
            <h4>GitHub</h4>
            <p>@ediissonndev</p>
          </div>
        </div>
        <h2 className="title-final">&copy;ediissonn</h2>
      </footer>
    </>
  );
};

export default Contact;
