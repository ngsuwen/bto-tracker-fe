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
import AddUnits from "./components/adminPages/units/addUnitsPage";
import EditUnits from "./components/adminPages/units/editUnitsPage";

//api
import getProjectListApi from "./components/api/getProjectList";

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

export const DataContext = React.createContext()

function App() {
  const [ongoing, setOngoing] = React.useState([])
  const [upcoming, setUpcoming] = React.useState([])
  const [projList, setProjList] = React.useState([])

  React.useEffect(()=>{
    const ongoingArr = []
    const upcomingArr = []
    const projArr = []

    const fetchData = async() =>{
      const projectArr = await getProjectListApi()
      projectArr.forEach((element, index) =>{
        projArr.push(element.launch)
        if (element.status==="ongoing"){
          ongoingArr.push(element)
        } else {
          upcomingArr.push(element)
        }
      });
      setOngoing(ongoingArr);
      setUpcoming(upcomingArr);
      setProjList(projArr);
    }
    fetchData()

  },[])

  return (
    <ThemeProvider theme={theme}>
      <DataContext.Provider value={{
        ongoing, upcoming, projList
      }}>
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
        <Route path="/admin/edit/:launch" element={<EditBto />} />
        <Route path="/admin/add/units" element={<AddUnits />} />
        <Route path="/admin/edit/units" element={<EditUnits />} />
      </Routes>
      <Footer />
      </DataContext.Provider>
    </ThemeProvider>
  );
}

export default App;
