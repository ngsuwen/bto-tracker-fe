import * as React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// Pages
import ScrollableTabs from "./components/general/tabs";
import SwipeableTemporaryDrawer from "./components/general/drawer";
import Home from "./components/homePage/homePage";
import Info from "./components/infoPage/infoPage";
import ProjectList from "./components/infoPage/projectListPage";
import TrackerOverview from "./components/trackerPage/trackerOverviewPage";
import Links from "./components/miscPages/usefulLinksPage";
import Faq from "./components/miscPages/faqPage";
import Footer from "./components/general/footer";
import Tracker from "./components/trackerPage/trackerPage";
import Disclaimer from "./components/miscPages/disclaimerPage";
import AppDateForm from "./components/contributePage/appDateFormPage";
import AdminForm from "./components/contributePage/adminFormPage";
import ScraperForm from "./components/contributePage/scraperFormPage";
import FeedbackForm from "./components/contributePage/feedbackFormPage";
import SigninPage from "./components/userPages/signinPage";
import ProfilePage from "./components/userPages/profilePage";
import AddBto from "./components/adminPages/projects/addProjectPage";
import EditBto from "./components/adminPages/projects/editProjectPage";
import AddUnits from "./components/adminPages/units/addUnitsPage";
import EditUnits from "./components/adminPages/units/editUnitsPage";
import Dashboard from "./components/adminPages/dashboard/dashboardPage";

//api
import getProjectListApi from "./components/api/getProjectList";
import AddUser from "./components/adminPages/user.js/addUsersPage";
import getSessionApi from "./components/api/getSession";

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
  const [user, setUser] = React.useState()

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
      // session
      const session = await getSessionApi()
      if (session.username){
        console.log(session.username)
        setUser(session)
      }
    }
    fetchData()

  },[])

  return (
    <ThemeProvider theme={theme}>
      <DataContext.Provider value={{
        ongoing, upcoming, projList, user, setUser
      }}>
      <ScrollableTabs />
      <SwipeableTemporaryDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:launch" element={<Info />} />
        <Route path="/tracker/:launch/:blk" element={<Tracker page="units" />} />
        <Route path="/tracker/summary/:launch" element={<Tracker page="summary" />} />
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
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin/add" element={<AddBto />} />
        <Route path="/admin/add/units" element={<AddUnits />} />
        <Route path="/admin/add/user" element={<AddUser />} />
        <Route path="/admin/edit/:launch" element={<EditBto />} />
        <Route path="/admin/edit/units" element={<EditUnits />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
      </DataContext.Provider>
    </ThemeProvider>
  );
}

export default App;
