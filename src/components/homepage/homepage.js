import * as React from "react";
import { Container, Typography, Grid, Button, Box } from "@mui/material";

// home components
import CoverPic from "./cover";
import ProjectCard from "./projectCard";

function Home() {
  return (
    <>
      <CoverPic />
      <Container maxWidth="xl" sx={{ marginY: "8vh" }}>
        <Typography variant="h5" marginBottom="3vh">
          Ongoing Projects
        </Typography>
        <Grid container spacing={2} sx={{display:"flex",justifyContent:"center"}}>
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
        <Box sx={{width:"100%", display:"flex",justifyContent:"center", marginTop:"3vh"}}>
          <Button variant="outlined">View More</Button>
        </Box>
      </Container>
      <Container maxWidth="xl" sx={{ marginY: "8vh" }}>
        <Typography variant="h5" marginBottom="3vh">
          Upcoming Projects
        </Typography>
        <Grid container spacing={2} sx={{display:"flex",justifyContent:"center"}}>
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
        <Box sx={{width:"100%", display:"flex",justifyContent:"center", marginTop:"3vh"}}>
          <Button variant="outlined">View More</Button>
        </Box>
      </Container>
    </>
  );
}

export default Home;