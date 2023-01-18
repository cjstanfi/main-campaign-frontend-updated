import React from "react";
import DashboardCards from "../components/DashboardCards";
import TotalLeads from "../components/dashboard/TotalLeads";
import AgeGroupBarChart from "../components/dashboard/AgeGroupBarChart";

const DashboardHome = () => {
  return (
    <>
      <div>
        <DashboardCards />
        {/* <TotalLeads /> */}
        <AgeGroupBarChart />
      </div>
    </>
  );
};

export default DashboardHome;
