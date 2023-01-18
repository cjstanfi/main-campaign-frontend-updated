import React from "react";
import DashboardCards from "../components/DashboardCards";
import DashboardMap from "../components/DashboardMap";

const DashboardHome = () => {
  return (
    <>
      <div>
        <DashboardCards />
        <DashboardMap />
      </div>
    </>
  );
};

export default DashboardHome;
