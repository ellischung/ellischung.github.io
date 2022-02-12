import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  button: {
    display: "inline-block",
    position: "relative",
    "&:after": {
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
    "&:hover:after": {
      transform: "scaleX(1)",
      transformOrigin: "bottom left",
    },
  },
});

const Navbar = (props) => {
  const classes = useStyles();

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
            className={classes.button}
            sx={{
              margin: 0,
              padding: 0,
              mr: 6,
              color: "black",
              fontSize: "18px",
              fontWeight: "bold",
              fontFamily: "Roboto Mono",
              textTransform: "none",
              ":hover": {
                background: "transparent",
              },
            }}
            onClick={props.home}
          >
            Home
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              disableRipple
              className={classes.button}
              sx={{
                margin: 0,
                padding: 0,
                mr: 2,
                my: 2,
                color: "black",
                fontWeight: "bold",
                fontFamily: "Roboto Mono",
                textTransform: "none",
                ":hover": {
                  background: "transparent",
                },
              }}
              onClick={props.about}
            >
              About
            </Button>
            <Button
              disableRipple
              className={classes.button}
              sx={{
                margin: 0,
                padding: 0,
                mr: 2,
                my: 2,
                color: "black",
                fontWeight: "bold",
                fontFamily: "Roboto Mono",
                textTransform: "none",
                ":hover": {
                  background: "transparent",
                },
              }}
              onClick={props.projects}
            >
              Projects
            </Button>
            <Button
              disableRipple
              className={classes.button}
              sx={{
                margin: 0,
                padding: 0,
                mr: 2,
                my: 2,
                color: "black",
                fontWeight: "bold",
                fontFamily: "Roboto Mono",
                textTransform: "none",
                ":hover": {
                  background: "transparent",
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