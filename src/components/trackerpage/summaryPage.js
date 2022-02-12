// if no data yet
// need to plan how to organize data

import * as React from "react";
import {
  Container,
  Typography,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Tabs from "./trackerTabs";

export default function Summary() {

  return (
    <>
    <Tabs/>
    <Container maxWidth="md">

      <TableContainer
        sx={{ boxShadow: 0, marginBottom: "3rem" }}
        component={Paper}
      >
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableCell sx={{ width: 100, fontWeight:"bold" }}>Unit Type</TableCell>
            <TableCell sx={{ width: 100, fontWeight:"bold" }}>Units Left</TableCell>
            <TableCell sx={{ width: 100, fontWeight:"bold" }}>Malay</TableCell>
            <TableCell sx={{ width: 100, fontWeight:"bold" }}>Chinese</TableCell>
            <TableCell sx={{ width: 100, fontWeight:"bold" }}>Indian / Others</TableCell>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th">3-Room</TableCell>
              <TableCell sx={{ width: 100 }}>156</TableCell>
              <TableCell sx={{ width: 100 }}>55</TableCell>
              <TableCell sx={{ width: 100 }}>32</TableCell>
              <TableCell sx={{ width: 100 }}>26</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th">4-Room</TableCell>
              <TableCell sx={{ width: 100 }}>156</TableCell>
              <TableCell sx={{ width: 100 }}>55</TableCell>
              <TableCell sx={{ width: 100 }}>32</TableCell>
              <TableCell sx={{ width: 100 }}>26</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th">5-Room</TableCell>
              <TableCell sx={{ width: 100 }}>156</TableCell>
              <TableCell sx={{ width: 100 }}>55</TableCell>
              <TableCell sx={{ width: 100 }}>32</TableCell>
              <TableCell sx={{ width: 100 }}>26</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h6" fontWeight="bold" sx={{ marginTop: "1.5rem" }}>
        3-Room
      </Typography>
      <Typography variant="body2">
        <br />
        <Grid container>
          <Grid item xs={2}>
            27/08
          </Grid>
          <Grid item xs={9} sx={{ textAlign: "left" }}>
            064 - 070 (6)
          </Grid>
          <Grid item xs={2}>
            28/08
          </Grid>
          <Grid item xs={9} sx={{ textAlign: "left" }}>
            071 - 077 (6)
          </Grid>
        </Grid>
      </Typography>

      <Divider sx={{ marginY: "1.5rem" }} />

      <Typography variant="h6" fontWeight="bold" sx={{ marginTop: "1.5rem" }}>
        4-Room
      </Typography>
      <Typography variant="body2">
        <br />
        <Grid container>
          <Grid item xs={2}>
            27/08
          </Grid>
          <Grid item xs={9} sx={{ textAlign: "left" }}>
            064 - 070 (6)
          </Grid>
          <Grid item xs={2}>
            28/08
          </Grid>
          <Grid item xs={9} sx={{ textAlign: "left" }}>
            071 - 077 (6)
          </Grid>
        </Grid>
      </Typography>

      <Divider sx={{ marginY: "1.5rem" }} />

      <Typography variant="h6" fontWeight="bold" sx={{ marginTop: "1.5rem" }}>
        5-Room
      </Typography>
      <Typography variant="body2">
        <br />
        <Grid container>
          <Grid item xs={2}>
            27/08
          </Grid>
          <Grid item xs={9} sx={{ textAlign: "left" }}>
            064 - 070 (6)
          </Grid>
          <Grid item xs={2}>
            28/08
          </Grid>
          <Grid item xs={9} sx={{ textAlign: "left" }}>
            071 - 077 (6)
          </Grid>
        </Grid>
      </Typography>
      <Divider sx={{ marginY: "1.5rem" }} />
    </Container>
    </>
  );
}
