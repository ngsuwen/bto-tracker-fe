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
  Box,
  Tooltip
} from "@mui/material";
import getUnitsPerBlkApi from "../api/getUnitsPerBlk";
import { useParams } from "react-router-dom";

// available colors
const colorCode = {
  r2: "#F4CCCC",
  r3: "#B6D7A8",
  r4: "#FFD966",
  r5: "#B1DCD4",
};

export default function Units() {
  const [unitNo, setUnitNo] = React.useState([]);
  const [unitType, setUnitType] = React.useState([]);
  const [unitBlk, setUnitBlk] = React.useState([{ total: [] }]);
  const [floors, setFloors] = React.useState([]);

  const { launch, blk } = useParams();

  // check unit availability
  function checkUnitAvaiable(level) {
    let cell = [];
    for (let i = 0; i < unitNo.length; i++) {
      if (unitBlk.taken.includes(level + "-" + unitNo[i])) {
        cell.push(<Tooltip title={level + "-" + unitNo[i]}>
          <TableCell sx={{ bgcolor: "#999999" }} />
          </Tooltip>);
        continue;
      }
      let added = false;
      for (let j = 0; j < unitBlk.total.length; j++) {
        if (unitBlk.total[j][0].includes(level + "-" + unitNo[i])) {
          cell.push(
            <Tooltip title={level + "-" + unitNo[i]}>
              <TableCell sx={{ bgcolor: colorCode[unitBlk.total[j][1]] }} />
            </Tooltip>
          );
          added = true;
          break;
        }
      }
      if (!added) {
        cell.push(<TableCell sx={{ bgcolor: "#fff" }} />);
      }
    }
    return cell;
  }

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getUnitsPerBlkApi(launch, blk);

      // get unit number
      let unitNoArr = [];
      for (let i = 0; i < data.blkObj.total.length; i++) {
        let unit = data.blkObj.total[i][0].substr(3);
        if (!unitNoArr.includes(unit)) {
          unitNoArr.push(unit);
        }
      }

      // get unittype
      let unitTypeArr = [];
      for (let i = 0; i < data.blkObj.total.length; i++) {
        let unit = data.blkObj.total[i][1];
        if (!unitTypeArr.includes(unit)) {
          unitTypeArr.push(unit);
        }
      }

      setUnitNo(unitNoArr.sort());
      setUnitType(unitTypeArr.sort());
      setUnitBlk(data.blkObj);
      setFloors(data.floors);
    };
    fetchData();
  }, [blk, launch]);

  return (
    <>
      <Container maxWidth="md">
        <Typography
          variant="subtitle2"
          sx={{ display: "flex", marginTop: "0.5rem", marginBottom: "1.5rem" }}
        >
          {unitType.map((unit) => (
            <Box
              bgcolor={colorCode[unit]}
              sx={{ paddingX: "0.75rem", marginRight: "1rem" }}
            >{`${unit[1]}-room`}</Box>
          ))}
        </Typography>
        <TableContainer
          sx={{ boxShadow: 0, marginBottom: "3rem" }}
          component={Paper}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: 100 }}>LEVEL / UNIT</TableCell>
                {unitNo.map((unit) => (
                  <TableCell>{unit}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {floors.map((level) => (
                <TableRow key={level}>
                  <TableCell component="th">{level}</TableCell>
                  {checkUnitAvaiable(level)}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
