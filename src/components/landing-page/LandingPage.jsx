import React from "react";
import TradingDataGrid from "../trading-data/TradingDataGrid";
import NavBar from "../navigation/NavBar";

import "./landing-page.css";
import WeekdayData from "../weekday-data/weekdayData";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div className="landing-page-container">
        <WeekdayData />
        <TradingDataGrid />
      </div>
    </>
  );
};

export default LandingPage;
