import * as React from "react";
import {
  Container,
  Typography,
  Checkbox,
  FormControl,
  FormGroup,
  FormControlLabel,
  TextField,
  Button,
  Box,
  Grid,
  Radio,
  RadioGroup
} from "@mui/material";

export default function EditBto() {
  const [state, setState] = React.useState({
    r2: false,
    r3: false,
    r4: false,
    r5: false,
    gen: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { r2, r3, r4, r5, gen } = state;

  return (
    <Container maxWidth="md">
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ marginTop: "3rem", marginBottom: "3vh" }}
      >
        Project name here
      </Typography>

      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom: "1vh", textAlign: "justify" }}
      >
        Name
      </Typography>

      <TextField fullWidth sx={{ marginBottom: "3vh" }} />

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom: "1vh", textAlign: "justify" }}
      >
        Location
      </Typography>

      <TextField fullWidth sx={{ marginBottom: "3vh" }} />

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom: "1vh", textAlign: "justify" }}
      >
        Launch
      </Typography>

      <TextField fullWidth sx={{ marginBottom: "3vh" }} />

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom: "1vh", textAlign: "justify" }}
      >
        Total no. of units
      </Typography>

      <TextField fullWidth sx={{ marginBottom: "3vh" }} />

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom: "1vh", textAlign: "justify" }}
      >
        Types of units
      </Typography>

      <FormControl variant="standard" sx={{marginBottom: "3vh"}}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={r2} onChange={handleChange} name="r2" />
            }
            label="2-Room"
          />
          {r2 ? (
            <Grid>
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="lowest price"
              />
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="highest price"
              />
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="no. of units"
              />
            </Grid>
          ) : (
            ""
          )}
          <FormControlLabel
            control={
              <Checkbox checked={r3} onChange={handleChange} name="r3" />
            }
            label="3-Room"
          />
          {r3 ? (
            <Grid>
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="lowest price"
              />
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="highest price"
              />
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="no. of units"
              />
            </Grid>
          ) : (
            ""
          )}
          <FormControlLabel
            control={
              <Checkbox checked={r4} onChange={handleChange} name="r4" />
            }
            label="4-Room"
          />
          {r4 ? (
            <Grid>
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="lowest price"
              />
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="highest price"
              />
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="no. of units"
              />
            </Grid>
          ) : (
            ""
          )}
          <FormControlLabel
            control={
              <Checkbox checked={r5} onChange={handleChange} name="r5" />
            }
            label="5-Room"
          />
          {r5 ? (
            <Grid>
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="lowest price"
              />
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="highest price"
              />
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="no. of units"
              />
            </Grid>
          ) : (
            ""
          )}
          <FormControlLabel
            control={
              <Checkbox checked={gen} onChange={handleChange} name="gen" />
            }
            label="3-Gen"
          />
          {gen ? (
            <Grid>
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="lowest price"
              />
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="highest price"
              />
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="no. of units"
              />
            </Grid>
          ) : (
            ""
          )}
        </FormGroup>
      </FormControl>

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom: "1vh", textAlign: "justify" }}
      >
        Articles
      </Typography>

      <TextField fullWidth sx={{ marginBottom: "3vh" }} />

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom: "1vh", textAlign: "justify" }}
      >
        Status
      </Typography>

      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          sx={{ marginBottom: "3vh" }}
        >
          <FormControlLabel value="ongoing" control={<Radio />} label="Ongoing" />
          <FormControlLabel value="upcoming" control={<Radio />} label="Upcoming" />
        </RadioGroup>
      </FormControl>

      {/* ---------------------------------------------------------------------------------- */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "8vh",
        }}
      >
        <Button variant="outlined">Edit</Button>
      </Box>
    </Container>
  );
}
