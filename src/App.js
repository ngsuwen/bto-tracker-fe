import * as React from "react";
import "./App.css";

// pages
import ScrollableTabs from "./components/general/tabs";
import CoverPic from "./components/homepage/cover";

function App() {
  return (
    <>
      <ScrollableTabs />
      <CoverPic/>
    </>
  );
}

export default App;
