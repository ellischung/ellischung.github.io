import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

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
        style={{ marginBottom: "100px", width: "60%" }}
      >
        <Grid item xs={4}>
          <Card
            sx={{
              maxWidth: 300,
            }}
          >
            1
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{
              maxWidth: 300,
            }}
          >
            2
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{
              maxWidth: 300,
            }}
          >
            3
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{
              maxWidth: 300,
            }}
          >
            4
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{
              maxWidth: 300,
            }}
          >
            5
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{
              maxWidth: 300,
            }}
          >
            6
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;