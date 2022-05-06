import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    background: "#D8D8D8",
    borderRadius: "20px",
    transition: "transform 0.15s ease-in-out",
    "&:hover": {
      transform: "scale3d(1.1, 1.1, 1)",
      boxShadow: "10px 10px 10px rgba(0, 0, 0, 1)",
    },
  },
});

const Projects = () => {
  const mobile = useMediaQuery("(max-width:1024px)");
  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#515151",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <p
        style={{
          marginLeft: mobile ? "0" : "-70%",
          marginTop: "100px",
          marginBottom: "50px",
          color: "white",
          fontSize: "3vh",
          fontWeight: "bold",
          fontFamily: "Roboto Mono",
        }}
      >
        Projects
      </p>
      <Grid
        container
        spacing={7}
        alignItems="center"
        justifyContent="center"
        style={{
          textAlign: "center",
          maxWidth: 1600,
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "100px",
        }}
      >
        <Grid item>
          <Card className={classes.root}>
            <img
              alt="guesstheanime"
              src={require("../media/overclockedlogo.png")}
              style={{ width: 300, height: 50, padding: "75px 0px 75px 0px" }}
            />
            <CardContent sx={{ background: "white" }}>
              <Typography
                gutterBottom
                style={{ fontFamily: "Open Sans", fontWeight: "bold" }}
              >
                Overclocked
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontFamily: "Open Sans", height: 120 }}
              >
                An e-commerce web application for selling PC components and tech
                services. Utilizes e-commerce APIs from Commerce.js and Stripe
                to provide the back end functionality. React.js was used for the
                front end.
              </Typography>
            </CardContent>
            <CardActions sx={{ background: "white", justifyContent: "center" }}>
              <Button
                variant="outlined"
                sx={{ textTransform: "none", fontFamily: "Open Sans" }}
                onClick={() =>
                  window.open("https://overclockedus.netlify.app/", "_blank")
                }
              >
                Website
              </Button>
              <Button
                variant="outlined"
                sx={{ textTransform: "none", fontFamily: "Open Sans" }}
                onClick={() =>
                  window.open(
                    "https://github.com/ellischung/overclocked",
                    "_blank"
                  )
                }
              >
                Github
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <img
              alt="guesstheanime"
              src={require("../media/guesstheanime.gif")}
              style={{ width: 200, height: 200 }}
            />
            <CardContent sx={{ background: "white" }}>
              <Typography
                gutterBottom
                style={{ fontFamily: "Open Sans", fontWeight: "bold" }}
              >
                Guess The Anime
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontFamily: "Open Sans" }}
              >
                A multiplayer game where players compete to see who can
                recognize the most anime based on their openings/endings/OSTs.
                Uses Socket.IO to provide real-time and bidirectional
                communication between web clients and servers. React.js was used
                for the front end and Express.js was used for the back end.
              </Typography>
            </CardContent>
            <CardActions sx={{ background: "white", justifyContent: "center" }}>
              <Button
                variant="outlined"
                sx={{ textTransform: "none", fontFamily: "Open Sans" }}
                onClick={() =>
                  window.open("https://guesstheanime.netlify.app/", "_blank")
                }
              >
                Website
              </Button>
              <Button
                variant="outlined"
                sx={{ textTransform: "none", fontFamily: "Open Sans" }}
                onClick={() =>
                  window.open(
                    "https://github.com/ellischung/guess-the-anime",
                    "_blank"
                  )
                }
              >
                Github
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <img
              alt="mixtapeplus"
              src={require("../media/mixtapepluslogo.png")}
              style={{ width: 300, height: 200 }}
            />
            <CardContent sx={{ background: "white" }}>
              <Typography
                gutterBottom
                style={{ fontFamily: "Open Sans", fontWeight: "bold" }}
              >
                MixtapePlus
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontFamily: "Open Sans" }}
              >
                A full stack web application for visualizing personalized
                Spotify data. Users can view statistics such as accumulated
                minutes listened, genre/artist distribution, and more. Users can
                also customize their profiles and create new playlists based on
                their music preferences. This app uses the Spotify Web API to
                play music and uses Axios to pull data from a REST API.
              </Typography>
            </CardContent>
            <CardActions sx={{ background: "white", justifyContent: "center" }}>
              <Button
                variant="outlined"
                sx={{ textTransform: "none", fontFamily: "Open Sans" }}
                onClick={() =>
                  window.open("http://mixtapeplus.herokuapp.com/", "_blank")
                }
              >
                Website
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <img
              alt="mkt-scraper"
              src={require("../media/puppeteerlogo.png")}
              style={{ width: 200, height: 200 }}
            />
            <CardContent sx={{ background: "white" }}>
              <Typography
                gutterBottom
                style={{ fontFamily: "Open Sans", fontWeight: "bold" }}
              >
                Mkt Scraper
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontFamily: "Open Sans" }}
              >
                A web automation application that notifies users by email
                whenever new listings appear for a specified search query and
                price constraint. Utilizes Puppeteer.js to scrape listing data
                from Craigslist. Users can schedule desired intervals for the
                script to run via CronJob. Future implementations include making
                this work with Facebook Marketplace and OfferUp.
              </Typography>
            </CardContent>
            <CardActions sx={{ background: "white", justifyContent: "center" }}>
              <Button
                variant="outlined"
                sx={{ textTransform: "none", fontFamily: "Open Sans" }}
                onClick={() =>
                  window.open(
                    "https://github.com/ellischung/mkt-scraper",
                    "_blank"
                  )
                }
              >
                Github
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <img
              alt="recmeanime"
              src={require("../media/recmeanime.png")}
              style={{ width: 300, height: 200 }}
            />
            <CardContent sx={{ background: "white" }}>
              <Typography
                gutterBottom
                style={{ fontFamily: "Open Sans", fontWeight: "bold" }}
              >
                RecMeAnime
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontFamily: "Open Sans" }}
              >
                A web application that utilizes the MyAnimeList API to help
                users get accurate recommendations of their favorite animes.
                Users can also view other interesting statistics such as the
                total score distribution of an anime based on all MyAnimeList
                users. This project was built with React.js and styled using
                SCSS.
              </Typography>
            </CardContent>
            <CardActions sx={{ background: "white", justifyContent: "center" }}>
              <Button
                variant="outlined"
                sx={{ textTransform: "none", fontFamily: "Open Sans" }}
                onClick={() =>
                  window.open(
                    "https://ellischung.github.io/recmeanime",
                    "_blank"
                  )
                }
              >
                Website
              </Button>
              <Button
                variant="outlined"
                sx={{ textTransform: "none", fontFamily: "Open Sans" }}
                onClick={() =>
                  window.open(
                    "https://github.com/ellischung/recmeanime",
                    "_blank"
                  )
                }
              >
                Github
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <img
              alt="c"
              src={require("../media/clogo.png")}
              style={{ width: 250, height: 200 }}
            />
            <CardContent sx={{ background: "white" }}>
              <Typography
                gutterBottom
                style={{ fontFamily: "Open Sans", fontWeight: "bold" }}
              >
                C Projects
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontFamily: "Open Sans", height: 120 }}
              >
                Projects on low-level system concepts written in C. Topics
                include valgrind, GDB/CGDB, dynamic memory allocation,
                shell/terminal multiplexers, and multithreading.
              </Typography>
            </CardContent>
            <CardActions sx={{ background: "white", justifyContent: "center" }}>
              <Button
                variant="outlined"
                sx={{ textTransform: "none", fontFamily: "Open Sans" }}
                onClick={() =>
                  window.open("https://github.com/ellischung/CSE320", "_blank")
                }
              >
                Github
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* <Grid item>
          <Card className={classes.root}>
            <img
              alt="java"
              src={require("../media/javalogo.png")}
              style={{ width: 200, height: 200 }}
            />
            <CardContent sx={{ background: "white" }}>
              <Typography
                gutterBottom
                style={{ fontFamily: "Open Sans", fontWeight: "bold" }}
              >
                OS Projects
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontFamily: "Open Sans", height: 120 }}
              >
                Projects on operating systems management written in Java.
                Learned about the inner workings of operating systems through
                these projects that cover the management of devices, memory, and
                threads.
              </Typography>
            </CardContent>
            <CardActions sx={{ background: "white", justifyContent: "center" }}>
              <Button
                variant="outlined"
                sx={{ textTransform: "none", fontFamily: "Open Sans" }}
                onClick={() =>
                  window.open("https://github.com/ellischung/CSE306", "_blank")
                }
              >
                Github
              </Button>
            </CardActions>
          </Card>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default Projects;