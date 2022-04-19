import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import "./project.css";
const Projects = () => {
  return (
    <div className="prro">
      <Nav />
      <div
        className="projects"
        style={{ paddingTop: "80px", justifyContent: "center" }}
      >
        <div
          className="container"
          style={{
            justifyContent: "center",
            // width: "",
            background: " rgba(0, 0, 0, 0.9)",
            padding: "40px",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Projects</h3>
          <div className="pro1">
            <h3>Photowala</h3>
            <div className="text-container">
              <p>
                Photowala is a photography portfolio website. Build it using
                ReactJs, HTML, CSS, Javascript and Bootstrap.
              </p>
              <div className="link">
                <a
                  href="https://github.com/ajaySankapal/photowala"
                  target="_blank"
                >
                  Code link
                </a>
                <br />
                <a
                  href="https://ajaysankapal.github.io/photowala/"
                  target="_blank"
                >
                  live demo
                </a>
              </div>
            </div>
          </div>
          <div className="pro2">
            <h3>productivity-desk</h3>
            <div className="text-container">
              <p>
                I made this project to collect the sites, blogs, and snippets of
                books I learn from. The front end of the site I made with React,
                Bootstrap, CSS and Material-UI, and for the backend I used
                Firebase. Added authentication also, so anyone can use this site
                for their own purpose.
              </p>
              <div className="link">
                <a
                  href="https://github.com/ajaySankapal/productivity-desk"
                  target="_blank"
                >
                  Code link
                </a>
                <br />
                <a
                  href="https://ajaysankapal.github.io/productivity-desk/"
                  target="_blank"
                >
                  live demo
                </a>
              </div>
            </div>
          </div>
          <div className="pro3">
            <h3>portfolio</h3>
            <div className="text-container">
              <p>
                Portfolio site. <br /> Tech stack : ReactJs, JavaScript, HTML,
                CSS
              </p>
              <div className="link">
                <a href="" target="_blank">
                  Code link
                </a>
                <br />
                <a href="" target="_blank">
                  live demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
