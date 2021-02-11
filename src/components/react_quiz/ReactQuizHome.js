import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";

export class ReactQuizHome extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>React-Quiz Home</title>
        </Helmet>
        <Navbar />
        <div className="main_quizContainer">
          <section>
            <i
              className="fa fa-cube fa-4x"
              aria-hidden="true"
              style={{ color: "orange", fontsize: 50 }}
            ></i>
            <h1>Quiz App</h1>

            <div className="play-button-container">
              <Link to="/quizpage">
                <button className="play-button">Play</button>
              </Link>
            </div>
            <div className="auth-container">
              <Link to="#">
                <button className="login-button">Login</button>
              </Link>
              <Link to="#">
                <button className="signup-button">Sign Up</button>
              </Link>
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}

export default ReactQuizHome;
