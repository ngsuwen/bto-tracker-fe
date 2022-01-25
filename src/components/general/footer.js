import * as React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#EBECF0" }}>
        <Box
          sx={{
            paddingY: "1.5rem",
            display: "flex",
            flexDirection:"column",
            textAlign:"center"
          }}
        >
          <Typography variant="body2" color="#666666">
          Built With ♡ For New Flat Owners. <br/>
          © BTracker 2021 All rights reserved.
          </Typography>
        </Box>
    </Box>
  );
}
