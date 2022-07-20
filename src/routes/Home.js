import React from 'react';
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import HomeContent from '../components/HomeContent';

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <HomeContent />
      <Footer />
    </div>
  )
}

export default Home;
