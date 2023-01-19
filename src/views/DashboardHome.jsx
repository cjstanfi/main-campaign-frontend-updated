import React from "react";
import DashboardCards from "../components/DashboardCards";
import TotalLeads from "../components/dashboard/TotalLeads";
import AgeGroupBarChart from "../components/dashboard/AgeGroupBarChart";
import TopDemoGraphics from "../components/dashboard/TopDemoGraphics";

const DashboardHome = () => {
  return (
    <>
      <div>
        <DashboardCards />
        <TotalLeads />
        <AgeGroupBarChart />
        <TopDemoGraphics />
      </div>
    </>
  );
};

export default DashboardHome;
