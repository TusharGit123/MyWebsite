import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { NavbarTwo } from "../navbar/NavbarTwo";
import { useSelector } from "react-redux";

import PostCard from "./PostCard";
import { Navbar } from "../navbar/Navbar";

const ReactReduxHome = () => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <Fragment>
      <Helmet>
        <title>React-Redux Home</title>
      </Helmet>
      <Navbar />
      <NavbarTwo displayNavbar={true} addPostButtonShow={true} />

      <div className="main-reactConatiner container">
        <div className="row">
          {posts.map((postItem) => {
            return <PostCard postItem={postItem} />;
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default ReactReduxHome;
