import * as React from "react";
import "./App.css";

// pages
import ScrollableTabs from "./components/general/tabs";
import Home from "./components/homepage/homepage";

function App() {
  return (
    <>
      <ScrollableTabs />
      <Home/>
    </>
  );
}

export default App;
