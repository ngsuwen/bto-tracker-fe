// api call for project list
// pass props for projectCard

import * as React from "react";
import { Container, Typography, Grid } from "@mui/material";
import ProjectCard from "../homePage/projectCard";

function ProjectList() {
  return (
    <>
      <section id="ongoing">
        <Container maxWidth="xl" sx={{ marginBottom: "8vh", marginTop: "8vh" }}>
          <Typography variant="h5" marginBottom="3vh">
            Ongoing Projects
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item lg={3}>
              <ProjectCard />
            </Grid>
            <Grid item lg={3}>
              <ProjectCard />
            </Grid>
            <Grid item lg={3}>
              <ProjectCard />
            </Grid>
            <Grid item lg={3}>
              <ProjectCard />
            </Grid>
            <Grid item lg={3}>
              <ProjectCard />
            </Grid>
            <Grid item lg={3}>
              <ProjectCard />
            </Grid>
            <Grid item lg={3}>
              <ProjectCard />
            </Grid>
            <Grid item lg={3}>
              <ProjectCard />
            </Grid>
            <Grid item lg={3}>
              <ProjectCard />
            </Grid>
            <Grid item lg={3}>
              <ProjectCard />
            </Grid>
            <Grid item lg={3}>
              <ProjectCard />
            </Grid>
            <Grid item lg={3}>
              <ProjectCard />
            </Grid>
            <Grid item lg={3}>
              <ProjectCard />
            </Grid>
            <Grid item lg={3}>
              <ProjectCard />
            </Grid>
          </Grid>
        </Container>
      </section>
      <section id="upcoming">
        <Container maxWidth="xl" sx={{ marginY: "8vh" }}>
          <Typography variant="h5" marginBottom="3vh">
            Upcoming Projects
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item lg={3}>
              <ProjectCard />
            </Grid>
            <Grid item lg={3}>
              <ProjectCard />
            </Grid>
            <Grid item lg={3}>
              <ProjectCard />
            </Grid>
            <Grid item lg={3}>
              <ProjectCard />
            </Grid>
            <Grid item lg={3}>
              <ProjectCard />
            </Grid>
            <Grid item lg={3}>
              <ProjectCard />
            </Grid>
            <Grid item lg={3}>
              <ProjectCard />
            </Grid>
            <Grid item lg={3}>
              <ProjectCard />
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}

export default ProjectList;
