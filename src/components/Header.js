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
        <p
          style={{ color: "#727272", fontFamily: "Open Sans", width: "600px" }}
        >
          Hello! I'm a Full Stack Web Developer based in NY who is open to any
          tech opportunities as well as learning new tech! I have created a
          number of projects using the MERN stack and other technologies. I'm
          also a graduate of Stony Brook University with a B.S. in Computer
          Science.
        </p>
        <p
          style={{
            color: "black",
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "Roboto Mono",
            marginBottom: "50px",
          }}
        >
          Stack
        </p>
        <Grid container rowSpacing={10} columnSpacing={-100}>
          <Grid item xs={4}>
            <Card
              sx={{
                maxWidth: 800,
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <img
                alt="javascript"
                src={`${process.env.PUBLIC_URL}/jslogo.png`}
                style={{ width: 100, height: 100 }}
              />
              <CardContent>
                <Typography gutterBottom style={{ fontFamily: "Open Sans" }}>
                  Javascript
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontFamily: "Open Sans" }}
                >
                  Using ES6 for all projects
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              sx={{
                maxWidth: 800,
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <img
                alt="react"
                src={`${process.env.PUBLIC_URL}/logo512.png`}
                style={{ width: 100, height: 100 }}
              />
              <CardContent>
                <Typography gutterBottom style={{ fontFamily: "Open Sans" }}>
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
                maxWidth: 800,
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <img
                alt="node"
                src={`${process.env.PUBLIC_URL}/nodelogo.png`}
                style={{ width: 150, height: 100 }}
              />
              <CardContent>
                <Typography gutterBottom style={{ fontFamily: "Open Sans" }}>
                  NodeJS
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontFamily: "Open Sans" }}
                >
                  Web applications utilizing Express.js
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              sx={{
                maxWidth: 800,
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <img
                alt="mongodb"
                src={`${process.env.PUBLIC_URL}/mongodblogo.png`}
                style={{ width: 300, height: 100 }}
              />
              <CardContent>
                <Typography gutterBottom style={{ fontFamily: "Open Sans" }}>
                  MongoDB
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontFamily: "Open Sans" }}
                >
                  Database to store user data
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              sx={{
                maxWidth: 800,
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <img
                alt="scss"
                src={`${process.env.PUBLIC_URL}/scsslogo.png`}
                style={{ width: 100, height: 100 }}
              />
              <CardContent>
                <Typography gutterBottom style={{ fontFamily: "Open Sans" }}>
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
                maxWidth: 800,
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <img
                alt="git"
                src={`${process.env.PUBLIC_URL}/gitlogo.png`}
                style={{ width: 200, height: 100 }}
              />
              <CardContent>
                <Typography gutterBottom style={{ fontFamily: "Open Sans" }}>
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