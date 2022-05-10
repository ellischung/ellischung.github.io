import React from "react";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const About = () => {
  const mobile = useMediaQuery("(max-width:1024px)");
  const laptop = useMediaQuery("(max-width:1610px)");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#7a7a7a",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <p
        style={{
          marginLeft: mobile ? "0" : "-70%",
          marginTop: "100px",
          marginBottom: "50px",
          textAlign: "center",
          color: "white",
          fontSize: "3vh",
          fontWeight: "bold",
          fontFamily: "Roboto Mono",
        }}
      >
        About Me
      </p>
      <Grid
        container
        direction={mobile ? "column" : "row"}
        alignItems={mobile && "center"}
        justifyContent={mobile && "center"}
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "100px",
        }}
      >
        <Grid
          item
          style={{
            textAlign: mobile && "center",
            marginLeft: mobile ? "0" : "10%",
            marginRight: mobile ? "0" : "10%",
            marginBottom: "50px",
            maxWidth: laptop ? 500 : "35%",
          }}
        >
          <Typography sx={{ fontSize: "2vh", fontFamily: "Open Sans" }}>
            My name is Ellis Chung and I am a graduate from Stony Brook
            University with a B.S. in Computer Science. I am currently looking
            for job opportunities relating to software development. I have
            experience working with front end, back end, and full stack web
            applications using React, Node, Express, MongoDB, and other
            technologies.
          </Typography>
          <Typography
            sx={{
              my: mobile ? 4 : 10,
              fontSize: "2vh",
              fontFamily: "Open Sans",
            }}
          >
            I'm also interested in diving deeper into other topics in Computer
            Science because everytime I've come to grasp a certain topic, I
            realize that I'm only scratching the surface. There is so much to
            learn within this field and new technologies are constantly being
            developed, making others deprecated. That's why I want to be as
            knowledgable as I can be when it comes to learning tech.
          </Typography>
          <Typography
            sx={{
              my: mobile ? 4 : 10,
              fontSize: "2vh",
              fontFamily: "Open Sans",
            }}
          >
            Outside of programming, I indulge in my other passions such as
            b-boying, anime, building PCs, and learning about new PC hardware.
          </Typography>
        </Grid>
        <Grid item>
          <Grid item style={{ marginBottom: "30%" }}>
            <CardMedia
              component="video"
              style={{
                margin: "auto",
                maxWidth: laptop ? 400 : 550,
                borderRadius: "20px",
                boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.33)",
              }}
              src={require("../media/bboyclips.mp4")}
              controls
            />
          </Grid>
          <Grid item>
            <Typography
              style={{
                textAlign: mobile && "center",
                color: "white",
                fontSize: "3vh",
                fontWeight: "bold",
                fontFamily: "Roboto Mono",
                marginBottom: "50px",
              }}
            >
              Tech Stack
            </Typography>
            <Grid
              container
              spacing={mobile ? 5 : laptop ? 2 : 5}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <img
                  alt="javascript"
                  src={require("../media/jslogo.png")}
                  style={{ width: 75, height: 75 }}
                />
              </Grid>
              <Grid item>
                <img
                  alt="react"
                  src={require("../media/reactlogo.png")}
                  style={{ width: 75, height: 75 }}
                />
              </Grid>
              <Grid item>
                <img
                  alt="node"
                  src={require("../media/nodelogo.png")}
                  style={{ width: 100, height: 100 }}
                />
              </Grid>
              <Grid item>
                <img
                  alt="mongodb"
                  src={require("../media/mongodblogo.png")}
                  style={{ width: 75, height: 75 }}
                />
              </Grid>
              <Grid item>
                <img
                  alt="git"
                  src={require("../media/gitlogo.png")}
                  style={{ width: 75, height: 75 }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;