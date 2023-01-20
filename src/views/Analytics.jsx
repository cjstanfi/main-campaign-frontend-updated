import React from "react";
import AgeGroupBarChart from "../components/dashboard/AgeGroupBarChart";
import TopDemoGraphics from "../components/dashboard/TopDemoGraphics";
import TotalLeads from "../components/dashboard/TotalLeads";
import DashboardCards from "../components/DashboardCards";
import DashboardCost from "../components/DashboardCost";

const Analytics = () => {
  return (
    <>
      <div>
        <DashboardCards />
        <div className="row mx-0 total-leads-wrapper mt-4 mt-lg-0">
          <div className="col-lg-8 py-3">
            <div>
              <h4 className="font-xl fw-bold ff_thicccboi_bold color_gray">
                Total Leads
              </h4>
              <p className="font-sm fw-normal color_gray">
                June 1, 2021 - June 2, 2022
              </p>
            </div>
            <TotalLeads />
          </div>
          <div className="col-lg-4 border_left_1px p-4">
            <DashboardCost />
          </div>
        </div>
        <div className="row mb-4 mx-0 total-leads-wrapper mt-4 justify-content-center">
          <div className="col-lg-8  d-flex flex-column justify-content-center align-item-center">
            <TopDemoGraphics />
          </div>
          <div className="col-lg-4 col-sm-8 pb-3 border_left_1px d-flex flex-column justify-content-center">
            <AgeGroupBarChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
