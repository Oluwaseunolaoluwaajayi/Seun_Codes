import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
