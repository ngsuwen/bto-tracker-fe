import * as React from "react";
import { Box } from "@mui/material";
import Search from "./searchBox";

export default function CoverPic() {
  return (
    <Box
    className="cover-bg" style={{"--img": "url('https://sg.tepcdn.com/public/usr/dsc14e/f46afb-macpherson-weave.jpg')"}}>
      <h1> .</h1>
        <Search/>
    </Box>
  );
}
