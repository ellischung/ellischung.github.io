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
    background: "#D8D8D8",
    marginBottom: "100px",
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
    padding: "22px",
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
            University with a B.S. in Computer Science. At first, I had little
            to no interest in the field. During my sophomore year of high
            school, I was required to select a major to focus the rest of my
            studies on. Nothing really interested me at the time so I was
            completely stumped when the time came for me to make a choice. I
            sifted through major after major, only to find that I didn't want to
            pursue any of the career trajectories that were offered. I figured
            that it was my ignorance that made me feel indifferent so I took a
            shot in the dark and chose the major that was the least
            uninteresting to me, which was software engineering. Outside of
            programming, my hobbies are b-boying, playing video games, watching
            anime, building PCs, and learning about new tech/hardware.
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