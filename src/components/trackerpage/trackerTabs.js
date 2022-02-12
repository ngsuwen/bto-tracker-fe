// if no data yet
// need to plan how to organize data

import * as React from "react";
import {
  Container,
  Typography,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import getUnitsListApi from "../api/getUnitsList";

export default function Tabs() {
  let { launch } = useParams();
  const [blks, setBlks] = React.useState([])

  React.useEffect(()=>{
    const fetchData=async()=>{
      let blocks = []
      let units = await getUnitsListApi(launch)
      units.forEach((element)=>{
        if (!blocks.includes(element.blk)){
          blocks.push(element.blk)
        }
      })
      setBlks(blocks)
    }
    fetchData()
  },[])

  // display blocks
  const displayBlks=()=>{
    let blksArr=[]
    blks.forEach((element)=>{
      blksArr.push(<> | <Link style={{ textDecoration: 'none', color: 'black' }} to={`/tracker/nov2021hougang-Olive/${element}`}>{element}</Link></>)
    })
    return blksArr
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "3rem" }}>
        Hougang Olive @ Hougang {/* NAME */}
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginTop: "0.5rem", marginBottom: "1rem", wordSpacing: "1rem" }}
      >
        <Link style={{ textDecoration: 'none', color: 'black' }} to={`/tracker/summary/nov2021hougang-Olive`}>QUEUE</Link>{displayBlks()}
      </Typography>
      <Typography variant="body2" color="red">
        * Volunteers required: Data scrapers, admin. Apply here.
      </Typography>

    </Container>
  );
}
