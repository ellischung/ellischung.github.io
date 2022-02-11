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
    color: "black",
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
        Contact
      </p>
      <p
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <EmailIcon sx={{ mr: 2 }} />
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
        <GitHubIcon sx={{ mr: 2 }} />
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
          marginBottom: "150px",
        }}
      >
        <FeedIcon sx={{ mr: 2 }} />
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
        <Typography style={{ fontWeight: "bold", fontFamily: "Open Sans" }}>
          &copy; Ellis Chung 2022
        </Typography>
      </p>
    </div>
  );
};

export default Contact;