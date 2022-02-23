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
  FormControlLabel,
  Radio
} from "@mui/material";
import createUserRequestApi from "../api/createUserRequest";
import { DataContext } from "../../App";
import { create } from 'ipfs-http-client'

const url = 'https://ipfs.infura.io:5001/api/v0'
const client = create(url)

export default function ScraperForm() {
  const { projList } = React.useContext(DataContext);
  const [proj, setProj] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState();
  const [ script, setScript ] = React.useState(false)

  const emailRef = React.useRef();
  const messageRef = React.useRef();
  const [validation, setValidation] = React.useState();

  const handleClose = () => {
    if (message === "Form submitted. Thank you for your contribution.") {
      window.location.reload();
    }
    setOpen(false);
  };

  const submitHandler = async () => {
    const obj = {
      launch: proj,
      role: "data_scraper",
      email: emailRef.current.value,
      message: messageRef.current.value,
      validation: validation,
    };
    const formSubmit = await createUserRequestApi(obj);
    if (formSubmit.message) {
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

  const projHandleChange = (event) => {
    setProj(event.target.value);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "3rem" }}>
        Data Scraper Application Form
      </Typography>

      <Typography
        variant="body2"
        sx={{ marginTop: "0.5rem", marginBottom: "3vh", textAlign: "justify" }}
      >
        You have to be an applicant with access to the Project's units page to be a data scraper.
        Once verified, you will receive an email with your account details.
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
        Why do you want to be a data scraper?
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginBottom: "1vh", textAlign: "justify" }}
      >
        We would love to know more about you. This is also to filter spams and
        make sure that our selected data scrapers are committed.
      </Typography>

      <TextField inputRef={messageRef} multiline rows={2} fullWidth sx={{ marginBottom: "3vh" }} />

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom: "1vh", textAlign: "justify" }}
      >
        Your email address
      </Typography>

      <TextField inputRef={emailRef} fullWidth sx={{ marginBottom: "3vh" }} />

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
        Please upload a validation that you are also an applicant of the BTO
        project. This can be a screenshot of your application email/ sms. Please
        censor private information (eg. your name, address etc).
      </Typography>

      <TextField onChange={onFileUpload} type="file" fullWidth sx={{ marginBottom: "3vh" }} />

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", textAlign: "justify" }}
      >
        Do you have a script ready?
      </Typography>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          sx={{ marginBottom: "3vh" }}
        >
          <FormControlLabel onFocus={()=>setScript(true)} value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel onFocus={()=>setScript(false)} value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      {/* ---------------------------------------------------------------------------------- */}
      {script?
      <>
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", textAlign: "justify" }}
      >
        Are you willing to share your script?
      </Typography>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          sx={{ marginBottom: "3vh" }}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      </>:""}

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