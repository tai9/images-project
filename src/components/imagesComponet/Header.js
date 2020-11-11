import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import firebase from "../../config/firebase";
import AppContext from "../../store/AppContext";

export default function Header() {
  const history = useHistory();

  const [isLoggedIn] = useContext(AppContext);

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        history.replace("/login");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <nav className="py-5 bg-gray-900 text-white flex justify-between">
      <ul className="flex justify-between px-10">
        <li className="mr-5">
          <NavLink activeClassName="underline" exact to="/">
            Home
          </NavLink>
        </li>
        <li className="mr-5">
          <NavLink to="/gallery" activeClassName="underline" exact>
            Gallery
          </NavLink>
        </li>
        <li className="mr-5">
          <NavLink to="/tensorflow" activeClassName="underline" exact>
            Tensorflow
          </NavLink>
        </li>
      </ul>
      <ul className="flex justify-between px-10">
        <li>
          {isLoggedIn ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <NavLink to="/login" activeClassName="underline" exact>
              Login
            </NavLink>
          )}
        </li>
        <li className="ml-5">
          {!isLoggedIn && (
            <NavLink to="/signup" activeClassName="underline" exact>
              Signup
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}
