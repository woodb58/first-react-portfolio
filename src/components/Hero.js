import "./HeroStyles.css";
import React from "react";
import HomeImg from "../assets/simple.jpg"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
  <div className="hero">
    <div className="hero-pic">
    <img className="home-img"
    src={HomeImg} alt="coffee pic" />
    </div>
    <div className="content">
        <p>Hi! I'm Brian</p>
        <h1>Full Stack Developer</h1>
        <div>
           <Link to="/projects" className="btn">Projects</Link> 
           <Link to="/contact" className="btn-light">Contact Me</Link> 
        </div>
    </div>
  </div>

  )
};

export default Hero;
