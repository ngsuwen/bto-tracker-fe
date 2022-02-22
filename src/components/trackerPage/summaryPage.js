// if no data yet
// need to plan how to organize data

import * as React from "react";
import {
  Container,
  Typography,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useParams } from "react-router-dom";
import findOneProjectApi from "../api/findOneProject";
import getQueueUnitListApi from "../api/getQueueUnitList";

export default function Summary() {
  const [project, setProject] = React.useState({unit_breakdown:[]});
  const [queue, setQueue] = React.useState({"r6":[1]})
  const [unitTypes, setUnitTypes] = React.useState([])
  const [queueTable, setQueueTable] = React.useState([])

  let { launch } = useParams();
  launch = launch.replace("/%20/g", " ");

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await findOneProjectApi(launch);
      data.launch =
        data.launch[0].toUpperCase() +
        data.launch.slice(1, 3) +
        " " +
        data.launch.slice(3, 7);
      setProject(data);
    };
    fetchData();
  }, []);

  // get unit types and queue
  React.useEffect(() => {
    const fetchData = async () => {
      let unitTypesArr = [];
      if (project.unit_breakdown.length > 0) {
        project.unit_breakdown.map((element, index) => {
          if (element !== 0) {
            if (index !== 4) {
              let room = index + 2;
              unitTypesArr.push("r" + room);
            } else {
              unitTypesArr.push("gen");
            }
          }
        });

        const promises = unitTypesArr.map(async (element) => {
          const getQueue = await getQueueUnitListApi(launch, element);
          return getQueue;
        });

        const queueObj = await Promise.all(promises);
        setUnitTypes(unitTypesArr);
        setQueue(queueObj);
      }
    };
    fetchData();
  }, [project]);

  //get queue tables
  React.useEffect(()=>{
    let unitTypesArr = [];
    let queueArr=[[],[],[],[],[],[]];
    unitTypes.forEach((element, index) => {

      // -------------------------------------------------------------------
      unitTypesArr.push(
        <>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ marginTop: "1.5rem" }}
          >
            {element==="gen"?"3-Gen":element[1] + "-Room"}
          </Typography>
          <Typography variant="body2">
            <br />
            <Grid container>
              {queue[index]?
              queue[index].length>0?
                queue[index].forEach((value) => {
                queueArr[index].push(
                <>
                  <Grid item xs={2}>
                    {value.date.substr(0, 10)}
                  </Grid>
                  <Grid item xs={9} sx={{ textAlign: "left" }}>
                    {value.number}
                    {value.status?"":" *"}
                  </Grid>
                </>);
              }):"No data yet...":""}
              {queueArr[index]}
            </Grid>
          </Typography>

          <Divider sx={{ marginY: "1.5rem" }} />
        </>
      );
      // -------------------------------------------------------------------
      
    });
    setQueueTable(unitTypesArr)
  }, [queue, unitTypes])
    
  return (
    <>
      <Container maxWidth="md">
        {/* <TableContainer
          sx={{ boxShadow: 0, marginBottom: "3rem" }}
          component={Paper}
        >
          <Table sx={{ minWidth: 400 }} aria-label="simple table">
            <TableHead>
              <TableCell sx={{ width: 100, fontWeight: "bold" }}>
                Unit Type
              </TableCell>
              <TableCell sx={{ width: 100, fontWeight: "bold" }}>
                Units Left
              </TableCell>
              <TableCell sx={{ width: 100, fontWeight: "bold" }}>
                Malay
              </TableCell>
              <TableCell sx={{ width: 100, fontWeight: "bold" }}>
                Chinese
              </TableCell>
              <TableCell sx={{ width: 100, fontWeight: "bold" }}>
                Indian / Others
              </TableCell>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th">3-Room</TableCell>
                <TableCell sx={{ width: 100 }}>156</TableCell>
                <TableCell sx={{ width: 100 }}>55</TableCell>
                <TableCell sx={{ width: 100 }}>32</TableCell>
                <TableCell sx={{ width: 100 }}>26</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th">4-Room</TableCell>
                <TableCell sx={{ width: 100 }}>156</TableCell>
                <TableCell sx={{ width: 100 }}>55</TableCell>
                <TableCell sx={{ width: 100 }}>32</TableCell>
                <TableCell sx={{ width: 100 }}>26</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th">5-Room</TableCell>
                <TableCell sx={{ width: 100 }}>156</TableCell>
                <TableCell sx={{ width: 100 }}>55</TableCell>
                <TableCell sx={{ width: 100 }}>32</TableCell>
                <TableCell sx={{ width: 100 }}>26</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer> */}

        {queueTable}

        <Typography sx={{ marginBottom: "3rem", fontStyle: 'oblique' }} >
          * = not validated
        </Typography>
      </Container>
    </>
  );
}
