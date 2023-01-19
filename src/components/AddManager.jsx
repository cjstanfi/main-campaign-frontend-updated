import React from "react";
import {
  AddIcon,
  FileIcon,
  MenuIcon,
  PlusIcon,
  SearchIcon,
  UpArrowIcon,
} from "./common/Icons";
import Form from "react-bootstrap/Form";
import DashboardCards from "./DashboardCards";
import { AddManagerDetails, TableTabs } from "../components/common/Helper";
const AddManager = () => {
  return (
    <>
      <DashboardCards />
      <section>
        <div className="box">
          <div className="row">
            <div className="col-12 col-sm-6 mt-3 col-md-4  px-3">
              <div className="add_manager_campaign p-3 d-flex align-items-center">
                <span>
                  {" "}
                  <FileIcon />
                </span>
                <span className="ff_thicccboi_medium font-xl color_blue ms-3">
                  Campaign
                </span>
              </div>
            </div>
            <div className="col-12 col-sm-6 mt-3 col-md-4  px-3">
              <div className="add_manager_campaign p-3 d-flex align-items-center">
                <MenuIcon />
                <span className="ff_thicccboi_medium font-xl  color_gray ms-3">
                  Ad set
                </span>
              </div>
            </div>
            <div className="col-12 col-sm-6 mt-3 col-md-4  px-3">
              <div className="add_manager_campaign p-3 d-flex align-items-center">
                <AddIcon />
                <span className="ff_thicccboi_medium font-xl  color_gray ms-3">
                  Ad
                </span>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-md-center mt-5 flex-column flex-md-row">
            <div className="d-flex me-4 d-flex flex-column flex-sm-row">
              <div className="d-flex">
                <button className="ff_thicccboi_semibold border-0 text-white save_btn px-4 py-2 text-nowrap">
                  Sort
                </button>
                <button className="ff_thicccboi_semibold ms-3 border-0 text-white save_btn px-4 py-2 text-nowrap">
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
            <div className="position-relative w-100 mt-4 mt-md-0">
              <label
                htmlFor="search"
                className="position-absolute top-50 cursor_pointer ms-3 translate-middle-y"
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
          <div className="overflow-auto pb-3">
            <table className="w-100 mt-4 add_manager">
              <tbody>
                <tr>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 ps-3 pe-5 pe-lg-0"></th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 px-4 px-lg-0 text-center">
                    Off / On
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 px-4 pe-lg-0 ps-3">
                    Campaign
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 px-4 px-lg-0 text-center">
                    Delivery
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 px-4 px-lg-0 text-center">
                    Budget
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 px-4 px-lg-0 text-center">
                    Leads
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 px-4 px-lg-0 text-center">
                    Reach
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 px-4 px-lg-0 text-center">
                    Impression
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 px-4 px-lg-0 text-center">
                    Spent
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 px-4 px-lg-0 text-center">
                    Conversion
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 px-4 px-lg-0 text-center">
                    Revenue
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 px-4 px-lg-0 text-center">
                    ROAS
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 px-4 px-lg-0 text-center">
                    Performance
                  </th>
                </tr>
                {AddManagerDetails &&
                  AddManagerDetails.map((item, index) => {
                    return (
                      <tr
                        className={`${index % 2 ? "" : "table_bg_grey "}  `}
                        key={index}
                      >
                        <td
                          className={`${
                            index % 2 ? "py-4" : " "
                          } ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap ps-3 px-4 px-lg-2 text-center`}
                        >
                          <input type="checkbox" name="" id="" />
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap px-4 px-lg-0 text-center ">
                          <Form.Check type="switch" id="custom-switch" />
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap px-4 pe-lg-0 ps-3">
                          {item.campaign}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap px-4 px-lg-0 text-center">
                          {" "}
                          <span
                            className={
                              item.delivery == "Active"
                                ? "delivery_status_active"
                                : item.delivery == "No Ads"
                                ? "delivery_status_noadds"
                                : ""
                            }
                          ></span>{" "}
                          {item.delivery}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap px-4 px-lg-0 text-center">
                          {item.budget}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap px-4 px-lg-0 text-center">
                          {item.leads}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap px-4 px-lg-0 text-center">
                          {item.reach}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap px-4 px-lg-0 text-center">
                          {item.impression}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap px-4 px-lg-0 text-center">
                          ${item.spent}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap px-4 px-lg-0 text-center">
                          {item.conversion}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap px-4 px-lg-0 text-center">
                          ${item.revenue}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap px-4 px-lg-0 text-center">
                          {item.roas}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap px-4 px-lg-0 text-center">
                          <UpArrowIcon />
                          <span className="uparrow">
                            {" "}
                            <UpArrowIcon />
                          </span>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <div className="d-flex pt-4 mt-3">
              {TableTabs &&
                TableTabs.map((item, index) => {
                  return (
                    <button
                      className={`${
                        index === 0
                          ? "table_tabs_btn_active"
                          : index === TableTabs.length - 1
                          ? "table_tabs_btn_active"
                          : "table_tabs_btn"
                      } me-3 px-3 py-2`}
                      key={index}
                    >
                      {item.pageNo}
                    </button>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddManager;
