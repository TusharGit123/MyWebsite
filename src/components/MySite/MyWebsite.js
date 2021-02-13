import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import myImage from "../../assets/images/pic2.jpeg";
import myImageTwo from "../../assets/images/pic3.JPG";
import serviceBackground from "../../assets/images/home-background3.jpg";
// import portfolio1 from "../../assets/images/background6.jpg";
// import portfolio2 from "../../assets/images/home-background2.jpg";
// import portfolio3 from "../../assets/images/home-background.jpg";
import websitedev from "../../assets/images/icons/websitedev.svg";
import appdev from "../../assets/images/icons/appdev.svg";
import mobiledev from "../../assets/images/icons/mobiledev.svg";
import Download from "../../assets/images/icons/download.svg";
import ResumePdf from "../../assets/images/Resume1.pdf";
import quiz from "../../assets/images/Quizapp.jpg";
import reduxposts from "../../assets/images/react-redux.jpg";
import calculator from "../../assets/images/calculator.jpg";
// import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import emailjs from "emailjs-com";

var style = {
  header: {
    backgroundImage: `url(${serviceBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  content: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "30px",
  },
};

const HeaderSection = () => {
  const [clicked, setClick] = useState(false);

  return (
    <nav className="main-navbar">
      <div className="logo">
        {/* <img src={logo} alt="logo" style={{ width: "80px" }} /> */}
        <h3 style={{ color: "var(--clr-accent)" }}>Logo</h3>
      </div>

      <div className="menu-icon" onClick={(e) => setClick(!clicked)}>
        <i className={clicked ? "fa fa-times" : "fa fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <a href="#home" className="nav-link">
            Home
          </a>
        </li>

        <li className="nav-item">
          <a href="#about" className="nav-link">
            About Me
          </a>
        </li>

        <li className="nav-item">
          <a href="#service" className="nav-link">
            Services
          </a>
        </li>

        <li className="nav-item">
          <a href="#miniproject" className="nav-link">
            Mini Projects
          </a>
        </li>

        {/* <li className="nav-item">
          <a href="#work" className="nav-link">
            My Work
          </a>
        </li> */}

        <li className="nav-item">
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

const IntroSection = () => {
  return (
    <>
      <section id="home">
        <div className="intro">
          <h1 className="section-title section-title-intro">
            Hi, i am
            <br />
            <strong>Tushar Rathod</strong>
          </h1>
          <Bounce right>
            <p className="section-subtitle section-subtitle-intro">
              WEB DEVELOPER
            </p>
          </Bounce>
          <Bounce left>
            <img src={myImage} alt="my_img" className="intro-img" />
          </Bounce>
        </div>
      </section>
    </>
  );
};

const ServiceSection = () => {
  return (
    <>
      <div id="service" className="my-services" style={style.header}>
        <div style={style.content}>
          <h2 className="section-title section-title-services ">What I do</h2>
          <div className="services">
            <div className="service">
              <img src={websitedev} alt="icon" className="service-icon" />
              <h3>Website Development</h3>
              <p>
                I will build your highly functional website using the latest
                coding languages including HTML, CSS, javaScript and Frameworks
                like Reactjs and more. A responsive website is my first
                priority.
              </p>
            </div>
            <div className="service">
              <img src={appdev} alt="icon" className="service-icon" />
              <h3>Web Application Development</h3>
              <p>
                Creative Front End Developer providing high-impact web solutions
                for organizations.
                {/* Skilled in developing and testing multiple web-based
                applications incorporating a range of technologies. */}
              </p>
            </div>
            <div className="service">
              <img src={mobiledev} alt="icon" className="service-icon" />
              <h3>Mobile Application Development</h3>
              <p>
                I will develope your highly functional mobile application using
                react native framework.
              </p>
            </div>
          </div>
          <a href="#miniproject" className="btn main-button">
            My Work
          </a>
        </div>
      </div>
    </>
  );
};

const AboutSection = () => {
  return (
    <>
      <section className="about-me" id="about">
        <h2 className="section-title section-title-about">Who I am</h2>
        <Bounce left>
          <p className="section-subtitle section-subtitle-about">
            I am a Web Developer
          </p>
        </Bounce>
        <div className="about-me-body">
          <p>
            Hi, My name is Tushar Rathod. I am a
            <span style={{ color: "var(--clr-accent" }}> Web Developer </span>
            and i have an experience of
            <span style={{ color: "var(--clr-accent" }}> 1.6 years </span>in
            React Js and React Native. I specialises at building pixel perfect
            reusable components with effecient coding practices.
          </p>
          <p>
            Implemented websites, web application and landing pages from concept
            through deployment. Standardized all output with a new, responsive,
            mobile first approach and strategy.
          </p>
        </div>
        <Bounce right>
          <img src={myImageTwo} alt="my_img" className="about-me-img" />
        </Bounce>
      </section>
    </>
  );
};

const MiniProjectSection = () => {
  return (
    <>
      <section className="my-work" id="miniproject">
        <h2 className="section-title section-title-work">Mini Projects</h2>
        {/* <p className="section-subtitle section-subtitle-work">
          A selection of my range of work
        </p> */}

        <div className="portfolio">
          <Link to="/quiz" className="portfolio-item">
            <img src={quiz} alt="my_img" className="portfolio-img" />
          </Link>
          <Link to="/reactRedux" className="portfolio-item">
            <img src={reduxposts} alt="my_img" className="portfolio-img" />
          </Link>
          <Link to="/calculator" className="portfolio-item">
            <img src={calculator} alt="my_img" className="portfolio-img" />
          </Link>
        </div>
      </section>
    </>
  );
};

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    // const formData = {
    //   name,
    //   email,
    //   message,
    // };

    // console.log(formData);
    // clearing the values

    emailjs
      .sendForm(
        "service_kat01jh",
        "template_46izhxc",
        e.target,
        "user_zjH2G0nDBAtc83Sp4xEDB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <section className="contact" id="contact">
        <div className="sub-contact">
          <h2 className="sub-contact-title">Get in Touch</h2>
          <form onSubmit={onSubmit} id="contactform">
            <div className="form-group">
              <input
                id="name"
                name="name"
                type="text"
                className="form-control custom-input"
                placeholder="Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                id="email"
                name="email"
                type="email"
                className="form-control custom-input"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                type="text"
                className="form-control custom-textarea"
                rows="3"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn main-button"
              // onClick={onSubmit}
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

const FooterSection = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-contact">
          <Fade left>
            <div className="cont">
              <h5>Email</h5>
              <h6>tusharrathod1002@gmail.com</h6>
            </div>
            <div className="cont">
              <h5>Location</h5>
              <h6>Pune, India</h6>
            </div>
          </Fade>
          <Fade right>
            <div className="cont">
              <h5>Phone</h5>
              <h6>+919975588592</h6>
            </div>
            <a
              href={ResumePdf}
              className="cont cv"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={Download}
                alt="download_cv"
                style={{ width: "50px", marginRight: "5px" }}
              />
              <h5>Download CV</h5>
            </a>
          </Fade>
        </div>

        <Fade bottom>
          <ul className="social-list">
            <li className="social-list-item">
              <a
                href="https://www.instagram.com/tushar_rathod103/"
                className="social-list-link"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-list-item">
              <a
                href="https://www.facebook.com/tushar.rathod.7927"
                className="social-list-link"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-list-item">
              <a
                href="https://github.com/TusharGit123"
                className="social-list-link"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-list-item">
              <a
                href="https://gitlab.com/tushar12345"
                className="social-list-link"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-gitlab" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </Fade>
        <Fade bottom>
          <h6 style={{ fontSize: "12px", paddingTop: "30px" }}>
            © 2021 <span style={{ color: "var(--clr-accent)" }}>Tushar</span>.
            All Rights Reserved.
          </h6>
        </Fade>
      </footer>
    </>
  );
};

/***********************
    Main Render
*********************/
const MyWebsite = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Tushar Rathod Web Developer</title>
      </Helmet>

      {HeaderSection()}
      {IntroSection()}
      {ServiceSection()}
      {AboutSection()}
      {MiniProjectSection()}
      {ContactSection()}
      {FooterSection()}
    </Fragment>
  );
};

export default MyWebsite;
