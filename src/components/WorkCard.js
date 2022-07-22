import "./WorkCardStyles.css";
import React from "react";
import { Link } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.img} alt="my project" />
      <div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <div className="project-btns">
          <Link to={props.live} className="btn" target="_blank">
            Live
          </Link>
          <Link to={props.repo} className="btn" target="_blank">
            Repo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
