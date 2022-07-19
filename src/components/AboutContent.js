import React from "react";
import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import MePic from "../assets/me4.png"

const AboutContent = () => {
  return (
    <div className="about">
     <img src={MePic} alt="me pic"></img>
      <h1>About</h1>
      <p>about me and such</p>
      <Link to="/contact">
        <button className="btn"> Contact Me</button>
      </Link>
    </div>
  );
};

export default AboutContent;
