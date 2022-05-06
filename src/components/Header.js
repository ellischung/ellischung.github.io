import React from "react";
import Scramble from "react-scramble";
import Grid from "@mui/material/Grid";
import background from "../media/bg.jpg";
import mobileBg from "../media/mobile-bg.jpg"
import useMediaQuery from "@mui/material/useMediaQuery";

export default function HeaderWrapper({ ...rest }) {
  const mobile = useMediaQuery("(max-width:1024px)");
  const shrink = useMediaQuery("(max-height:560px)");
  return <Header {...rest} mobile={mobile} shrink={shrink} />;
}

class Header extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => this.state.restart(), 3600);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { mobile, shrink } = this.props;
    return (
      <div
        style={{
          height: "100vh",
          backgroundImage: mobile ? `url(${mobileBg})` : `url(${background})`,
          backgroundSize: "cover",
        }}
      >
        <Grid
          container
          direction="column"
          textAlign={mobile && "center"}
          alignItems={mobile && "center"}
        >
          <span
            style={{
              marginTop: mobile ? "400px" : "20%",
              marginBottom: "20px",
              marginLeft: !mobile && "15%",
            }}
          >
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
                fontSize: shrink ? "0" : mobile ? "6vh" : "8vh",
                color: "white",
                fontWeight: "bold",
                fontFamily: "Roboto Mono",
              }}
            />
          </span>
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
              marginLeft: !mobile && "15%",
              marginBottom: "20px",
              color: "white",
              fontSize: shrink ? "0" : mobile ? "3vh" : "4vh",
              fontWeight: "bold",
              fontFamily: "Roboto Mono",
            }}
          />
          <p
            style={{
              marginLeft: mobile ? "3.5%" : "15%",
              marginRight: mobile ? "3.5%" : "15%",
              maxWidth: "500px",
              color: "#7a7a7a",
              fontSize: shrink ? "0" : "2vh",
              fontFamily: "Open Sans",

            }}
          >
            Hello! I'm a Full Stack Web Developer based in NY who is open to any
            tech opportunities as well as learning about new technologies!
          </p>
        </Grid>
      </div>
    );
  }
}