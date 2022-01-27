import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Header */}
      Ellis Chung
      <Projects />
      <Resume />
      <About />
      {/* Footer */}
    </div>
  );
}

export default App;