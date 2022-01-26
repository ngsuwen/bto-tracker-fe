// api call for proj info
// ref parameter

import * as React from "react";
import { Container, Typography, Divider, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function Info() {
  return (
    <Container maxWidth="md">
      <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "3rem" }}>
        Hougang Olive @ Hougang
      </Typography>
      <Typography variant="body2" sx={{ marginTop: "0.5rem" }}>
        November 2021 BTO
      </Typography>
      <Typography variant="body2" color="red">
        * Volunteers required: Data scrapers, admin. Apply here.
      </Typography>
      <img
        style={{ marginTop: "1.5rem", maxWidth:"100%", width: 500 }}
        alt="render"
        src="https://cdn-blog.seedly.sg/wp-content/uploads/2021/10/17143739/Hougang-Olive-Nov-BTO-2021-768x420.jpeg"
      />
      <Typography variant="subtitle2">Source: HDB</Typography>
      <Typography
        variant="body1"
        sx={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}
      >
        To track units, click <Link style={{ textDecoration: 'none' }} to='/tracker'>here.</Link>
      </Typography>
      <Divider />

      <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "3rem" }}>
        Project Details
      </Typography>

      <Typography variant="body2" sx={{ marginTop: "0.5rem" }}>
        <b>Town: </b>Hougang
        <br />
        <br />
        <b>Flat Types & Number of Units: </b>
        <br />
        <Grid container>
          <Grid item xs={3}>
            4-Room
          </Grid>
          <Grid item xs={9} sx={{textAlign:"left"}}>
            378
          </Grid>
          <Grid item xs={3}>
            5-Room
          </Grid>
          <Grid item xs={9} sx={{textAlign:"left"}}>
            312
          </Grid>
        </Grid>
        <br />
        <b>Pricing: </b>
        <br />
        <Grid container>
          <Grid item xs={3} >
            4-Room
          </Grid>
          <Grid item xs={9} sx={{textAlign:"left"}}>
            $511,000 - $600,100
          </Grid>
          <Grid item xs={3}>
            5-Room
          </Grid>
          <Grid item xs={9} sx={{textAlign:"left"}}>
            $521,000 - $600,100
          </Grid>
        </Grid>
        <br />
        <b>Status: </b>BTO selection in progress
        <br />
      </Typography>

      <img
        style={{ marginTop: "1.5rem", maxWidth:"100%", width: 500 }}
        alt="location_map"
        src="https://cdn-blog.seedly.sg/wp-content/uploads/2021/10/17143833/Screenshot-2021-11-17-at-2.36.55-PM.png"
      />
      <Typography variant="subtitle2" sx={{ marginBottom: "1.5rem" }}>
        Source: HDB
      </Typography>

      <Typography
        variant="body2"
        sx={{ marginTop: "0.5rem", marginBottom: "1.5rem" }}
      >
        <b>Articles: </b>
        <br />
        Seedly | stackedhomes
        <br />
      </Typography>

      <Divider />
    </Container>
  );
}

export default Info;
