import * as React from "react";
import "./App.css";

// pages
import ScrollableTabs from "./components/general/tabs";
import Home from "./components/homepage/homepage";
import Footer from "./components/general/footer";
import SwipeableTemporaryDrawer from "./components/general/drawer";


function App() {
  return (
    <>
      <ScrollableTabs/>
      <SwipeableTemporaryDrawer/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
