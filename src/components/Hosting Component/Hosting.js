import React from "react";
import Footer from "../Footer Component/Footer";
import { Link } from "react-router-dom";
import "./Hosting.css";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import TextError from "../../utils/TextError";

function Hosting() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    selectOption: "",
    password: "",
    confirmPassword: "",
    checked: false,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required!"),
    lastName: Yup.string().required("Required!"),
    email: Yup.string().email("Invalid Email Format!").required("Required!"),
    selectOption: Yup.string().required("Required!"),
    password: Yup.string().required("Required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords Must Match!")
      .required("Required!"),
    checked: Yup.bool().required("Required!"),
  });

  onsubmit = (values) => {
    console.log("Form Data", values);
  };

  return (
    <>
      <main className="signup-page">
        <h1 className="signup-title">Awesome! Let's dive right in!</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onsubmit}
        >
          {(formik) => (
            <Form className="signup-form">
              <div className="form-control">
                <label htmlFor="selectOption">Title</label>
                <Field as="select" id="title" name="selectOption">
                  <option key="Select an option" value="">
                    Select an option
                  </option>
                  <option key="mr" value="mr">
                    Mr.
                  </option>
                  <option key="mrs" value="mrs">
                    Ms.
                  </option>
                </Field>
                <ErrorMessage name="selectOption" component={TextError} />
              </div>
              <div className="form-control">
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" id="firstName" type="text" />
                <ErrorMessage name="firstName" component={TextError} />
              </div>
              <div className="form-control">
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" id="lastName" type="text" />
                <ErrorMessage name="lastName" component={TextError} />
              </div>
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <Field name="email" id="email" type="email" />
                <ErrorMessage name="email" component={TextError} />
              </div>
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <Field name="password" id="password" type="password" />
                <ErrorMessage name="password" component={TextError} />
              </div>
              <div className="form-control">
                <label htmlFor="confirmPassword">confirmPassword</label>
                <Field
                  name="confirmPassword"
                  id="confirmPassword"
                  type="password"
                />
                <ErrorMessage name="confirmPassword" component={TextError} />
              </div>
              <div className="form-control">
                <div class="signup-form__checkbox">
                  <Field type="checkbox" name="checked" id="checked" />
                  <label htmlFor="checked">
                    Agree to
                    <Link to="#">Terms &amp; Conditions</Link>
                  </label>
                  <ErrorMessage name="checked" component={TextError} />
                </div>
              </div>
              <button type="submit" disabled={!formik.isValid}>
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
      </main>
      <Footer />
    </>
  );
}

export default Hosting;
