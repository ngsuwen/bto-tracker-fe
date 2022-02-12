import * as React from "react";
import Tabs from "./trackerTabs";
import Units from "./unitsPage";
import Summary from "./summaryPage";

export default function Tracker({ page }) {
  return (
    <>
      <Tabs />
      {page === "summary" ? <Summary /> : <Units />}
    </>
  );
}
