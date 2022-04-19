import React, { useEffect } from "react";
import Nav from "./Nav";
import "./about.css";
import pic from "../imgs/pr_pic1.jpg";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { DiGit } from "react-icons/di";
import { MdPlayArrow } from "react-icons/md";
import { BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import Footer from "./Footer";

const About = ({ logo, setLogo }) => {
  return (
    <div className="about">
      <Nav />
      <div
        className="container"
        style={{
          paddingTop: "80px",

          jusrifyContent: "center",
        }}
      >
        <div
          className="row about-me-container"
          style={{
            justifyContent: "center",

            marginLeft: "40px",
          }}
        >
          <div
            className="col-10 col-md-3"
            style={{
              justifyContent: "right",
              textAlign: "left",
            }}
          >
            {" "}
            <div className="img-container" style={{}}>
              <img src={pic} className="avatar" alt="" />
            </div>
          </div>
          <div className="col-10 col-md-7" style={{ textAlign: "left" }}>
            <div className="text-container">
              <h3 style={{ margin: "2px 0 20px 0" }}>About me</h3>
              <p className="abt-text">
                Hey folks! This is Ajay Sankapal, a 24 years old young Web
                developer and a little bit of photographer living in Madhya
                Pradesh, India. I am an Electronics and Communication
                Engineering undergrad from University Institute Of Technology
                RGPV Bhopal Madhya Pradesh. I have around 1.5 years of hands-on
                experience in efficiently coding websites and applications using
                modern HTML, CSS and JavaScript in React Library. Have a look at
                this page or just connect with me on{" "}
                <a href="" style={{ color: " #f59b42" }}>
                  LinkedIn
                </a>{" "}
                . I am always excited to do work related to Web Development so
                just ping me or send your message from Contact page.{" "}
              </p>
              <div className="links-cont">
                <span>
                  <MdPlayArrow style={{ color: " #f59b42" }} />
                  Website
                </span>{" "}
                <br />
                <span>
                  <MdPlayArrow style={{ color: " #f59b42" }} />
                  Phone: +91-9340914406{" "}
                </span>{" "}
                <br />
                <span>
                  <MdPlayArrow style={{ color: " #f59b42" }} />
                  Email: ajaysankapal638@gmail.com
                </span>
                <br />
                <span>
                  <MdPlayArrow style={{ color: " #f59b42" }} />
                  Location: Bhopal Madhya Pradesh, India.{" "}
                </span>
              </div>
            </div>
          </div>
          {/* social container */}
          <div className="social-links">
            <a href="https://github.com/ajaySankapal" target="_blank">
              <BsGithub />
            </a>
            <a href=" https://www.linkedin.com/in/ajaysankapal" target="_blank">
              <IoLogoLinkedin />
            </a>

            <a href="https://twitter.com/ajay_sankapal?s=09" target="_blank">
              <BsTwitter />
            </a>
          </div>
          {/* skills container */}
          <div className="skills-container" style={{ textAlign: "center" }}>
            <h4 className="skill-head-t">Skills</h4>
            <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
              <li className="skill1">
                <IoLogoJavascript className="js-logo" />
                <p>JavaScript</p>
              </li>
              <li className="skill3">
                <FaReact className="react-logo" />
                <p>React</p>
              </li>
              <li className="skill2">
                <FaHtml5 className="html-logo" />
                <p>HTML5</p>
              </li>
              <li>
                <SiCss3 className="css-logo" />
                <p>CSS3</p>
              </li>
              <li>
                <DiGit className="git-logo" />
                <p>Git</p>
              </li>
              <li>
                <svg
                  height="65"
                  viewBox="-11.9 -2 1003.9 995.6"
                  width="70"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m12.1 353.9s-24-17.3 4.8-40.4l67.1-60s19.2-20.2 39.5-2.6l619.2 468.8v224.8s-.3 35.3-45.6 31.4z"
                    fill="#2489ca"
                  />
                  <path
                    d="m171.7 498.8-159.6 145.1s-16.4 12.2 0 34l74.1 67.4s17.6 18.9 43.6-2.6l169.2-128.3z"
                    fill="#1070b3"
                  />
                  <path
                    d="m451.9 500 292.7-223.5-1.9-223.6s-12.5-48.8-54.2-23.4l-389.5 354.5z"
                    fill="#0877b9"
                  />
                  <path
                    d="m697.1 976.2c17 17.4 37.6 11.7 37.6 11.7l228.1-112.4c29.2-19.9 25.1-44.6 25.1-44.6v-671.2c0-29.5-30.2-39.7-30.2-39.7l-197.7-95.3c-43.2-26.7-71.5 4.8-71.5 4.8s36.4-26.2 54.2 23.4v887.5c0 6.1-1.3 12.1-3.9 17.5-5.2 10.5-16.5 20.3-43.6 16.2z"
                    fill="#3c99d4"
                  />
                </svg>
                <p>VS Code</p>
              </li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="git-hub-char" style={{ textAlign: "center" }}>
            <h4>Day's I Code</h4>
            <img src="https://ghchart.rshah.org/ajaySankapal" alt="" />
            <h5>Last Year - 123 Contributions </h5>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
