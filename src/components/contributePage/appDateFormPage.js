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
  Box
} from "@mui/material";

export default function AppDateForm() {
  const [proj, setProj] = React.useState("");
  const [qType, setQType] = React.useState("");
  const [flatType, setFlatType] = React.useState("");

  const projHandleChange = (event) => {
    setProj(event.target.value);
  };
  const qTypeHandleChange = (event) => {
    setQType(event.target.value);
  };
  const flatTypeHandleChange = (event) => {
    setFlatType(event.target.value);
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
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
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
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
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
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
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
        You can be specific e.g. "Q456", or vague e.g. "Q45x".
      </Typography>

      <TextField fullWidth sx={{ marginBottom: "3vh" }} />

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom:"1vh", textAlign: "justify" }}
      >
        Your appointment date
      </Typography>

      <TextField fullWidth sx={{ marginBottom: "3vh" }} />

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
        Validated submissions will be shown with a ✔️.
        If there are conflicting submissions, those with validations will be prioritized.
      </Typography>

      <TextField fullWidth sx={{ marginBottom: "3vh" }} />

    {/* ---------------------------------------------------------------------------------- */}
    <Box sx={{ display:"flex", justifyContent:"flex-end",  marginBottom: "8vh" }}>
    <Button variant="outlined">Submit form</Button>
    </Box>
    </Container>
  );
}
