import * as React from "react";
import {
  Container,
  Typography,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  TextField,
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  RadioGroup,
  Radio,
  FormControlLabel
} from "@mui/material";
import { DataContext } from "../../App";
import addUnitFeedbackApi from "../api/addUnitFeedback";
import { create } from 'ipfs-http-client'

const url = 'https://ipfs.infura.io:5001/api/v0'
const client = create(url)

export default function AppDateForm() {
  const { projList } = React.useContext(DataContext);

  const [proj, setProj] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState();
  const [availability, setAvailability] = React.useState(false)

  const unitRef = React.useRef();
  const numberRef = React.useRef();
  const [validation, setValidation] = React.useState();

  const projHandleChange = (event) => {
    setProj(event.target.value);
  };

  const handleClose = () => {
    if (message === "Form submitted. Thank you for your contribution.") {
      window.location.reload();
    }
    setOpen(false);
  };

  const submitHandler = async () => {
    const obj = {
      launch: proj,
      unit: unitRef.current.value,
      availability: availability,
      blk: validation,
    };
    console.log(obj)
    const unitSubmit = await addUnitFeedbackApi(obj);
    if (unitSubmit.message) {
      setMessage("Form submit failed. Please check your fields again.");
      setOpen(true);
    } else {
      setMessage("Form submitted. Thank you for your contribution.");
      setOpen(true);
    }
  };

  // file upload
  const onFileUpload = async (e) => {
    const file = e.target.files[0]
    try {
      const addedFile = await client.add(file)
      const url = `https://ipfs.infura.io/ipfs/${addedFile.path}`
      setValidation(url)
    } catch (err) {
      console.log('Error uploading file: ', err)
    }
  }

  const launchArr = () => {
    let arr = [];
    projList.forEach((element, index) => {
      arr.push(
        <MenuItem value={element}>
          {element[0].toUpperCase() +
            element.slice(1, 3) +
            " " +
            element.slice(3, 7) +
            " " +
            element[7].toUpperCase() +
            element.slice(8)}
        </MenuItem>
      );
    });
    return arr;
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "3rem" }}>
        Feedback Form
      </Typography>

      <Typography
        variant="body2"
        sx={{ marginTop: "0.5rem", marginBottom: "3vh", textAlign: "justify" }}
      >
        If you have selected a unit / realised that a unit is wrongly stated, you can use this form to inform us about the error. 
      </Typography>

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom: "1vh", textAlign: "justify" }}
      >
        BTO project
      </Typography>

      <FormControl fullWidth sx={{ marginBottom: "3vh" }}>
        <InputLabel id="demo-simple-select-label">BTO project</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={proj}
          label="BTO project"
          onChange={projHandleChange}
        >
          {launchArr()}
        </Select>
      </FormControl>

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", textAlign: "justify" }}
      >
        Unit Number
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginBottom: "1vh", textAlign: "justify" }}
      >
        Please state the unit number that is showing wrongly, eg. 04-201
      </Typography>

      <TextField inputRef={unitRef} fullWidth sx={{ marginBottom: "3vh" }} />

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom: "1vh", textAlign: "justify" }}
      >
        What should it be?
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginBottom: "1vh", textAlign: "justify" }}
      >
        Availability of unit
      </Typography>

      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          sx={{ marginBottom: "3vh" }}
        >
          <FormControlLabel onFocus={()=>setAvailability(true)} value="yes" control={<Radio />} label="Availabile" />
          <FormControlLabel onFocus={()=>setAvailability(false)} value="no" control={<Radio />} label="Taken" />
        </RadioGroup>
      </FormControl>


      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", textAlign: "justify" }}
      >
        Validation
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginBottom: "1vh", textAlign: "justify" }}
      >
        This is for us to verify if your information is reliable. This can be a screenshot of the HDB page. Please censor any sensitive information if necessary.
      </Typography>

      <TextField onChange={onFileUpload} type="file" fullWidth sx={{ marginBottom: "3vh" }} />

      {/* ---------------------------------------------------------------------------------- */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "8vh",
        }}
      >
        <Button onClick={submitHandler} variant="outlined">
          Submit form
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
