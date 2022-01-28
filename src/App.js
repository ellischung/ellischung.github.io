import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import About from "./components/About";
import Scramble from "react-scramble";
import Avatar from "@mui/material/Avatar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="header">
        {/* Header */}
        <Avatar
          alt="ellis chung"
          src={`${process.env.PUBLIC_URL}/temp.jpg`}
          sx={{
            my: 4,
            width: 150,
            height: 150,
          }}
        />
        <Scramble
          autoStart
          text="ellis chung"
          steps={[
            {
              roll: 20,
              action: "+",
              type: "all",
            },
            {
              action: "-",
              type: "forward",
            },
          ]}
          style={{
            marginBottom: "20px",
            color: "black",
            fontSize: "32px",
            fontWeight: "bold",
            fontFamily: "Roboto Mono",
          }}
        />
        <Scramble
          autoStart
          text="software engineer"
          steps={[
            {
              roll: 20,
              action: "+",
              type: "all",
            },
            {
              action: "-",
              type: "forward",
            },
            {
              roll: 20,
              action: "+",
              type: "all",
            },
            {
              action: "-",
              type: "forward",
            },
          ]}
          style={{
            marginBottom: "20px",
            color: "#515151",
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "Roboto Mono",
          }}
        />
      </div>
      <Projects />
      <Resume />
      <About />
      {/* Footer */}
    </div>
  );
}

export default App;