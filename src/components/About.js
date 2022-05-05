import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const About = () => {
  const mobile = useMediaQuery("(max-width:1024px)");

  return (
    <div
      style={{
        //height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#515151",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <p
        style={{
          marginLeft: mobile ? "0" : "-70%",
          marginTop: "100px",
          marginBottom: "50px",
          color: "white",
          fontSize: "24px",
          fontWeight: "bold",
          fontFamily: "Roboto Mono",
        }}
      >
        About Me
      </p>
      <Card
        style={{
          maxWidth: 1200,
          borderRadius: "20px",
          boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.33)",
        }}
      >
        <Grid container alignItems="center" justifyContent="center">
          <Grid item>
            <Typography
              style={{
                maxWidth: 600,
                padding: "20px",
                color: "#727272",
                fontFamily: "Open Sans",
              }}
            >
              My name is Ellis Chung and I am a graduate from Stony Brook
              University with a B.S. in Computer Science. I am currently looking
              for job opportunities relating to software development. I have
              experience working with front end, back end, and full stack web
              applications using React, Node, Express, MongoDB, and other
              technologies. I'm also interested in diving deeper into other
              topics in Computer Science because everytime I've come to grasp a
              certain topic, I realize that I'm only scratching the surface.
              There is so much to learn within this field and new technologies
              are constantly being developed, making others deprecated. That's
              why I want to be as knowledgable as I can be when it comes to
              learning tech. Outside of programming, I indulge in my other
              passions such as b-boying, anime, building PCs, and learning about
              new PC hardware.
            </Typography>
          </Grid>
          <Grid item>
            <CardMedia
              component="video"
              style={{ maxWidth: 550 }}
              src={require("../media/bboyclips.mp4")}
              controls
            />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default About;