import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ProjectHero from "../components/ProjectHero";
import Work from "../components/Work";

const Projects = () => {
  return (
    <div>
      <Nav />
      <ProjectHero heading="PROJECTS" text="My Recent Work" />
      <Work />
      <Footer />
    </div>
  );
};

export default Projects;
