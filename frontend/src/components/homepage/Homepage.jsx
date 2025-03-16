import React from "react";
import TradingDataGrid from "../trading-data/TradingDataGrid";
import NavBar from "../navigation/NavBar";

import "./homepage.css";
import WeekdayData from "../weekday-data/weekdayData";

const Homepage = () => {
  return (
    <>
      <NavBar />
      <div className="homepage-container">
        <WeekdayData />
        <TradingDataGrid />
      </div>
    </>
  );
};

export default Homepage;
