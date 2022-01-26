import * as React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// Pages
import ScrollableTabs from "./components/general/tabs";
import SwipeableTemporaryDrawer from "./components/general/drawer";
import Home from "./components/homePage/homePage";
import Info from "./components/infoPage/infoPage";
import Tracker from "./components/trackerPage/trackerPage";
import ProjectList from "./components/infoPage/projectListPage";
import TrackerOverview from "./components/trackerPage/trackerOverviewPage";
import Footer from "./components/general/footer";
import Summary from "./components/trackerPage/summaryPage";

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
        <Route path="/tracker/summary" element={<Summary />} />
        <Route path="/tracker/projects" element={<TrackerOverview />} />
        <Route path="/projects" element={<ProjectList />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
