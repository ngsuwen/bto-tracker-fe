import * as React from "react";
import addProjectApi from "../../api/addProject";

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

export default function AddBto() {
  // useStates
  const [state, setState] = React.useState({
    r2: false,
    r3: false,
    r4: false,
    r5: false,
    gen: false,
  });

  // useRefs
  const nameRef = React.useRef()
  const locationRef = React.useRef()
  const launchRef = React.useRef()
  const priceLowR2Ref = React.useRef()
  const priceHighR2Ref = React.useRef()
  const r2UnitsRef = React.useRef()
  const priceLowR3Ref = React.useRef()
  const priceHighR3Ref = React.useRef()
  const r3UnitsRef = React.useRef()
  const priceLowR4Ref = React.useRef()
  const priceHighR4Ref = React.useRef()
  const r4UnitsRef = React.useRef()
  const priceLowR5Ref = React.useRef()
  const priceHighR5Ref = React.useRef()
  const r5UnitsRef = React.useRef()
  const priceLowGenRef = React.useRef()
  const priceHighGenRef = React.useRef()
  const genUnitsRef = React.useRef()
  const unitsRef = React.useRef()
  const articlesRef = React.useRef()
  const statusRef = React.useRef()
  const previewUrlRef = React.useRef()
  const locationUrlRef = React.useRef()

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const submitHandler = async() => {
    const obj = {
      "name": nameRef.current.value,
      "location": locationRef.current.value,
      "launch": launchRef.current.value,
      "no_of_units": unitsRef.current.value,
      "unit_breakdown": [r2?r2UnitsRef.current.value:0, r3?r3UnitsRef.current.value:0, r4?r4UnitsRef.current.value:0, r5?r5UnitsRef.current.value:0, gen?genUnitsRef.current.value:0],
      "price_range_2R": r2? [priceLowR2Ref.current.value, priceHighR2Ref.current.value] : null,
      "price_range_3R": r3? [priceLowR3Ref.current.value, priceHighR3Ref.current.value] : null,
      "price_range_4R": r4? [priceLowR4Ref.current.value, priceHighR4Ref.current.value] : null,
      "price_range_5R": r5? [priceLowR5Ref.current.value, priceHighR5Ref.current.value] : null,
      "price_range_3Gen": gen? [priceLowGenRef.current.value, priceHighGenRef.current.value] : null,
      "status": statusRef.current.checked?"ongoing":"upcoming",
      "articles": articlesRef.current.value,
      "preview_url": previewUrlRef.current.value,
      "location_url": locationUrlRef.current.value,
    }
    await addProjectApi(obj, state)
  };

  const { r2, r3, r4, r5, gen } = state;

  return (
    <Container maxWidth="md">
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ marginTop: "3rem", marginBottom: "3vh" }}
      >
        Add new project
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginTop: "0.5rem", marginBottom: "3vh", textAlign: "justify" }}
      >
        Newly added projects are assumed to not have any admins and data scapers. To update this info, please use this form after creation.
      </Typography>


      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom: "1vh", textAlign: "justify" }}
      >
        Name
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginTop: "0.5rem", marginBottom: "3vh", textAlign: "justify" }}
      >
        Eg. Machperson Weave
      </Typography>

      <TextField inputRef={nameRef} fullWidth sx={{ marginBottom: "3vh" }} />

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom: "1vh", textAlign: "justify" }}
      >
        Location
      </Typography>

      <Typography
        variant="body2"
        sx={{ marginTop: "0.5rem", marginBottom: "3vh", textAlign: "justify" }}
      >
        Eg. Geylang
      </Typography>

      <TextField inputRef={locationRef} fullWidth sx={{ marginBottom: "3vh" }} />

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom: "1vh", textAlign: "justify" }}
      >
        Launch
      </Typography>

      <Typography
        variant="body2"
        sx={{ marginTop: "0.5rem", marginBottom: "3vh", textAlign: "justify" }}
      >
        Eg. may2021geylang
      </Typography>

      <TextField inputRef={launchRef} fullWidth sx={{ marginBottom: "3vh" }} />

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom: "1vh", textAlign: "justify" }}
      >
        Total no. of units
      </Typography>

      <TextField inputRef={unitsRef} fullWidth type="number" sx={{ marginBottom: "3vh" }} />

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
                type="number"
                inputRef={priceLowR2Ref}
              />
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="highest price"
                type="number"
                inputRef={priceHighR2Ref}
              />
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="no. of units"
                type="number"
                inputRef={r2UnitsRef}
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
                type="number"
                inputRef={priceLowR3Ref}
              />
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="highest price"
                type="number"
                inputRef={priceHighR3Ref}
              />
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="no. of units"
                type="number"
                inputRef={r3UnitsRef}
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
                type="number"
                inputRef={priceLowR4Ref}
              />
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="highest price"
                type="number"
                inputRef={priceHighR4Ref}
              />
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="no. of units"
                type="number"
                inputRef={r4UnitsRef}
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
                type="number"
                inputRef={priceLowR5Ref}
              />
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="highest price"
                type="number"
                inputRef={priceHighR5Ref}
              />
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="no. of units"
                type="number"
                inputRef={r5UnitsRef}
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
                type="number"
                inputRef={priceLowGenRef}
              />
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="highest price"
                type="number"
                inputRef={priceHighGenRef}
              />
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="no. of units"
                type="number"
                inputRef={genUnitsRef}
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

      <TextField inputRef={articlesRef} fullWidth sx={{ marginBottom: "3vh" }} />

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
          <FormControlLabel inputRef={statusRef} value="ongoing" control={<Radio />} label="Ongoing" />
          <FormControlLabel value="upcoming" control={<Radio />} label="Upcoming" />
        </RadioGroup>
      </FormControl>

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom: "1vh", textAlign: "justify" }}
      >
        Preview Image URL
      </Typography>

      <TextField inputRef={previewUrlRef} fullWidth sx={{ marginBottom: "3vh" }} />

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom: "1vh", textAlign: "justify" }}
      >
        Location Image URL
      </Typography>

      <TextField inputRef={locationUrlRef} fullWidth sx={{ marginBottom: "3vh" }} />

      {/* ---------------------------------------------------------------------------------- */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "8vh",
        }}
      >
        <Button onClick={submitHandler} variant="outlined">Add new</Button>
      </Box>
    </Container>
  );
}
