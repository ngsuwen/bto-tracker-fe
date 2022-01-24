import * as React from "react";
import "./App.css";

// pages
import ScrollableTabs from "./components/general/tabs";
import Home from "./components/homepage/homepage";
import Footer from "./components/general/footer";

function App() {
  return (
    <>
      <ScrollableTabs />
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
