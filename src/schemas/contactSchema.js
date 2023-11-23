import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  fname: Yup.string().required("First name is required!"),
  lname: Yup.string().required("Last name is required!"),
  email: Yup.string().email().required("Your email is required!"),
  number: Yup.string().required("Your phone number is required!"),
  comment: Yup.string().required("Your comment is required!"),
});
