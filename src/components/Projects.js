import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
  },
});

const Projects = () => {
  const classes = useStyles();
  const [hover1, setHover1] = useState({
    raised: false,
    shadow: 5,
  });

  const [hover2, setHover2] = useState({
    raised: false,
    shadow: 1,
  });

  const [hover3, setHover3] = useState({
    raised: false,
    shadow: 1,
  });

  const [hover4, setHover4] = useState({
    raised: false,
    shadow: 1,
  });

  const [hover5, setHover5] = useState({
    raised: false,
    shadow: 1,
  });

  const [hover6, setHover6] = useState({
    raised: false,
    shadow: 1,
  });

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
        Projects
      </p>
      <Grid
        container
        rowSpacing={5}
        columnSpacing={{ md: 7 }}
        style={{ marginBottom: "100px", width: "80%" }}
      >
        <Grid item xs={4}>
          <Card
            className={classes.root}
            onMouseOver={() => setHover1({ raised: true, shadow: 3 })}
            onMouseOut={() => setHover1({ raised: false, shadow: 1 })}
            raised={hover1.raised}
            zDepth={hover1.shadow}
            sx={{ maxWidth: 500, background: "#D8D8D8" }}
          >
            <img
              alt="node"
              src={`${process.env.PUBLIC_URL}/mixtapepluslogo.png`}
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
                A full stack web application that allows users to listen and
                share music with friends. Users are also able to view intriguing
                statistics based on their music tastes and can update their
                profiles with the simple UI layout that is built with Ant
                Design. This app makes use of the Spotify Web API and is
                designed using the MERN stack.
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
        <Grid item xs={4}>
          <Card
            className={classes.root}
            onMouseOver={() => setHover2({ raised: true, shadow: 3 })}
            onMouseOut={() => setHover2({ raised: false, shadow: 1 })}
            raised={hover2.raised}
            zDepth={hover2.shadow}
            sx={{ maxWidth: 500, background: "#D8D8D8" }}
          >
            <img
              alt="node"
              src={`${process.env.PUBLIC_URL}/guesstheanime.gif`}
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
        <Grid item xs={4}>
          <Card
            className={classes.root}
            onMouseOver={() => setHover3({ raised: true, shadow: 3 })}
            onMouseOut={() => setHover3({ raised: false, shadow: 1 })}
            raised={hover3.raised}
            zDepth={hover3.shadow}
            sx={{ maxWidth: 500, background: "#D8D8D8" }}
          >
            <img
              alt="node"
              src={`${process.env.PUBLIC_URL}/puppeteerlogo.png`}
              style={{ width: 200, height: 200 }}
            />
            <CardContent sx={{ background: "white" }}>
              <Typography
                gutterBottom
                style={{ fontFamily: "Open Sans", fontWeight: "bold" }}
              >
                mkt-scraper
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontFamily: "Open Sans" }}
              >
                A web automation application that allows users to enter in any
                search query and get notified by email when any new listings
                show up in Craigslist for that search. Uses Puppeteer.js and
                Node.js to scrape for listings in Craigslist. Future
                implementations include making this work with Facebook
                Marketplace and OfferUp.
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
        <Grid item xs={4}>
          <Card
            className={classes.root}
            onMouseOver={() => setHover4({ raised: true, shadow: 3 })}
            onMouseOut={() => setHover4({ raised: false, shadow: 1 })}
            raised={hover4.raised}
            zDepth={hover4.shadow}
            sx={{ maxWidth: 500, background: "#D8D8D8" }}
          >
            <img
              alt="node"
              src={`${process.env.PUBLIC_URL}/recmeanime.png`}
              style={{ width: 400, height: 200 }}
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
        <Grid item xs={4}>
          <Card
            className={classes.root}
            onMouseOver={() => setHover5({ raised: true, shadow: 3 })}
            onMouseOut={() => setHover5({ raised: false, shadow: 1 })}
            raised={hover5.raised}
            zDepth={hover5.shadow}
            sx={{ maxWidth: 500, background: "#D8D8D8" }}
          >
            <img
              alt="node"
              src={`${process.env.PUBLIC_URL}/clogo.png`}
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
        <Grid item xs={4}>
          <Card
            className={classes.root}
            onMouseOver={() => setHover6({ raised: true, shadow: 3 })}
            onMouseOut={() => setHover6({ raised: false, shadow: 1 })}
            raised={hover6.raised}
            zDepth={hover6.shadow}
            sx={{ maxWidth: 500, background: "#D8D8D8" }}
          >
            <img
              alt="node"
              src={`${process.env.PUBLIC_URL}/javalogo.png`}
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
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;