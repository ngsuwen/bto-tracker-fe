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
} from "@mui/material";
import { DataContext } from "../../App";
import addQueueApi from "../api/addQueue";

export default function AppDateForm() {
  const { projList } = React.useContext(DataContext);

  const [proj, setProj] = React.useState("");
  const [qType, setQType] = React.useState("");
  const [flatType, setFlatType] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState();

  const dateRef = React.useRef();
  const numberRef = React.useRef();
  const validRef = React.useRef();

  const projHandleChange = (event) => {
    setProj(event.target.value);
  };
  const qTypeHandleChange = (event) => {
    setQType(event.target.value);
  };
  const flatTypeHandleChange = (event) => {
    setFlatType(event.target.value);
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
      date: dateRef.current.value,
      number: numberRef.current.value,
      unit_type: flatType,
      queue_type: qType,
      validation: validRef.current.value,
    };
    const queueSubmit = await addQueueApi(obj);
    if (queueSubmit.message) {
      setMessage("Form submit failed. Please check your fields again.");
      setOpen(true);
    } else {
      setMessage("Form submitted. Thank you for your contribution.");
      setOpen(true);
    }
  };

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
        BTO Appointment Dates Tracker Form
      </Typography>

      <Typography
        variant="body2"
        sx={{ marginTop: "0.5rem", marginBottom: "3vh", textAlign: "justify" }}
      >
        If you have received your appointment date and would like to share the
        information, you can submit them here.
      </Typography>

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom: "1vh", textAlign: "justify" }}
      >
        Your BTO project
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
        Your queue type
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginBottom: "1vh", textAlign: "justify" }}
      >
        If you are on the MGPS scheme and also have a public queue number,
        please fill up the form first for your MGPS queue number, then do so
        again for your public queue number.
      </Typography>

      <FormControl fullWidth sx={{ marginBottom: "3vh" }}>
        <InputLabel id="demo-simple-select-label">Queue type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={qType}
          label="Queue type"
          onChange={qTypeHandleChange}
        >
          <MenuItem value={"mgps"}>MGPS</MenuItem>
          <MenuItem value={"public"}>Public</MenuItem>
        </Select>
      </FormControl>

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", textAlign: "justify" }}
      >
        Your flat type
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginBottom: "1vh", textAlign: "justify" }}
      >
        If you are submitting this form for an MGPS appointment date, select the
        flat type for the MARRIED CHILD application.
      </Typography>

      <FormControl fullWidth sx={{ marginBottom: "3vh" }}>
        <InputLabel id="demo-simple-select-label">Flat type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={flatType}
          label="Flat type"
          onChange={flatTypeHandleChange}
        >
          <MenuItem value={"r2"}>2-Room</MenuItem>
          <MenuItem value={"r3"}>3-Room</MenuItem>
          <MenuItem value={"r4"}>4-Room</MenuItem>
          <MenuItem value={"r5"}>5-Room</MenuItem>
          <MenuItem value={"gen"}>3-Gen</MenuItem>
        </Select>
      </FormControl>

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", textAlign: "justify" }}
      >
        Your queue number
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginBottom: "1vh", textAlign: "justify" }}
      >
        You can be specific e.g. "456", or vague e.g. "45x".
      </Typography>

      <TextField inputRef={numberRef} fullWidth sx={{ marginBottom: "3vh" }} />

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom: "1vh", textAlign: "justify" }}
      >
        Your appointment date
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginBottom: "1vh", textAlign: "justify" }}
      >
        Format: YYYY-MM-DD
      </Typography>

      <TextField inputRef={dateRef} fullWidth sx={{ marginBottom: "3vh" }} />

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
        Validated submissions will be shown with a ✔️. If there are conflicting
        submissions, those with validations will be prioritized.
      </Typography>

      <TextField inputRef={validRef} fullWidth sx={{ marginBottom: "3vh" }} />

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
