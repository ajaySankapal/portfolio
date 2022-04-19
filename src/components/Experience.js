import React from "react";
import "./experience.css";
import Nav from "./Nav";
import { BsFillCircleFill } from "react-icons/bs";
import Footer from "./Footer";

const Experience = () => {
  return (
    <div className="expp">
      <Nav />
      <div
        className="container"
        style={{
          paddingTop: "80px",
          background: "",
          color: "#fff",
          paddingBottom: "40px",
        }}
      >
        <div className="exp-container">
          <h3 style={{ textAlign: "center" }}>Experience</h3>
          <div className="vertical"></div>
          <span>
            <BsFillCircleFill className="arr-logo" />
          </span>
          <div
            className="exp1-cont"
            style={{ marginLeft: "14%", marginTop: "6%" }}
          >
            <div className="left-content">
              <h4>March 2022 - present</h4>
            </div>
            <div className="text-content">
              <h3 className="exp-head">ReactJs Developer Intern at TTMG</h3>
              <h5 className="exp-text">
                Working on the Desktop and Mobile site of different projects by
                TTMG (Implementing the figma design to code, working with the
                team and discussing best practice to do with the projects.){" "}
                <br />
                Tech Stack: ReactJs, Javascript
              </h5>
            </div>
          </div>
          <span>
            <BsFillCircleFill className="arr2-logo" />
          </span>
          <div
            className="exp2-cont"
            style={{ marginTop: "10%", marginLeft: "14%" }}
          >
            <div className="left-content">
              <h4>July 2020 - Sept 2020</h4>
            </div>
            <div className="text-content">
              <h3 className="exp-head">Web Developer Intern at TDPVista</h3>
              <h5 className="exp-text">
                Working on the Desktop and Mobile site of different projects by
                TTMG (Implementing the figma design to code, working with the
                team and discussing best practice to do with the projects.){" "}
                <br />
                Tech Stack: ReactJs, Javascript
              </h5>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Experience;
