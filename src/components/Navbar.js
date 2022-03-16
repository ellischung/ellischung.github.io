import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Navbar = (props) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 64) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <AppBar
      position="fixed"
      style={
        navbar
          ? {
              backgroundColor: "#999999",
              boxShadow: "none",
              transition: "background-color 200ms linear",
            }
          : {
              backgroundColor: "transparent",
              boxShadow: "none",
              transition: "background-color 200ms linear",
            }
      }
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            disableRipple
            variant="h6"
            sx={{
              margin: 0,
              padding: 0,
              mr: 6,
              color: "black",
              fontSize: "18px",
              fontWeight: "bold",
              fontFamily: "Roboto Mono",
              textTransform: "none",
              display: "inline-block",
              position: "relative",
              ":hover": {
                background: "transparent",
              },
              ":after": {
                content: '""',
                position: "absolute",
                width: "100%",
                transform: "scaleX(0)",
                height: "1px",
                bottom: 0,
                left: 0,
                backgroundColor: "black",
                transformOrigin: "bottom right",
                transition: "transform 0.25s ease-out",
              },
              ":hover:after": {
                transform: "scaleX(1)",
                transformOrigin: "bottom left",
              },
            }}
            onClick={props.home}
          >
            Home
          </Button>
          <Button
            disableRipple
            sx={{
              margin: 0,
              padding: 0,
              mr: 2,
              my: 2,
              color: "black",
              fontWeight: "bold",
              fontFamily: "Roboto Mono",
              textTransform: "none",
              display: "inline-block",
              position: "relative",
              ":hover": {
                background: "transparent",
              },
              ":after": {
                content: '""',
                position: "absolute",
                width: "100%",
                transform: "scaleX(0)",
                height: "1px",
                bottom: 0,
                left: 0,
                backgroundColor: "black",
                transformOrigin: "bottom right",
                transition: "transform 0.25s ease-out",
              },
              ":hover:after": {
                transform: "scaleX(1)",
                transformOrigin: "bottom left",
              },
            }}
            onClick={props.about}
          >
            About
          </Button>
          <Button
            disableRipple
            sx={{
              margin: 0,
              padding: 0,
              mr: 2,
              my: 2,
              color: "black",
              fontWeight: "bold",
              fontFamily: "Roboto Mono",
              textTransform: "none",
              display: "inline-block",
              position: "relative",
              ":hover": {
                background: "transparent",
              },
              ":after": {
                content: '""',
                position: "absolute",
                width: "100%",
                transform: "scaleX(0)",
                height: "1px",
                bottom: 0,
                left: 0,
                backgroundColor: "black",
                transformOrigin: "bottom right",
                transition: "transform 0.25s ease-out",
              },
              ":hover:after": {
                transform: "scaleX(1)",
                transformOrigin: "bottom left",
              },
            }}
            onClick={props.projects}
          >
            Projects
          </Button>
          <Button
            disableRipple
            sx={{
              margin: 0,
              padding: 0,
              mr: 2,
              my: 2,
              color: "black",
              fontWeight: "bold",
              fontFamily: "Roboto Mono",
              textTransform: "none",
              display: "inline-block",
              position: "relative",
              ":hover": {
                background: "transparent",
              },
              ":after": {
                content: '""',
                position: "absolute",
                width: "100%",
                transform: "scaleX(0)",
                height: "1px",
                bottom: 0,
                left: 0,
                backgroundColor: "black",
                transformOrigin: "bottom right",
                transition: "transform 0.25s ease-out",
              },
              ":hover:after": {
                transform: "scaleX(1)",
                transformOrigin: "bottom left",
              },
            }}
            onClick={props.contact}
          >
            Contact
          </Button>
          <div
            className="icons"
            style={{ marginLeft: "auto", paddingTop: "3px" }}
          >
            <GitHubIcon
              sx={{
                mr: 2,
                color: "black",
                fontSize: "30px",
                cursor: "pointer",
                "&:hover": { color: "white" },
              }}
              onClick={() =>
                window.open("https://github.com/ellischung", "_blank")
              }
            />
            <EmailIcon
              sx={{
                color: "black",
                fontSize: "30px",
                cursor: "pointer",
                "&:hover": { color: "white" },
              }}
              onClick={() =>
                (window.location = "mailto:ellischung98@gmail.com")
              }
            />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;