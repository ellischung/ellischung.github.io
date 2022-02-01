import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const pages = ["About", "Projects", "Contact"];

const Navbar = () => {
  return (
    <AppBar
      position="static"
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
          >
            Home
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontWeight: "bold",
                  fontFamily: "Roboto Mono",
                  textTransform: "none",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <GitHubIcon sx={{ mr: 2, color: "black", fontSize: "30px" }} />
          <EmailIcon sx={{ color: "black", fontSize: "30px" }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;