import * as React from "react";
import { Container, Typography, Grid, Button, Box } from "@mui/material";
import { DataContext } from "../../App";

// home components
import CoverPic from "./cover";
import ProjectCard from "./projectCard";
import { HashLink } from "react-router-hash-link";

// breakpoint
const topOffset = (theme) => ({
  [theme.breakpoints.down(500)]: { marginBottom: "8vh", marginTop: "180px" },
  [theme.breakpoints.up(500)]: {
    marginBottom: "8vh",
    marginTop: "calc(8vh + 100px)",
  },
});

export default function Home() {
  // context
  const { ongoing, upcoming } = React.useContext(DataContext)

  // ongoing function
  const ongoingProjList=()=>{
    let ongoingProjArr=[];
      ongoing.forEach((element)=>
      ongoingProjArr.push(<Grid item lg={3}><ProjectCard project={element}/></Grid>)
      )
    return ongoingProjArr.slice(0,4)
  }

  // upcoming function
  const upcomingProjList=()=>{
    let upcomingProjArr=[];
      upcoming.forEach((element)=>
      upcomingProjArr.push(<Grid item lg={3}><ProjectCard project={element}/></Grid>)
      )
    return upcomingProjArr.slice(0,4)
  }

  return (
    <>
      <CoverPic />
      <Container maxWidth="xl" sx={topOffset}>
        <Typography variant="h5" marginBottom="3vh">
          Ongoing Projects
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {ongoingProjList()}
        </Grid>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "3vh",
          }}
        >
          <HashLink
            style={{ textDecoration: "none" }}
            scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
            to={"/projects#ongoing"}
          >
            <Button variant="outlined">View More</Button>
          </HashLink>
        </Box>
      </Container>
      <Container maxWidth="xl" sx={{ marginY: "8vh" }}>
        <Typography variant="h5" marginBottom="3vh">
          Upcoming Projects
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {upcomingProjList()}
        </Grid>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "3vh",
          }}
        >
          <HashLink
            style={{ textDecoration: "none" }}
            scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
            to={"/projects#upcoming"}
          >
            <Button variant="outlined">View More</Button>
          </HashLink>
        </Box>
      </Container>
    </>
  );
}
