// pass proj info as prop

import * as React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom"

export default function TrackerCard({ project }) { //props to be updated
  console.log(project)
  return (
    <Link style={{textDecoration:'none', color:"black"}} to={`/tracker/summary/${project[0].launch}`} target="_blank" rel="noopener noreferrer">
      <Box
        sx={{
          borderRadius: "0.4rem",
          backgroundImage:
            `url(${project[0].preview_url})`,
          height: 200,
          maxWidth:"100%",
          width: 325,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Typography variant="body1" fontWeight={"bold"} paddingY={"0.2rem"}>{project[0].name}</Typography>
    </Link>
  );
}
