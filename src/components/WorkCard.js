import "./WorkCardStyles.css";
import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.img} alt="add alt text" />
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details"></div>
      <p>{props.text}</p>
      <div className="project-btns">
        <NavLink to={props.live} className="btn">
          Live
        </NavLink>
        <NavLink to={props.repo} className="btn">
          Repo
        </NavLink>
      </div>
    </div>
  );
};

export default WorkCard;