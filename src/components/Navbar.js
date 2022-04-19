import React, { useEffect, useState } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = ({ logo, setLogo }) => {
  useEffect(() => {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250,
    });
  });

  //navbar active link background

  return (
    <div style={{ marginTop: "70px" }}>
      {" "}
      <nav style={{ background: "none", boxShadow: "none" }}>
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo" style={{ display: "none" }}>
            Ajay Sankapal
          </a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul class="left hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="">Resume</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
          </ul>
        </div>
      </nav>
      <ul class="sidenav" id="mobile-demo">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href="" style={{ color: "white" }} target="_blank">
            Resume
          </a>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
