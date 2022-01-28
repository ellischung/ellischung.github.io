import React from "react";
import Scramble from "react-scramble";

class Header extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => this.state.restart(), 3600);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <Scramble
          autoStart
          text="software engineer"
          bindMethod={(c) => {
            this.setState({
              restart: c.restart,
            });
          }}
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
            {
              action: "-",
            },
            {
              action: "-",
            },
            {
              text: "full stack developer",
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
            color: "#828282",
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "Roboto Mono",
          }}
        />
      </div>
    );
  }
}

export default Header;