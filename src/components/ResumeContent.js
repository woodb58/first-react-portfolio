import React from "react";
import "./ResumeContentStyles.css";
import Resume from "../assets/BrianResume.pdf";
import { SiMysql, SiSequelize, SiMongodb, SiReact } from "react-icons/si";
import {
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";

const ResumeContent = () => {
  return (
    <div className="resume-container">
      <h1>Technologies</h1>
      <div className="icons">
        <div>
          <FaGithub
            size={60}
            style={{ color: "white", marginRight: "1rem", marginLeft: "1rem" }}
          />
          <FaHtml5
            size={60}
            style={{ color: "white", marginRight: "1rem", marginLeft: "1rem" }}
          />
          <FaCss3Alt
            size={60}
            style={{ color: "white", marginRight: "1rem", marginLeft: "1rem" }}
          />
          <FaBootstrap
            size={60}
            style={{ color: "white", marginRight: "1rem", marginLeft: "1rem" }}
          />
        </div>
        <div>
          <FaJsSquare
            size={60}
            style={{ color: "white", marginRight: "1rem", marginLeft: "1rem" }}
          />
          <FaNodeJs
            size={60}
            style={{ color: "white", marginRight: "1rem", marginLeft: "1rem" }}
          />
          <SiMysql
            size={60}
            style={{ color: "white", marginRight: "1rem", marginLeft: "1rem" }}
          />
          <SiSequelize
            size={60}
            style={{ color: "white", marginRight: "1rem", marginLeft: "1rem" }}
          />
        </div>
        <div>
          <SiMongodb
            size={60}
            style={{ color: "white", marginRight: "1rem", marginLeft: "1rem" }}
          />
          <SiReact
            size={60}
            style={{ color: "white", marginRight: "1rem", marginLeft: "1rem" }}
          />
        </div>
      </div>
      <p id="view-resume">View my full resume here: </p>
      <a href={Resume} download className="btn">
        Click to download
      </a>
    </div>
  );
};

export default ResumeContent;
