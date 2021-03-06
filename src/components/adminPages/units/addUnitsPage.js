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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { DataContext } from "../../../App";
import addUnitApi from "../../api/addUnit";
import { useParams } from "react-router-dom";

export default function AddUnits() {
  const { user } = React.useContext(DataContext);
  // useStates
  // const [proj, setProj] = React.useState("");
  const [blk, setBlk] = React.useState();
  const [unitNo, setUnitNo] = React.useState();
  const [floors, setFloors] = React.useState();
  const [except, setExcept] = React.useState();
  const [state, setState] = React.useState({
    r2: false,
    r3: false,
    r4: false,
    r5: false,
    gen: false,
  });
  const { r2, r3, r4, r5, gen } = state;
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState();
  const [clicked, setClicked] = React.useState(false);
  
  let { launch } = useParams();

  // React.useEffect(()=>{
  //   setProj(launch)
  // },[])

  // const projHandleChange = (event) => {
  //   setProj(event.target.value);
  // };

  const radioHandler = (a, b, c, d, e) => {
    setState({
      r2: a,
      r3: b,
      r4: c,
      r5: d,
      gen: e,
    });
  };
  
  const handleClose = () => {
    if (message === "Added units successfully.") {
      setClicked(false)
      window.location.reload();
    }
    setClicked(false)
    setOpen(false);
  };

  const submitHandler = async () => {
    setClicked(true)
    try {
      let floorRange = floors.split(" to ");
      let floorExcept = except.split(", ");
      let lowestFloor = floorRange[0];
      while (lowestFloor < Number(floorRange[1]) + 1) {
        if (floorExcept.includes(lowestFloor.toString())) {
          lowestFloor++;
          continue;
        } else {
          let unit = "";
          if (lowestFloor < 10) {
            unit = "0" + lowestFloor;
          } else {
            unit += lowestFloor;
          }
          let unitType;
          for (let prop in state) {
            if (state[prop]) {
              unitType = prop;
            }
          }
          const obj = {
            launch: launch,
            blk: blk,
            unit: unit + "-" + unitNo,
            unit_type: unitType,
          };
          const result = await addUnitApi(obj);
          if (result.message) {
            setMessage("Add failed. Please check your fields again.");
            setOpen(true);
            return;
          }
        }
        lowestFloor++;
      }
      setMessage("Added units successfully.");
      setOpen(true);
    } catch (err) {
      setMessage("Add failed. Please check your fields again.");
      setOpen(true);
    }
  };

  // const launchArr = () => {
  //   let arr = [];
  //   projList.forEach((element, index) => {
  //     arr.push(
  //       <MenuItem value={element}>
  //         {element[0].toUpperCase() +
  //           element.slice(1, 3) +
  //           " " +
  //           element.slice(3, 7) +
  //           " " +
  //           element[7].toUpperCase() +
  //           element.slice(8)}
  //       </MenuItem>
  //     );
  //   });
  //   return arr;
  // };

  return (
    <Container maxWidth="md">
      {user?
      <>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ marginTop: "3rem", marginBottom: "3vh" }}
      >
        Add units to existing project
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginTop: "0.5rem", marginBottom: "3vh", textAlign: "justify" }}
      >
        To edit the availability and individual unit price, please use{" "}
        <a href="#/">this page</a> after successfully adding the units. This
        form is meant to submit ONE unit number for ONE blk. To submit multiple
        unit numbers across different blks, please resubmit this form
        accordingly.
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
        {/* <InputLabel id="demo-simple-select-label">BTO project</InputLabel> */}
        {/* <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={proj}
          label="BTO project"
          onChange={projHandleChange}
        >
          {launchArr()}
        </Select> */}
        <TextField
          id="outlined-read-only-input"
          defaultValue={launch[0].toUpperCase()+launch.slice(1,3)+' '+launch.slice(3,7)+' '+launch[7].toUpperCase()+launch.slice(8)}
          InputProps={{
            readOnly: true,
          }}
        />
      </FormControl>

      {/* ---------------------------------------------------------------------------------- */}
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ marginTop: "0.5rem", marginBottom: "1vh", textAlign: "justify" }}
      >
        Blk
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginBottom: "1vh", textAlign: "justify" }}
      >
        Eg. 99B
      </Typography>

      <TextField
        value={blk}
        onChange={(event) => {
          setBlk(event.target.value);
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
        Unit number
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginBottom: "1vh", textAlign: "justify" }}
      >
        Eg: 1024
      </Typography>

      <TextField
        value={unitNo}
        onChange={(event) => {
          setUnitNo(event.target.value);
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
        Floors
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginBottom: "1vh", textAlign: "justify" }}
      >
        Eg: 2 to 23
      </Typography>

      <TextField
        value={floors}
        onChange={(event) => {
          setFloors(event.target.value);
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
        Exceptions
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginBottom: "1vh", textAlign: "justify" }}
      >
        Eg: 5, 6, 7, 13
      </Typography>

      <TextField
        value={except}
        onChange={(event) => {
          setExcept(event.target.value);
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
        Types of units
      </Typography>

      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          sx={{ marginBottom: "3vh" }}
        >
          <FormControlLabel
            checked={r2}
            onClick={() => radioHandler(true, false, false, false, false)}
            value="r2"
            control={<Radio />}
            label="2-Room"
          />
          <FormControlLabel
            checked={r3}
            onClick={() => radioHandler(false, true, false, false, false)}
            value="r3"
            control={<Radio />}
            label="3-Room"
          />
          <FormControlLabel
            checked={r4}
            onClick={() => radioHandler(false, false, true, false, false)}
            value="r4"
            control={<Radio />}
            label="4-Room"
          />
          <FormControlLabel
            checked={r5}
            onClick={() => radioHandler(false, false, false, true, false)}
            value="r5"
            control={<Radio />}
            label="5-Room"
          />
          <FormControlLabel
            checked={gen}
            onClick={() => radioHandler(false, false, false, false, true)}
            value="gen"
            control={<Radio />}
            label="3-Gen"
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
        <Button disabled={clicked} onClick={submitHandler} variant="outlined">
          {clicked?"Adding...":"Add new"}
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
      </>:""}
    </Container>
  );
}
