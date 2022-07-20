import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ProjectHero from "../components/ProjectHero";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Nav />
      <ProjectHero heading="Hi!" text="Thanks for visiting" />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
