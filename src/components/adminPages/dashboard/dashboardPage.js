// PASS USER STATE HERE, CHECK ROLE AND DISPLAY INFO

import * as React from "react";
import { Container, Typography } from "@mui/material";
import Message from "./message";
import Queue from "./queue";
import Project from "./project";
import User from "./user";
import { DataContext } from "../../../App";

export default function Dashboard() {
  const { user } = React.useContext(DataContext);

  return (
    <Container maxWidth="md">
      
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

      {/* ---------------------------------------------------------------------------------- */}

      <Message />

      {/* ---------------------------------------------------------------------------------- */}

      {user.role==="superadmin"?
      <>
      <Project />
      <User />
      </>:
      user.role==="admin"?
      <Queue/>:
      ""}

      {/* ---------------------------------------------------------------------------------- */}
    
    </Container>
  );
}
