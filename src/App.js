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
import Links from "./components/miscPages/usefulLinksPage";
import Faq from "./components/miscPages/faqPage";
import Footer from "./components/general/footer";
import Summary from "./components/trackerPage/summaryPage";
import Disclaimer from "./components/miscPages/disclaimerPage";
import AppDateForm from "./components/contributePage/appDateFormPage";
import AdminForm from "./components/contributePage/adminFormPage";
import ScraperForm from "./components/contributePage/scraperFormPage";
import FeedbackForm from "./components/contributePage/feedbackFormPage";
import SigninPage from "./components/userPages/signinPage";
import AddBto from "./components/adminPages/projects/addProjectPage";
import EditBto from "./components/adminPages/projects/editProjectPage";

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
        <Route path="/links" element={<Links />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/appointment-form" element={<AppDateForm />} />
        <Route path="/admin-form" element={<AdminForm />} />
        <Route path="/scraper-form" element={<ScraperForm />} />
        <Route path="/feedback-form" element={<FeedbackForm />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/admin/add" element={<AddBto />} />
        <Route path="/admin/edit" element={<EditBto />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
