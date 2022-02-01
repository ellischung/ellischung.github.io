import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;