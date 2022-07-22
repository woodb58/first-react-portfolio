import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ProjectHero from "../components/ProjectHero";
import Form from "../components/Form";


const Contact = () => {
  return (
    <div>
      <Nav />
      <ProjectHero heading="Contact" text="contact stuff and such" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
