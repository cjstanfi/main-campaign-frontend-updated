import React, { useState } from "react";
import { PlusIcon, SearchIcon } from "../common/Icons";
import { dashboardNavTabsData } from "../common/Helper";

const DashboardNavTabs = () => {
  const [activeTab, setActiveTab] = useState(dashboardNavTabsData[0]);
  return (
    <>
      <div className="row">
        {dashboardNavTabsData &&
          dashboardNavTabsData.map((item, index) => {
            return (
              <div className="col-12 col-sm-6 mt-3 col-md-4" key={index}>
                <button
                  className="add_manager_campaign p-3 d-flex align-items-center w-100"
                  onClick={() => setActiveTab(item)}
                >
                  <span
                    className={
                      item === activeTab
                        ? "dashboard_tabs_svg"
                        : "dashboard_tabs_svg_2"
                    }
                  >
                    {item.icon}
                  </span>
                  <span
                    className={`${
                      item === activeTab ? "color_blue" : "color_gray"
                    }
                    ff_thicccboi_medium font-xl  ms-3`}
                  >
                    {item.name}
                  </span>
                </button>
              </div>
            );
          })}
      </div>
      <div className="d-flex align-items-md-center mt-3 mt-sm-5 flex-column flex-md-row">
        <div className="d-flex me-4 d-flex flex-column flex-sm-row">
          <div className="d-flex">
            <button className="ff_thicccboi_semibold border-0 text-white common_btn px-4 py-2 text-nowrap">
              Sort
            </button>
            <button className="ff_thicccboi_semibold ms-3 border-0 text-white common_btn px-4 py-2 text-nowrap">
              + Add Filters
            </button>
          </div>
          <div>
            <button className="ff_thicccboi_semibold ms-1 ms-sm-4 mt-3 mt-sm-0 clear_filter_custom_margin border-0 color_gray bg-transparent py-2 d-flex align-items-center text-nowrap">
              <span className="into_icon">
                {" "}
                <PlusIcon />
              </span>{" "}
              <span className="ms-2"> Clear Filters</span>
            </button>
          </div>
        </div>
        <div className="position-relative w-100 mt-3 mt-sm-4 mt-md-0">
          <label
            htmlFor="search"
            className="position-absolute  top-50 cursor_pointer ms-3 translate-middle-y"
          >
            {" "}
            <SearchIcon />
          </label>
          <input
            className="py-2 px-5 search_input w-100"
            type="text"
            id="search"
            placeholder="Search here"
          />
        </div>
      </div>
    </>
  );
};

export default DashboardNavTabs;
