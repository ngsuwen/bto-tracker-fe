import * as React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
// pages
import ScrollableTabs from "./components/general/tabs";
import Home from "./components/homepage/homepage";
import Footer from "./components/general/footer";
import SwipeableTemporaryDrawer from "./components/general/drawer";

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
      <Footer />
    </ThemeProvider>
  );
}

export default App;
