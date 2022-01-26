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
  createTheme,
} from "@mui/material";

// dummy data
import { blk, floors } from "./dummyData";
import { borderColor } from "@mui/system";

// get unit number
const unitNo = [];
for (let i = 0; i < blk.total.length; i++) {
  let unit = blk.total[i].substr(3);
  if (!unitNo.includes(unit)) {
    unitNo.push(unit);
  }
}

// check unit availability
function checkUnitAvaiable(level) {
  let cell = [];
  for (let i = unitNo.length - 1; i >= 0; i--) {
    if (blk.taken.includes(level + "-" + unitNo[i])) {
      cell.push(<TableCell sx={{ bgcolor: "#999999" }} />);
    } else if (blk.total.includes(level + "-" + unitNo[i])) {
      cell.push(<TableCell sx={{ bgcolor: "#FFD966"}}/>);
    } else {
      cell.push(<TableCell sx={{ bgcolor: "fff"}}/>);
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
        sx={{ marginTop: "0.5rem", marginBottom: "1.5rem" }}
      >
        Blk 522B {/* UNIT TYPE */}
      </Typography>
      <TableContainer sx={{ boxShadow: 0 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                LEVEL
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
