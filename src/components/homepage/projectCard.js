import * as React from "react";
import { Box, Typography } from "@mui/material";

export default function ProjectCard() {
  return (
    <>
      <Box
        sx={{
          borderRadius: "0.4rem",
          backgroundImage:
            "url(https://cdn-blog.seedly.sg/wp-content/uploads/2021/10/17143739/Hougang-Olive-Nov-BTO-2021-768x420.jpeg)",
          height: 200,
          width: 325,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Typography variant="body1" fontWeight={"bold"} paddingY={"0.2rem"}>Hougang Olive @ Hougang</Typography>
      <Typography variant="subtitle2" color="text.secondary">390 units, 4-Room, 5-Room</Typography>
    </>
  );
}
