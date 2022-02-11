import { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="App">
      <Navbar
        home={scrollToHome}
        about={scrollToAbout}
        projects={scrollToProjects}
        contact={scrollToContact}
      />
      <div ref={homeRef}>
        <Header />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;