// check if got data
// if got favourite, redirect to tracker page

import * as React from "react";
import { Container, Typography, Grid } from "@mui/material";
import TrackerCard from "./trackerCard";

export default function TrackerOverview() {
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
            <Grid item lg={3}>
              <TrackerCard />
            </Grid>

          </Grid>
        </Container>
    </>
  );
}
