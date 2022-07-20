import "./HeroStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import HomeImg from "../assets/creativity.jpg";
import MePic from "../assets/me2.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="home-hero-pic">
        <img className="home-img" src={HomeImg} alt="coffee pic" />
      </div>
      <div className="content">
        <img src={MePic} />
        <h2>Hi! I'm Brian</h2>
        <h1>Full Stack Developer</h1>
        <div>
          <Link to="/projects" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn-light">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
