import React from "react";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    fontWeight: "bold",
    fontFamily: "Roboto Mono",
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
        <Typography className={classes.root}>ellischung98@gmail.com</Typography>
      </p>
      <p
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <GitHubIcon sx={{ mr: 2 }} />
        <Typography
          className={classes.root}
          onClick={() => window.open("https://github.com/ellischung", "_blank")}
        >
          https://github.com/ellischung
        </Typography>
      </p>
      <p
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <GitHubIcon sx={{ mr: 2 }} />
        <Typography className={classes.root}>CV</Typography>
      </p>
    </div>
  );
};

export default Contact;