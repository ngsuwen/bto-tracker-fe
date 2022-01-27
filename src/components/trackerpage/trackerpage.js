import * as React from "react";
import {
  Paper,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box
} from "@mui/material";
import { Link } from "react-router-dom";

// dummy data
import { blk, floors } from "./dummyData";

// get unit number
const unitNo = [];
for (let i = 0; i < blk.total.length; i++) {
  let unit = blk.total[i][0].substr(3);
  if (!unitNo.includes(unit)) {
    unitNo.push(unit);
  }
}

// get unittype
const unitType = [];
for (let i = 0; i < blk.total.length; i++) {
  let unit = blk.total[i][1];
  if (!unitType.includes(unit)) {
    unitType.push(unit);
  }
}

// available colors
const colorCode={
  R2:"#F4CCCC",
  R3: "#B6D7A8",
  R4: "#FFD966",
  R5: "#B1DCD4"
}

// check unit availability
function checkUnitAvaiable(level) {
  let cell = [];
  for (let i = 0; i <unitNo.length; i++) {
    if (blk.taken.includes(level + "-" + unitNo[i])) {
      cell.push(<TableCell sx={{ bgcolor: "#999999" }}/>);
      continue;
    } 
    let added = false
    for (let j=0;j<blk.total.length;j++){
      if (blk.total[j][0].includes(level + "-" + unitNo[i])) {
        cell.push(<TableCell sx={{ bgcolor: colorCode[blk.total[j][1]]}}/>);
        added=true
        break;
      }
    }
    if (!added){
      cell.push(<TableCell sx={{ bgcolor: "#fff" }}/>);
    }
  }
  return cell;
}

function Tracker() {
  return (
    <Container maxWidth="md">
      <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "3rem" }}>
        Hougang Olive @ Hougang {/* NAME */}
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginTop: "0.5rem", marginBottom:"1rem",  wordSpacing: "1rem"}}
      >
        <Link style={{ textDecoration: 'none' }} to='/tracker/summary'>QUEUE </Link>| <Link style={{ textDecoration: 'none' }} to='/tracker'>95A | 95B | 95C | 97A | 97B | 99A | 99B </Link>{/* UNIT TYPE */}
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ display:"flex", marginTop: "0.5rem", marginBottom: "1.5rem"}}
      > 
        {unitType.map((unit)=>(
          <Box bgcolor={colorCode[unit]} sx={{paddingX:"0.75rem", marginRight:"1rem"}}>{`${unit[1]}-room`}</Box> 
        ))}
      </Typography>
      <TableContainer sx={{ boxShadow: 0, marginBottom:"3rem"}} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: 100 }}>
                LEVEL / UNIT
              </TableCell>
              {unitNo.map((unit) => (
                <TableCell>
                  {unit}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {floors.map((level) => (
              <TableRow key={level}>
                <TableCell
                  component="th"
                >
                  {level}
                </TableCell>
                {checkUnitAvaiable(level)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Tracker;
