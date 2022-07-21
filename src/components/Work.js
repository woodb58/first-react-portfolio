import React from "react";
import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
      {WorkCardData.map((val, i) => {
        return(
          <WorkCard 
          key={i}
          img={val.img}
          title={val.title}
          text={val.text}
          live={val.live}
          repo={val.repo}
          />
        );
      })}
      </div>
    </div>
  );
};

export default Work;
