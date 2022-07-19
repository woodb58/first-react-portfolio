import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ProjectHero from "../components/ProjectHero";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Nav />
      <ProjectHero heading="ABOUT" text="about section" />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
