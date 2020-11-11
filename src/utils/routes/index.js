import React from "react";
import Gallery from "../../pages/Gallery";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Tensorflow from "../../pages/Tensorflow";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/",
    exact: true,
    component: () => <Home />,
    protected: null,
  },
  {
    path: "/login",
    exact: true,
    component: () => <Login />,
    protected: "guest",
  },
  {
    path: "/gallery",
    exact: true,
    component: () => <Gallery />,
    protected: "auth",
  },
  {
    path: "/signup",
    exact: true,
    component: () => <Signup />,
    protected: "guest",
  },
  {
    path: "/tensorflow",
    exact: true,
    component: () => <Tensorflow />,
    protected: null,
  },
];
