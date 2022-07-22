import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ProjectHero from "../components/ProjectHero";
import ResumeContent from "../components/ResumeContent";

const Resume = () => {
    return (
      <div>
        <Nav />
        <ProjectHero heading="Resume" text="Check Out My Resume" />
        <ResumeContent />
        <Footer />
      </div>
    );
  };
  
  export default Resume;