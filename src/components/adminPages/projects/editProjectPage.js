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
  RadioGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useParams } from "react-router-dom";
import editProjectApi from "../../api/editProject";
import findProjectApi from "../../api/findProject";

export default function EditBto() {
  let { launch } = useParams();

  // useStates
  const [state, setState] = React.useState({
    r2: false,
    r3: false,
    r4: false,
    r5: false,
    gen: false,
  });
  const [projName, setProjName] = React.useState();
  const [location, setLocation] = React.useState();
  const [projLaunch, setLaunch] = React.useState();
  const [priceLowR2, setPriceLowR2] = React.useState();
  const [priceHighR2, setPriceHighR2] = React.useState();
  const [r2Units, setR2Units] = React.useState();
  const [priceLowR3, setPriceLowR3] = React.useState();
  const [priceHighR3, setPriceHighR3] = React.useState();
  const [r3Units, setR3Units] = React.useState();
  const [priceLowR4, setPriceLowR4] = React.useState();
  const [priceHighR4, setPriceHighR4] = React.useState();
  const [r4Units, setR4Units] = React.useState();
  const [priceLowR5, setPriceLowR5] = React.useState();
  const [priceHighR5, setPriceHighR5] = React.useState();
  const [r5Units, setR5Units] = React.useState();
  const [priceLowGen, setPriceLowGen] = React.useState();
  const [priceHighGen, setPriceHighGen] = React.useState();
  const [genUnits, setGenUnits] = React.useState();
  const [units, setUnits] = React.useState();
  const [articles, setArticles] = React.useState();
  const [status, setStatus] = React.useState();
  const [previewUrl, setPreviewUrl] = React.useState();
  const [locationUrl, setLocationUrl] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState();

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const handleClose = () => {
    if (message==="Edited project successfully."){
      window.location.href = "#/dashboard"
    }
    setOpen(false);
  };


  const submitHandler = async () => {
    const obj = {
      name: projName,
      location: location,
      launch: projLaunch,
      no_of_units: units,
      preview_url: previewUrl,
      location_url: locationUrl,
      unit_breakdown: [
        r2 ? r2Units: 0,
        r3 ? r3Units: 0,
        r4 ? r4Units: 0,
        r5 ? r5Units: 0,
        gen ? genUnits: 0,
      ],
      price_range_2R: r2
        ? [priceLowR2, priceHighR2]
        : null,
      price_range_3R: r3
        ? [priceLowR3, priceHighR3]
        : null,
      price_range_4R: r4
        ? [priceLowR4, priceHighR4]
        : null,
      price_range_5R: r5
        ? [priceLowR5, priceHighR5]
        : null,
      price_range_3Gen: gen
        ? [priceLowGen, priceHighGen]
        : null,
      status: status,
      articles: articles,
    };
    const result = await editProjectApi(launch, obj, state);
    console.log(result)
    if (result.message) {
      setMessage("Edit failed. Please check your fields again.");
      setOpen(true);
    } else {
      setMessage("Edited project successfully.");
      setOpen(true);
    }
  };

  const { r2, r3, r4, r5, gen } = state;

  React.useEffect(() => {
    const fetchData = async () => {
      const projectToEdit = await findProjectApi(launch);
      setProjName(projectToEdit.name);
      setLocation(projectToEdit.location);
      setLaunch(projectToEdit.launch);
      setState({
        r2: projectToEdit.unit_breakdown[0]===0?false:true,
        r3: projectToEdit.unit_breakdown[1]===0?false:true,
        r4: projectToEdit.unit_breakdown[2]===0?false:true,
        r5: projectToEdit.unit_breakdown[3]===0?false:true,
        gen: projectToEdit.unit_breakdown[4]===0?false:true,
      });
      setPriceLowR2(projectToEdit.price_range_2R?projectToEdit.price_range_2R[0].value : null);
      setPriceHighR2(projectToEdit.price_range_2R?projectToEdit.price_range_2R[1].value : null);
      setR2Units(projectToEdit.unit_breakdown[0]);
      setPriceLowR3(projectToEdit.price_range_3R?projectToEdit.price_range_3R[0].value : null);
      setPriceHighR3(projectToEdit.price_range_3R?projectToEdit.price_range_3R[1].value : null);
      setR3Units(projectToEdit.unit_breakdown[1]);
      setPriceLowR4(projectToEdit.price_range_4R?projectToEdit.price_range_4R[0].value : null);
      setPriceHighR4(projectToEdit.price_range_4R?projectToEdit.price_range_4R[1].value : null);
      setR4Units(projectToEdit.unit_breakdown[2]);
      setPriceLowR5(projectToEdit.price_range_5R?projectToEdit.price_range_5R[0].value : null);
      setPriceHighR5(projectToEdit.price_range_5R?projectToEdit.price_range_5R[1].value : null);
      setR5Units(projectToEdit.unit_breakdown[3]);
      setPriceLowGen(projectToEdit.price_range_3Gen?projectToEdit.price_range_3Gen[0].value : null);
      setPriceHighGen(projectToEdit.price_range_3Gen?projectToEdit.price_range_3Gen[1].value : null);
      setGenUnits(projectToEdit.unit_breakdown[4]);
      setUnits(projectToEdit.no_of_units);
      setArticles(projectToEdit.articles.join(","));
      setStatus(projectToEdit.status);
      setPreviewUrl(projectToEdit.preview_url);
      setLocationUrl(projectToEdit.location_url);
    };
    fetchData();
  },[]);

  return (
    <Container maxWidth="md">
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ marginTop: "3rem", marginBottom: "3vh" }}
      >
        Edit project
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

      <TextField value={projName} onChange={(event) => {setProjName(event.target.value)}} fullWidth sx={{ marginBottom: "3vh" }} />

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

      <TextField
        value={location} onChange={(event) => {setLocation(event.target.value)}}
        fullWidth
        sx={{ marginBottom: "3vh" }}
      />

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

      <TextField value={projLaunch} onChange={(event) => {setLaunch(event.target.value)}} fullWidth sx={{ marginBottom: "3vh" }} />

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom: "1vh", textAlign: "justify" }}
      >
        Total no. of units
      </Typography>

      <TextField
        value={units} onChange={(event) => {setUnits(event.target.value)}}
        fullWidth
        type="number"
        sx={{ marginBottom: "3vh" }}
      />

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom: "1vh", textAlign: "justify" }}
      >
        Types of units
      </Typography>

      <FormControl variant="standard" sx={{ marginBottom: "3vh" }}>
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
                value={priceLowR2} onChange={(event) => {setPriceLowR2(event.target.value)}}
              />
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="highest price"
                type="number"
                value={priceHighR2} onChange={(event) => {setPriceHighR2(event.target.value)}}
              />
              <TextField
                sx={{ paddingY: 1, paddingRight: 2 }}
                size="small"
                placeholder="no. of units"
                type="number"
                value={r2Units} onChange={(event) => {setR2Units(event.target.value)}}
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
              value={priceLowR3} onChange={(event) => {setPriceLowR3(event.target.value)}}
            />
            <TextField
              sx={{ paddingY: 1, paddingRight: 2 }}
              size="small"
              placeholder="highest price"
              type="number"
              value={priceHighR3} onChange={(event) => {setPriceHighR3(event.target.value)}}
            />
            <TextField
              sx={{ paddingY: 1, paddingRight: 2 }}
              size="small"
              placeholder="no. of units"
              type="number"
              value={r3Units} onChange={(event) => {setR3Units(event.target.value)}}
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
              value={priceLowR4} onChange={(event) => {setPriceLowR4(event.target.value)}}
            />
            <TextField
              sx={{ paddingY: 1, paddingRight: 2 }}
              size="small"
              placeholder="highest price"
              type="number"
              value={priceHighR4} onChange={(event) => {setPriceHighR4(event.target.value)}}
            />
            <TextField
              sx={{ paddingY: 1, paddingRight: 2 }}
              size="small"
              placeholder="no. of units"
              type="number"
              value={r4Units} onChange={(event) => {setR4Units(event.target.value)}}
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
              value={priceLowR5} onChange={(event) => {setPriceLowR5(event.target.value)}}
            />
            <TextField
              sx={{ paddingY: 1, paddingRight: 2 }}
              size="small"
              placeholder="highest price"
              type="number"
              value={priceHighR5} onChange={(event) => {setPriceHighR5(event.target.value)}}
            />
            <TextField
              sx={{ paddingY: 1, paddingRight: 2 }}
              size="small"
              placeholder="no. of units"
              type="number"
              value={r5Units} onChange={(event) => {setR5Units(event.target.value)}}
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
              value={priceLowGen} onChange={(event) => {setPriceLowGen(event.target.value)}}
            />
            <TextField
              sx={{ paddingY: 1, paddingRight: 2 }}
              size="small"
              placeholder="highest price"
              type="number"
              value={priceHighGen} onChange={(event) => {setPriceHighGen(event.target.value)}}
            />
            <TextField
              sx={{ paddingY: 1, paddingRight: 2 }}
              size="small"
              placeholder="no. of units"
              type="number"
              value={genUnits} onChange={(event) => {setGenUnits(event.target.value)}}
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

      <TextField
        value={articles} onChange={(event) => {setArticles(event.target.value)}}
        fullWidth
        sx={{ marginBottom: "3vh" }}
      />

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
          <FormControlLabel
            checked={status==="ongoing"?true:false}
            value="ongoing"
            control={<Radio />}
            label="Ongoing"
            onClick={()=>setStatus("ongoing")}
          />
          <FormControlLabel
            checked={status==="upcoming"?true:false}
            value="upcoming"
            control={<Radio />}
            label="Upcoming"
            onClick={()=>setStatus("upcoming")}
          />
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

      <TextField
        value={previewUrl} onChange={(event) => {setPreviewUrl(event.target.value)}}
        fullWidth
        sx={{ marginBottom: "3vh" }}
      />

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom: "1vh", textAlign: "justify" }}
      >
        Location Image URL
      </Typography>

      <TextField
        value={locationUrl} onChange={(event) => {setLocationUrl(event.target.value)}}
        fullWidth
        sx={{ marginBottom: "3vh" }}
      />

      {/* ---------------------------------------------------------------------------------- */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "8vh",
        }}
      >
        <Button onClick={submitHandler} variant="outlined">
          Edit
        </Button>
      </Box>

      {/* ---------------------------------------------------------------------------------- */}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>

    </Container>
  );
}
