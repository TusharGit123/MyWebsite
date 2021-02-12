import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link to="/" className="navbar-brand">
          My Website
        </Link>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <Link to="/quiz" className="nav-link">
              React-Quiz
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/reactRedux" className="nav-link">
              React-Redux
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/calculator" className="nav-link">
              Calculator
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
