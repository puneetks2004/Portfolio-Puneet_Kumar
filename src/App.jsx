import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import LetsConnect from "./components/letsconnect.jsx";
import Skill from "./components/skills.jsx";
import My_work from "./components/mywork.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/Footer.jsx";
import ParticlesCanvas from './components/Particles';

function App() {


  return (
    <main style={{
      position: "relative",
      isolation: "isolate"
    }}>
      <ParticlesCanvas />
      <Navbar />
      <Hero />
      <About />
      <My_work />
      <Skill />
      <LetsConnect />
      <Contact />
      <Footer />

    </main>
  )
}

export default App