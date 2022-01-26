// api call for project list
// pass props for projectCard

import * as React from "react";
import { Container, Typography, Grid, Button, Box } from "@mui/material";

// home components
import CoverPic from "./cover";
import ProjectCard from "./projectCard";
import { Link } from "react-router-dom";

// breakpoint
const topOffset = (theme) => ({
  [theme.breakpoints.down(500)]: { marginBottom: "8vh", marginTop: "180px" },
  [theme.breakpoints.up(500)]: { marginBottom: "8vh", marginTop: "calc(8vh + 100px)" }
});

function Home() {
  return (
    <>
      <CoverPic />
      <Container maxWidth="xl" sx={topOffset}>
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
        <Link style={{ textDecoration: 'none' }} to={{pathname:"/projects", hash:"#ongoing"}}>
          <Button variant="outlined">View More</Button>
          </Link>
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
          <Link style={{ textDecoration: 'none' }} to={{pathname:"/projects", hash:"#upcoming"}}>
          <Button variant="outlined">View More</Button>
          </Link>
        </Box>
      </Container>
    </>
  );
}

export default Home;
