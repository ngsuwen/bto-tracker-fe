import * as React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
// pages
import ScrollableTabs from "./components/general/tabs";
import SwipeableTemporaryDrawer from "./components/general/drawer";
import Home from "./components/homepage/homepage";
import Info from "./components/infopage/infopage";
import Footer from "./components/general/footer";

// font
const theme = createTheme({
  typography: {
    fontFamily: [
      "Roboto",
      "sans-serif"
    ].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScrollableTabs />
      <SwipeableTemporaryDrawer />
      <Home />
      {/* <Info /> */}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
