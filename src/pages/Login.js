import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../config/firebase";

export default function Login() {
  const [isLoading, setisLoading] = useState(false);
  const [setIsLoggedIn] = useState(false);
  const [errors, setErrors] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });

  const history = useHistory();

  function handleSubmit(e) {
    if (isLoading) return;
    console.log(<i className="fas fa-circle-notch fa-spin"></i>);
    setisLoading(true);
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        // setIsLoggedIn(true);
        history.replace("/");
        setisLoading(false);
        setErrors("");
        setisLoading(false);
      })
      .catch((e) => {
        setIsLoggedIn(false);
        setErrors(e.message);
        setisLoading(false);
      });
  }
  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // if (isLoggedIn) return <Redirect to="/" />;

  return (
    <div className="flex h-screen bg-gray-200">
      <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-700">
        <form className="m-5 w-10/12" onSubmit={handleSubmit}>
          {errors !== "" && <p>{errors}</p>}
          <h1 className="w-full text-4xl tracking-widest text-center my-6 ">
            Login
          </h1>
          <div className="w-full my-6">
            <input
              className="w-full p-2 rounded shadow text-black"
              type="email"
              placeholder="Email or Username"
              name="email"
              value={form.email}
              onChange={handleInput}
            />
          </div>
          <div className="w-full my-6">
            <input
              className="w-full p-2 rounded shadow text-black"
              type="password"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleInput}
            />
          </div>
          <div className="w-full my-10">
            <button
              className="w-full p-2 rounded shadow bg-gradient-to-tr from-yellow-600 to-yellow-400 text-black"
              type="submit"
            >
              {isLoading ? <i className="fas fa-circle-notch"></i> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
