// api call for project list
// pass props for projectCard

import * as React from "react";
import { Container, Typography, Grid } from "@mui/material";
import ProjectCard from "../homePage/projectCard";
import { DataContext } from "../../App";

export default function ProjectList() {
    // context
    const { ongoing, upcoming } = React.useContext(DataContext)

    // ongoing function
    const ongoingProjList=()=>{
      let ongoingProjArr=[];
        ongoing.forEach((element)=>
        ongoingProjArr.push(<Grid item lg={3}><ProjectCard project={element}/></Grid>)
        )
      return ongoingProjArr
    }
  
    // upcoming function
    const upcomingProjList=()=>{
      let upcomingProjArr=[];
        upcoming.forEach((element)=>
        upcomingProjArr.push(<Grid item lg={3}><ProjectCard project={element}/></Grid>)
        )
      return upcomingProjArr
    }
    
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
            {ongoingProjList()}
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
            {upcomingProjList()}
          </Grid>
        </Container>
      </section>
    </>
  );
}
