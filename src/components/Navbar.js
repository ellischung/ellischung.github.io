import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Navbar = (props) => {
  return (
    <AppBar
      position="fixed"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            disableRipple
            variant="h6"
            sx={{
              mr: 6,
              display: "inline-block",
              color: "black",
              fontSize: "18px",
              fontWeight: "bold",
              fontFamily: "Roboto Mono",
              textTransform: "none",
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
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              disableRipple
              sx={{
                mr: 2,
                my: 2,
                display: "inline-block",
                color: "black",
                fontWeight: "bold",
                fontFamily: "Roboto Mono",
                textTransform: "none",
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
                mr: 2,
                my: 2,
                display: "inline-block",
                color: "black",
                fontWeight: "bold",
                fontFamily: "Roboto Mono",
                textTransform: "none",
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
                mr: 2,
                my: 2,
                display: "inline-block",
                color: "black",
                fontWeight: "bold",
                fontFamily: "Roboto Mono",
                textTransform: "none",
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
          </Box>
          <GitHubIcon sx={{ mr: 2, color: "black", fontSize: "30px" }} />
          <EmailIcon sx={{ color: "black", fontSize: "30px" }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;