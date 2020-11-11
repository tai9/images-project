import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import firebase from "../config/firebase";
import * as Yup from "yup";

export default function Signup() {
  const history = useHistory();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(value, formikBag) => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(value.email, value.password)
          .then((res) => {
            history.replace("/");
          })
          .catch((e) => {
            console.log(e);
            formikBag.setFieldError("email", e.message);
          });
      }}
      validationSchema={Yup.object({
        email: Yup.string().required("Email is required").email(),
        password: Yup.string().required("Password is required").min(6),
      })}
    >
      {(formik) => (
        <div className="flex h-screen bg-gray-200">
          <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-700">
            <Form className="m-5 w-10/12" onSubmit={formik.handleSubmit}>
              <h1 className="w-full text-4xl tracking-widest text-center my-6 ">
                Signup
              </h1>
              <div className="w-full my-6">
                <Field
                  className="w-full p-2 rounded shadow text-black"
                  placeholder="Email or Username"
                  name="email"
                  type="email"
                />
                <ErrorMessage name="email" />
              </div>
              <div className="w-full my-6">
                <Field
                  className="w-full p-2 rounded shadow text-black"
                  placeholder="Password"
                  name="password"
                  type="password"
                />

                <ErrorMessage name="password" />
              </div>
              <div className="w-full my-10">
                <button
                  className="w-full p-2 rounded shadow bg-gradient-to-tr from-yellow-600 to-yellow-400 text-black"
                  type="submit"
                >
                  {/* {isLoading ? <i className="fas fa-circle-notch"></i> : "Signup"} */}
                  Sign up
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}
