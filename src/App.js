import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import About from "./components/About";
import Scramble from "react-scramble";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Header */}
      <Scramble
        autoStart
        text="ellis chung"
        steps={[
          {
            roll: 10,
            action: "+",
            type: "all",
          },
          {
            action: "-",
            type: "forward",
          },
        ]}
        style={{
          color: "black",
          fontSize: "32px",
          fontWeight: "bold",
          fontFamily: "Roboto Mono",
        }}
      />
      <Projects />
      <Resume />
      <About />
      {/* Footer */}
    </div>
  );
}

export default App;