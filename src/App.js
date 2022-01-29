import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Resume />
      <About />
      {/* Footer */}
    </div>
  );
}

export default App;