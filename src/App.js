import * as React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// pages
import ScrollableTabs from "./components/general/tabs";
import SwipeableTemporaryDrawer from "./components/general/drawer";
import Home from "./components/homepage/homepage";
import Info from "./components/infopage/infopage";
import Tracker from "./components/trackerpage/trackerpage";
import Footer from "./components/general/footer";

// font
const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
  // tracker cell css
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          border:"1px solid rgb(0,0,0,0.2)",
          padding:"0.5rem"
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScrollableTabs />
      <SwipeableTemporaryDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/tracker" element={<Tracker />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
