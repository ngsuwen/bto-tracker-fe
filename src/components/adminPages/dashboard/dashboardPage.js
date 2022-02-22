import * as React from "react";
import { Container, Typography } from "@mui/material";
import MessageAdmin from "./messageAdmin";
import MessageSuper from "./messageSuper";
import Queue from "./queue";
import Project from "./project";
import User from "./user";
import Units from "./units";
import UnitsAdmin from "./unitsPage";

import { DataContext } from "../../../App";
import getQueueListApi from "../../api/getQueueList";

export default function Dashboard() {
  const { user } = React.useContext(DataContext);
  const [ queue, setQueue ] = React.useState([]);

  React.useEffect(()=>{
    const fetchData=async()=>{
      const queueArr = await getQueueListApi(user.fk_launch)
      setQueue(queueArr)
    }
    fetchData()
  },[user])

  return (
    <Container maxWidth="md">
      {user?
      user.role==="data_scraper"?
      "":
      <>
      <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "8vh" }}>
        Messages
      </Typography>

      <Typography
        variant="body2"
        sx={{ marginTop: "0.5rem", marginBottom: "3vh", textAlign: "justify" }}
      >
        These messages require your verification. Messages will be auto deleted
        after you have acknowledged them.
      </Typography>
      </>
      :""}

      {/* ---------------------------------------------------------------------------------- */}
      {user?
      user.role==="superadmin"?
      <MessageSuper data={queue} />:
      user.role==="admin"?
      <MessageAdmin data={queue} />:"":""}

      {/* ---------------------------------------------------------------------------------- */}
      
      {user?
      user.role==="superadmin"?
      <>
      <Project />
      <User />
      </>:
      user.role==="admin"?
      <Queue/>:
      <>
        <Units/>
        <UnitsAdmin/>
      </>:""}
      {/* ---------------------------------------------------------------------------------- */}
    
    </Container>
  );
}
