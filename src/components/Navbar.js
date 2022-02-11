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
            variant="h6"
            sx={{
              mr: 4,
              display: { xs: "none", md: "flex" },
              color: "black",
              fontSize: "18px",
              fontWeight: "bold",
              fontFamily: "Roboto Mono",
              textTransform: "none",
            }}
            onClick={props.home}
          >
            Home
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontWeight: "bold",
                fontFamily: "Roboto Mono",
                textTransform: "none",
              }}
              onClick={props.about}
            >
              About
            </Button>
            <Button
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontWeight: "bold",
                fontFamily: "Roboto Mono",
                textTransform: "none",
              }}
              onClick={props.projects}
            >
              Projects
            </Button>
            <Button
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontWeight: "bold",
                fontFamily: "Roboto Mono",
                textTransform: "none",
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