import * as React from "react";
import {
  Container,
  Typography,
  FormControl,
  FormControlLabel,
  TextField,
  Button,
  Box,
  Radio,
  RadioGroup,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import getProjectList from "../../api/getProjectList";
import addUserApi from "../../api/addUser";

export default function AddUser() {
  // useStates
  const [proj, setProj] = React.useState("");
  const [launchArr, setLaunchArr] = React.useState([]);
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [role, setRole] = React.useState();

  const projHandleChange = (event) => {
    setProj(event.target.value);
  };

  const radioHandler = (option) => {
    setRole(option);
  };

  const submitHandler = async () => {
      const obj={
          "username": username,
          "password": password,
          "role": role,
          "launch": proj
      }
      await addUserApi(obj)
  };

  React.useEffect(() => {
    let arr = [];
    const fetchData = async () => {
      const projectArr = await getProjectList();
      projectArr.forEach((element, index) =>
        arr.push(<MenuItem value={element.launch}>{element.launch[0].toUpperCase()+element.launch.slice(1,3)+' '+element.launch.slice(3,7)+' '+element.launch[7].toUpperCase()+element.launch.slice(8)}</MenuItem>)
      );
      arr.sort()
      setLaunchArr(arr);
    };
    fetchData();
  }, []);

  return (
    <Container maxWidth="md">
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ marginTop: "3rem", marginBottom: "3vh" }}
      >
        Add new user to existing project
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginTop: "0.5rem", marginBottom: "3vh", textAlign: "justify" }}
      >
        User is recommended to change their password upon first login.
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
          {launchArr}
        </Select>
      </FormControl>

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom: "1vh", textAlign: "justify" }}
      >
        Username
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginBottom: "1vh", textAlign: "justify" }}
      >
        Eg. nov-hougang-admin, feb-jurong-scraper
      </Typography>

      <TextField
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        fullWidth
        sx={{ marginBottom: "3vh" }}
      />

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom: "1vh", textAlign: "justify" }}
      >
        Password
      </Typography>

      <TextField
        value={password}
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        fullWidth
        sx={{ marginBottom: "3vh" }}
      />

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom: "1vh", textAlign: "justify" }}
      >
        Role
      </Typography>

      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          sx={{ marginBottom: "3vh" }}
        >
          <FormControlLabel
            onClick={() => radioHandler("admin")}
            value="admin"
            control={<Radio />}
            label="Admin"
          />
          <FormControlLabel
            onClick={() => radioHandler("data_scraper")}
            value="data_scraper"
            control={<Radio />}
            label="Data scraper"
          />
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
        <Button onClick={submitHandler} variant="outlined">
          Add new
        </Button>
      </Box>
    </Container>
  );
}
