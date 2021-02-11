import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import leftBackground from "../../assets/images/pic3.JPG";
import Background from "../../assets/images/background4.jpg";

var style = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "centre",
  backgroundSize: "cover",
  width: "100vw",
  height: "100vh",
};
export const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>React Projects</title>
      </Helmet>
      <div style={style}>
        <section className="main-header">
          <div className="row">
            <div className="col-md-4">
              <img src={leftBackground} alt="left-img" className="left-img" />
            </div>
            <div className="col-md-8 right-content">
              <p>Web Developer</p>
              <h1>Tushar Rathod</h1>
              <p>
                Hi, I am a Web Developer and i have an experience of 1.6 years
                in React Js and React Native. I specialises at building pixel
                perfect reusable components with effecient coding practices.
              </p>
              <div className="row">
                <div className="col-6">
                  <p>
                    <b>Phone:</b> 9975588592
                  </p>
                  <p>
                    <b>Email:</b> tusharrathod1002@gmail.com
                  </p>
                  <p>
                    <b>Birthday:</b> 10th March 1996
                  </p>
                </div>
                <div className="col-6">
                  <p>
                    <b>Degree:</b> Bachelors of Engineering
                  </p>
                  <p>
                    <b>Github:</b> https://github.com/TusharGit123
                  </p>
                  {/* <p>
                    <b>Birthday:</b>10th March 1996
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};
