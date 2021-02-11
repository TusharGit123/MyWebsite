import React from "react";
import { Link } from "react-router-dom";

export const NavbarTwo = ({ displayNavbar, addPostButtonShow }) => {
  return (
    <>
      {displayNavbar === true ? (
        <div>
          <nav className="navbartwo navbar-expand-lg navbar-dark">
            <Link to="/reactRedux" className="navbar-brand">
              Redux Posts
            </Link>
            {addPostButtonShow === true ? (
              <Link to="/addpost">
                <button className="add-post-button">Add Posts</button>
              </Link>
            ) : (
              ""
            )}
          </nav>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
