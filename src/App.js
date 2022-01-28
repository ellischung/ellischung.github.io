import "./App.css";
import Scramble from "react-scramble";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import About from "./components/About";
import Avatar from "@mui/material/Avatar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="header">
        {/* Header */}
        <Avatar
          alt="profile"
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
          mouseEnterTrigger="restart"
          steps={[
            {
              roll: 15,
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
        <Header />
      </div>
      <Projects />
      <Resume />
      <About />
      {/* Footer */}
    </div>
  );
}

export default App;