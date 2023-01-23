import React from "react";
import AgeGroupBarChart from "../components/analytics/AgeGroupBarChart";
import TopDemoGraphics from "../components/analytics/TopDemoGraphics";
import TotalLeads from "../components/analytics/TotalLeads";
import DashboardCards from "../components/analytics/DashboardCards";
import DashboardCost from "../components/dashboard/DashboardCost";
import TopBar from "../components/common/TopBar";

const Analytics = () => {
  return (
    <>
      <TopBar
        heading="Welcome Back!"
        para="Track your Facbook Data Analytics here"
      />

      <div>
        <DashboardCards />
        <div className="row mx-0 total-leads-wrapper mt-4 mt-lg-0 px2 py-3 p-sm-3">
          <div className="col-lg-8">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h4 className="font-xl fw-bold ff_thicccboi_bold color_gray mb-2">
                  Total Leads
                </h4>
                <p className="font-sm fw-normal color_gray mb-0">
                  June 1, 2021 - June 2, 2022
                </p>
              </div>
              <div className="d-flex">
                <div className="total_leads position-relative">
                  <p className="font-xl mb-0 fw-semibold font-xxl ff_thicccboi_semibold color_dark_black ">
                    15.25k
                  </p>
                  <p className="font-sm fw-normal color_gray mb-0">Leads</p>
                </div>
                <div className="ms-sm-5 ms-3 ps-xl-5 ">
                  <div className="total_revenue position-relative">
                    <p className="font-xl mb-0 fw-semibold font-xxl ff_thicccboi_semibold color_dark_black">
                      $ 25,000
                    </p>
                    <p className="font-sm fw-normal color_gray mb-0">Revenue</p>
                  </div>
                </div>
              </div>
            </div>

            <TotalLeads />
          </div>
          <div className="col-lg-4 border_left_map pt-4 pt-lg-0">
            <DashboardCost />
          </div>
        </div>
        <div className="row mb-4 mx-0 total-leads-wrapper mt-4 py-3 p-sm-3">
          <div className="col-lg-8  d-flex flex-column justify-content-start align-item-center">
            <TopDemoGraphics />
          </div>
          <div className="col-lg-4 col-sm-10 d-flex flex-column justify-content-center border_left_map">
            <AgeGroupBarChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
