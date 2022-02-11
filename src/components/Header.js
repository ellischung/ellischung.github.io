import React from "react";
import Scramble from "react-scramble";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

class Header extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => this.state.restart(), 3600);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Avatar
          alt="profile"
          src={require("../media/temp.jpg")}
          sx={{
            my: 4,
            width: 200,
            height: 200,
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
            fontSize: "36px",
            fontWeight: "bold",
            fontFamily: "Roboto Mono",
          }}
        />
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
            fontSize: "24px",
            fontWeight: "bold",
            fontFamily: "Roboto Mono",
          }}
        />
        <p
          style={{
            marginBottom: "100px",
            color: "#727272",
            fontFamily: "Open Sans",
            width: "600px",
          }}
        >
          Hello! I'm a Full Stack Web Developer based in NY who is open to any
          tech opportunities as well as learning about new tech. Check out some
          of the projects that I've developed using the MERN stack and other
          technologies below!
        </p>
        <p
          style={{
            marginBottom: "40px",
            fontSize: "24px",
            fontWeight: "bold",
            fontFamily: "Roboto Mono",
          }}
        >
          Stack
        </p>
        <Grid
          container
          rowSpacing={5}
          style={{ marginBottom: "100px", width: "60%" }}
        >
          <Grid item xs={4}>
            <Card
              sx={{
                maxWidth: 500,
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <img
                alt="javascript"
                src={require("../media/jslogo.png")}
                style={{ width: 70, height: 70 }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  style={{ fontFamily: "Open Sans", fontWeight: "bold" }}
                >
                  Javascript
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontFamily: "Open Sans" }}
                >
                  Proficient with ES6
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              sx={{
                maxWidth: 500,
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <img
                alt="react"
                src={`${process.env.PUBLIC_URL}/logo192.png`}
                style={{ width: 70, height: 70 }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  style={{ fontFamily: "Open Sans", fontWeight: "bold" }}
                >
                  React
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontFamily: "Open Sans" }}
                >
                  Functional/Class Components, JSX, Hooks
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              sx={{
                maxWidth: 500,
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <img
                alt="node"
                src={require("../media/nodelogo.png")}
                style={{ width: 100, height: 70 }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  style={{ fontFamily: "Open Sans", fontWeight: "bold" }}
                >
                  NodeJS
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontFamily: "Open Sans" }}
                >
                  Using Express.js for web applications
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              sx={{
                maxWidth: 500,
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <img
                alt="mongodb"
                src={require("../media/mongodblogo.png")}
                style={{ width: 210, height: 70 }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  style={{ fontFamily: "Open Sans", fontWeight: "bold" }}
                >
                  MongoDB
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontFamily: "Open Sans" }}
                >
                  Using to store user data
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              sx={{
                maxWidth: 500,
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <img
                alt="scss"
                src={require("../media/scsslogo.png")}
                style={{ width: 70, height: 70 }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  style={{ fontFamily: "Open Sans", fontWeight: "bold" }}
                >
                  Scss
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontFamily: "Open Sans" }}
                >
                  Projects designed and styled using SCSS
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              sx={{
                maxWidth: 500,
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <img
                alt="git"
                src={require("../media/gitlogo.png")}
                style={{ width: 140, height: 70 }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  style={{ fontFamily: "Open Sans", fontWeight: "bold" }}
                >
                  Git
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontFamily: "Open Sans" }}
                >
                  Git repositories, Pull requests, etc.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Header;