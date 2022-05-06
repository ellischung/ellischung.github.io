import React from "react";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import FeedIcon from "@mui/icons-material/Feed";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    fontWeight: "bold",
    fontFamily: "Roboto Mono",
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
    transition: "transform 0.15s ease-in-out",
    "&:hover": {
      color: "blue",
    },
  },
});

const Contact = () => {
  const classes = useStyles();

  return (
    <div
      style={{
        background: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <p
        style={{
          marginTop: "100px",
          marginBottom: "40px",
          color: "white",
          fontSize: "3vh",
          fontWeight: "bold",
          fontFamily: "Roboto Mono",
        }}
      >
        Contact
      </p>
      <p
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <EmailIcon sx={{ mr: 2, color: "white" }} />
        <Typography
          className={classes.root}
          href="mailto:ellischung98@gmail.com"
          component="a"
        >
          ellischung98@gmail.com
        </Typography>
      </p>
      <p
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <GitHubIcon sx={{ mr: 2, color: "white" }} />
        <Typography
          className={classes.root}
          href="https://github.com/ellischung"
          target="_blank"
          component="a"
        >
          https://github.com/ellischung
        </Typography>
      </p>
      <p
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: "100px",
        }}
      >
        <FeedIcon sx={{ mr: 2, color: "white" }} />
        <Typography
          className={classes.root}
          href={require("../media/ellis-chung-cv.pdf")}
          target="_blank"
          component="a"
        >
          ellis-chung-cv.pdf
        </Typography>
      </p>
      <p>
        <Typography
          style={{
            color: "white",
            fontWeight: "bold",
            fontFamily: "Open Sans",
          }}
        >
          &copy; Ellis Chung 2022
        </Typography>
      </p>
    </div>
  );
};

export default Contact;