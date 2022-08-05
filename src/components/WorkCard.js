import "./WorkCardStyles.css";
import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.img} alt="my project" />
      <div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <div className="project-btns">
          <a href={props.live} className="btn" target="_blank">
            Live
          </a>
          <a href={props.repo} className="btn" target="_blank">
            Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
