// React
import { Formik, Form, Field, ErrorMessage } from "formik";

// Schema
import { contactSchema } from "../schemas/contactSchema";

// Components
import NavBar from "../components/Navbar";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  number: "",
  comment: "",
};

const Contact = () => {
  let onSubmit = (e) => {
    e.preventDefault();
    console.log(`Process form`);
  };

  return (
    <>
      <NavBar></NavBar>
      <footer>
        <div className="form-contact">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={contactSchema}
          >
            <Form autoComplete="off">
              <fieldset>
                <label htmlFor="fname">First Name:</label>
                <Field
                  className="field"
                  type="text"
                  name="fname"
                  id="fname"
                  autoFocus
                />
                <ErrorMessage
                  name="fname"
                  component="p"
                  className="error-message"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="lname">Last Name:</label>
                <Field className="field" type="text" name="lname" id="lname" />
                <ErrorMessage
                  name="lname"
                  component="p"
                  className="error-message"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="email">Email:</label>
                <Field className="field" type="text" name="email" id="email" />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="error-message"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="number">Phone Number:</label>
                <Field
                  className="field"
                  type="text"
                  name="number"
                  id="number"
                />
                <ErrorMessage
                  name="number"
                  component="p"
                  className="error-message"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="subject">Comments:</label>
                <Field className="field" as="textarea" name="comment" id="comment"></Field>
                <ErrorMessage
                  name="comment"
                  component="p"
                  className="error-message"
                />
              </fieldset>
              <input className="field" type="submit" value="Submit" />
            </Form>
          </Formik>
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
