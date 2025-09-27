
import React from "react";
import './App.css'
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Projects from "./Components/Projects.jsx";
import Skills from "./Components/Skills.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";


function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar />

      <section id="home" className="min-h-screen">
        <Home />
      </section>

      <section id="about" className="py-20 px-6 md:px-20 bg-gray-800">
        <About />
      </section>

      <section id="projects" className="py-20 px-6 md:px-20 bg-gray-900">
        <Projects />
      </section>

      <section id="skills" className="py-20 px-6 md:px-20 bg-gray-800">
        <Skills />
      </section>

      <section id="contact" className="py-20 px-6 md:px-20 bg-gray-900">
        <Contact />
      </section>

      <section id="contact" className="py-20 px-6 md:px-20 bg-gray-900">
        <Footer />
      </section>

    </div>
  );
}

export default App;

