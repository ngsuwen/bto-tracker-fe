// check if got data
// if got favourite, redirect to tracker page

import * as React from "react";
import { Container, Typography, Grid } from "@mui/material";
import TrackerCard from "./trackerCard";

export default function TrackerOverview() {
  const [watchlist, setWatchlist] = React.useState([]);

  // get watchlist
  const getWatchlist = () => {
    let watchlistArr = [];
    watchlist.forEach((element) =>
      watchlistArr.push(
        <Grid item lg={3}>
          <TrackerCard name={element}/>
        </Grid>
      )
    );
    return watchlistArr;
  };

  React.useEffect(()=>{
    var storedWatchlist = JSON.parse(localStorage.watchlist);
    setWatchlist(storedWatchlist)
  })

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
          {getWatchlist()}
        </Grid>
      </Container>
    </>
  );
}
