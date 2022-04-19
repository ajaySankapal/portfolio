import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <h6 className="footer-txt">
        Made with
        <BsFillHeartFill
          style={{
            color: "red",
            margin: "0 5px 0 5px",
          }}
        />
        by Ajay Sankapal
      </h6>
    </div>
  );
};

export default Footer;
