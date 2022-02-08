import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "69%",
    maxHeight: 300,
    borderRadius: "20px",
    marginBottom: "100px",
    alignItems: "center",
  },

  content: {
    background: "linear-gradient(to right, #D8D8D8 50%, white 50%)",
    backgroundSize: "200% 100%",
    backgroundPosition: "right bottom",
    transition: "all .5s ease-out",
    "&:hover": {
      backgroundPosition: "left bottom",
    },
  },

  text: {
    padding: "25px",
    color: "#727272",
    fontFamily: "Open Sans",
    transition: "all .6s ease-out",
    "&:hover": {
      color: "black",
    },
  },
});

const About = () => {
  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <p
        style={{
          marginBottom: "40px",
          fontSize: "24px",
          fontWeight: "bold",
          fontFamily: "Roboto Mono",
        }}
      >
        About Me
      </p>
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography className={classes.text}>
            My name is Ellis Chung and I am a graduate from Stony Brook
            University with a B.S. in Computer Science. I am currently looking
            for job opportunities relating to software development. I have
            experience working with front end, back end, and full stack web
            development with React, Node, Express, MongoDB, and other
            technologies. I'm also interested in diving deeper into other topics
            in computer science because everytime I feel like I've grasped a
            certain topic, I realize that I'm only scratching the surface. But
            that's the thing I love about this field. New technologies are
            constantly being developed, making others deprecated, which is why I
            want to be as knowledgable as I can be when it comes to learning
            tech. Outside of programming, I indulge in my other passions such as
            b-boying (clips on the right), anime, building PCs, and learning
            about new PC hardware.
          </Typography>
        </CardContent>
        <CardMedia
          component="video"
          width="500"
          height="300"
          src={`${process.env.PUBLIC_URL}/testvideo.mp4`}
          controls
        />
      </Card>
    </div>
  );
};

export default About;