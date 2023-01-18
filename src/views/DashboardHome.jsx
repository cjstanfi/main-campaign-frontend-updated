import React from "react";
import DashboardCards from "../components/DashboardCards";
import TotalLeads from "../components/dashboard/TotalLeads";

const DashboardHome = () => {
  return (
    <>
      <div>
        <DashboardCards />
        <TotalLeads />
      </div>
    </>
  );
};

export default DashboardHome;
