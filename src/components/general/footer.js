import * as React from "react";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#EBECF0" }}>
        <Box
          sx={{
            paddingY: "1.5rem",
            display: "flex",
            flexDirection:"column",
            alignItems:"center"
          }}
        >
          <p>Built With ♡ For Fellow New Flat Owners.</p>
          <p>© BTracker 2021 All rights reserved.</p>
        </Box>
    </Box>
  );
}
