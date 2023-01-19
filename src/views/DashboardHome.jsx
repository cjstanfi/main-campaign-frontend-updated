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
        <div className="row mx-0 total-leads-wrapper">
          <div className="col-8">
            <TotalLeads />
          </div>
          <div className="col-4 border_left_1px"></div>
        </div>
        <div className="row mx-0 total-leads-wrapper mt-4">
          <div className="col-8  d-flex flex-column justify-content-center align-item-center">
            <TopDemoGraphics />
          </div>
          <div className="col-4 border_left_1px d-flex flex-column justify-content-center">
            <AgeGroupBarChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
