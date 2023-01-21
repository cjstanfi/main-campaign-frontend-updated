import React from "react";

const DashboardCost = () => {
  return (
    <>
      <div className="dashboard_cost">
        <div className="crm_card p-3 d-flex justify-content-between align-items-center">
          <span className="color_gray font-xl fw-normal font_xl_15 ">
            Cost Per Purchase
          </span>
          <span className="color_green font-sm ff_plex_mono fw_500">
            +15.5%
          </span>
        </div>
        <p className="ps-3 mb-0 pt-2 mb-sm-5 mb-4 mb-lg-4 mb-xl-5">
          <span className="color_dark_black font-xxl ff_thicccboi_medium ">
            $200
          </span>
          <span className="color_gray font-xl fw-normal ms-2">Avg</span>
        </p>
        <div className="crm_card p-3 d-flex justify-content-between align-items-center">
          <span className="color_gray font-xl fw-normal font_xl_15 ">
            Cost Per Lead
          </span>
        </div>
        <p className="ps-3 mb-0 pt-2 mb-sm-5 mb-4 mb-lg-4 mb-xl-5">
          <span className="color_dark_black font-xxl ff_thicccboi_medium ">
            $30.5
          </span>
          <span className="color_gray font-xl fw-normal ms-2">Avg</span>
        </p>
        <div className="crm_card p-3 d-flex justify-content-between align-items-center">
          <span className="color_gray font-xl fw-normal font_xl_15 ">
            Cost Per Click
          </span>
          <span className="color_green font-sm ff_plex_mono fw_500">
            +15.5%
          </span>
        </div>
        <p className="ps-3 mb-0 pt-2">
          <span className="color_dark_black font-xxl ff_thicccboi_medium ">
            $25.9
          </span>
          <span className="color_gray font-xl fw-normal ms-2">Avg</span>
        </p>
      </div>
    </>
  );
};

export default DashboardCost;
