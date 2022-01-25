// pass proj info as prop

import * as React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom"

export default function ProjectCard() {
  return (
    <Link style={{textDecoration:'none', color:"black"}} to="/info">
      <Box
        sx={{
          borderRadius: "0.4rem",
          backgroundImage:
            "url(https://cdn-blog.seedly.sg/wp-content/uploads/2021/10/17143739/Hougang-Olive-Nov-BTO-2021-768x420.jpeg)",
          height: 200,
          maxWidth:"100%",
          width: 325,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Typography variant="body1" fontWeight={"bold"} paddingY={"0.2rem"}>Hougang Olive @ Hougang</Typography>
      <Typography variant="subtitle2" color="text.secondary">390 units, 4-Room, 5-Room</Typography>
    </Link>
  );
}
