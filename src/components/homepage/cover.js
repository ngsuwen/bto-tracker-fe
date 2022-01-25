import * as React from "react";
import { Box, Typography, Container } from "@mui/material";
import Search from "./searchBox";

export default function CoverPic() {
  return (
    <Box
    className="cover-bg" style={{"--img": "url('https://sg.tepcdn.com/public/usr/dsc14e/f46afb-macpherson-weave.jpg')"}}>
      <Container maxWidth="sm" sx={{bgcolor:"rgba(0,0,0,0.6)"}}>
      <Typography variant="h3" fontWeight={"bold"} marginTop={"15vh"} color={"rgba(255,255,255,0.9)"}> 
        BTO Tracker
      </Typography>
      <Typography variant="body1" fontWeight={"bold"} color={"rgba(255,255,255,0.8)"}>
        A crowdsourced database for BTO selection
      </Typography>
      </Container>
        <Search/>
    </Box>
  );
}
