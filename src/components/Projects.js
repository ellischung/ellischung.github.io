import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Projects = () => {
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
        columnSpacing={{ xs: 5, sm: 6, md: 7 }}
        style={{ marginBottom: "100px", width: "80%" }}
      >
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 500, background: "#D8D8D8" }}>
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
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 500, background: "#D8D8D8" }}>
            <img
              alt="node"
              src={`${process.env.PUBLIC_URL}/guesstheanime.gif`}
              style={{ width: 300, height: 200 }}
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
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 500, background: "#D8D8D8" }}>
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
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 500 }}>4</Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 500 }}>5</Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 500 }}>6</Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;