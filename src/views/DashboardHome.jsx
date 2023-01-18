import React from "react";
import DashboardCards from "../components/DashboardCards";
import TotalLeads from "../components/dashboard/TotalLeads";
import DashboardMap from "../components/DashboardMap";

const DashboardHome = () => {
  return (
    <>
      <div>
        <DashboardCards />
        <TotalLeads />
        <DashboardMap />
      </div>
    </>
  );
};

export default DashboardHome;
