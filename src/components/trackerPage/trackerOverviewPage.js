// check if got data
// if got favourite, redirect to tracker page

import * as React from "react";
import { Container, Typography, Grid } from "@mui/material";
import TrackerCard from "./trackerCard";
import getProjectListApi from "../api/getProjectList";

export default function TrackerOverview() {
  const [watchlist, setWatchlist] = React.useState([]);
  const [projList, setProjList] = React.useState([]);

  // get watchlist
  const getWatchlist = () => {
    let watchlistArr = [];
    watchlist.forEach((element, index) =>{
      watchlistArr.push(
        <Grid item lg={3}>
          <TrackerCard project={projList[index]}/>
        </Grid>
      )
      }
    );
    return watchlistArr;
  };

  React.useEffect(()=>{
    var storedWatchlist = JSON.parse(localStorage.watchlist);
    setWatchlist(storedWatchlist)
    let projArr=[]
    const fetchData=async()=>{
      const proj = await getProjectListApi();
      storedWatchlist.forEach((element)=>{
        projArr.push(proj.filter((value)=>value.name===element))
      })
      setProjList(projArr)
    }
    fetchData()
  },[])

  return (
    <>
      <Container maxWidth="xl" sx={{ marginBottom: "8vh", marginTop: "8vh" }}>
        <Typography variant="h5" marginBottom="3vh">
          Watchlist
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {projList.length>0 && watchlist.length>0?getWatchlist():""}
        </Grid>
      </Container>
    </>
  );
}
