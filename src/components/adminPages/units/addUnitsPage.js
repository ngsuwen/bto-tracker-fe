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
  Select
} from "@mui/material";
import getProjectList from "../../api/getProjectList"
import addUnitApi from "../../api/addUnit"

export default function AddUnits() {

  // useStates
  const [proj, setProj] = React.useState("");
  const [launchArr, setLaunchArr] = React.useState([]);
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

  const projHandleChange = (event) => {
    setProj(event.target.value);
  };

  const radioHandler=(a,b,c,d,e)=>{
    setState({
      r2: a,
      r3: b,
      r4: c,
      r5: d,
      gen: e,
    })
  }

  const submitHandler = async() => {
    const obj = {
      "launch": proj,
      "blk": blk,
      "unit": floors+'-'+unitNo,
      "unit_type": "r5",
    }
    await addUnitApi(obj)
    console.log(await addUnitApi(obj))
  };

  React.useEffect(()=>{
    let arr=[]
    const fetchData=async()=>{
      const projectArr = await getProjectList();
      projectArr.forEach((element, index)=>arr.push(<MenuItem value={index}>{element.launch}</MenuItem>))
      setLaunchArr(arr)
    }
    fetchData()
  },[])

  return (
    <Container maxWidth="md">
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
        To edit the availability and individual unit price, please use <a href="#/">this page</a> after successfully adding the units. This form is meant to submit ONE unit number for ONE blk. To submit multiple unit numbers across different blks, please resubmit this form accordingly.
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
        Blk
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginBottom: "1vh", textAlign: "justify" }}
      >
        Eg. 99B
      </Typography>

      <TextField value={blk} onChange={(event) => {setBlk(event.target.value)}} fullWidth sx={{ marginBottom: "3vh" }} />

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

      <TextField value={unitNo} onChange={(event) => {setUnitNo(event.target.value)}} fullWidth sx={{ marginBottom: "3vh" }} />

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
        Eg: 02 to 23
      </Typography>

      <TextField value={floors} onChange={(event) => {setFloors(event.target.value)}} fullWidth sx={{ marginBottom: "3vh" }} />

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
        Eg: 05, 06, 07, 13
      </Typography>

      <TextField value={except} onChange={(event) => {setExcept(event.target.value)}} fullWidth sx={{ marginBottom: "3vh" }} />

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
          <FormControlLabel checked={r2} onClick={()=>radioHandler(true,false,false,false,false)} value="r2" control={<Radio />} label="2-Room" />
          <FormControlLabel checked={r3} onClick={()=>radioHandler(false,true,false,false,false)} value="r3" control={<Radio />} label="3-Room" />
          <FormControlLabel checked={r4} onClick={()=>radioHandler(false,false,true,false,false)} value="r4" control={<Radio />} label="4-Room" />
          <FormControlLabel checked={r5} onClick={()=>radioHandler(false,false,false,true,false)} value="r5" control={<Radio />} label="5-Room" />
          <FormControlLabel checked={gen} onClick={()=>radioHandler(false,false,false,false,true)} value="gen" control={<Radio />} label="3-Gen" />
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
        <Button onClick={submitHandler} variant="outlined">Add new</Button>
      </Box>
    </Container>
  );
}
