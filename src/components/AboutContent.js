import React from "react";
import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import MePic from "../assets/me4.png";

const AboutContent = () => {
  return (
    <div className="about">
      <img src={MePic} alt="me pic"></img>
      <h1>I'm Brian </h1>
      <p>
        Your friendly neighborhood Web Developer. There will be more words here
        at some point I assume but right now that's all i have for you. Feel
        free to hit the contact button below and fill out the form... the form
        doesn't work right now but it's the thought that counts!{" "}
      </p>
      <Link to="/contact">
        <button className="btn"> Contact Me</button>
      </Link>
    </div>
  );
};

export default AboutContent;
