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

export default function AdminForm() {
  const [proj, setProj] = React.useState("");

  const projHandleChange = (event) => {
    setProj(event.target.value);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "3rem" }}>
        Admin Application Form
      </Typography>

      <Typography
        variant="body2"
        sx={{ marginTop: "0.5rem", marginBottom: "3vh", textAlign: "justify" }}
      >
        It is preferable that the admin is also an applicant of the BTO project. Once verified, you will receive a sign-up link sent to your email. 
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
        Why do you want to be an admin?
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginBottom: "1vh", textAlign: "justify" }}
      >
        We would love to know more about you. This is also to filter spams and make sure that our selected admins are committed.
      </Typography>

      <TextField multiline rows={2} fullWidth sx={{ marginBottom: "3vh" }} />

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom:"1vh", textAlign: "justify" }}
      >
        Your email address
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
        Please upload a validation that you are also an applicant of the BTO project. This can be a screenshot of your application email/ sms. Please censor private information (eg. your name, address etc).
      </Typography>

      <TextField fullWidth sx={{ marginBottom: "3vh" }} />

    {/* ---------------------------------------------------------------------------------- */}
    <Box sx={{ display:"flex", justifyContent:"flex-end",  marginBottom: "8vh" }}>
    <Button variant="outlined">Submit form</Button>
    </Box>
    </Container>
  );
}
