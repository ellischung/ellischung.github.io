import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Header */}
      Ellis Chung
      <Projects />
      <Skills />
      <About />
      {/* Footer */}
    </div>
  );
}

export default App;