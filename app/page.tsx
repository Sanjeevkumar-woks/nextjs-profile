import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Socials from "./Socials";

import Experiences from "./components/experiences/Experiences";
import Project from "./components/projects/ProjectCard";
import Skills from "./components/skills/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Socials />
      <About />
      <Skills />
      {/* <Project /> */}
      <Experiences />
      <Contact />
      <Footer />
    </>
  );
}
