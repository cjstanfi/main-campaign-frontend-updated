import React from "react";
import { UpArrowIcon } from "../common/icons";
import Form from "react-bootstrap/Form";
import DashboardCards from "../analytics/DashboardCards";
import { AddManagerDetails } from "../common/Helper";
import TablePagination from "../common/TablePagination";
import DashboardNavTabs from "./DashboardNavTabs";
import TopBar from "../common/TopBar";
const AddManager = () => {
  return (
    <>
      <TopBar heading="Welcome back!" />
      <DashboardCards />
      <section>
        <div className="box mb-3">
          <DashboardNavTabs />
          <div className="overflow-auto ">
            <table className="w-100 mt-4 add_manager mb-3">
              <tbody>
                <tr>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 ps-3 pe-5 pe-lg-0"></th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 px-4 px-lg-2 text-center">
                    Off / On
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 px-4 pe-lg-0 ps-3">
                    Campaign
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 px-4 px-lg-2 text-center">
                    Delivery
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 px-4 px-lg-2 text-center">
                    Budget
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 px-4 px-lg-2 text-center">
                    Leads
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 px-4 px-lg-2 text-center">
                    Reach
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 px-4 px-lg-2 text-center">
                    Impression
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 px-4 px-lg-2 text-center">
                    Spent
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 px-4 px-lg-2 text-center">
                    Conversion
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 px-4 px-lg-2 text-center">
                    Revenue
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 px-4 px-lg-2 text-center">
                    ROAS
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 px-4 px-lg-2 text-center">
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
                          } ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap  px-3 px-xxl-2 text-center `}
                        >
                          <input type="checkbox" name="" id="" />
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap px-4 px-lg-2 text-center ">
                          <Form.Check type="switch" id="custom-switch" />
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap px-4 pe-lg-2 ps-3">
                          {item.campaign}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap px-4 px-lg-2 text-center">
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
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap px-4 px-lg-2 text-center">
                          {item.budget}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap px-4 px-lg-2 text-center">
                          {item.leads}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap px-4 px-lg-2 text-center">
                          {item.reach}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap px-4 px-lg-2 text-center">
                          {item.impression}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap px-4 px-lg-2 text-center">
                          ${item.spent}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap px-4 px-lg-2 text-center">
                          {item.conversion}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap px-4 px-lg-2 text-center">
                          ${item.revenue}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap px-4 px-lg-2 text-center">
                          {item.roas}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap px-4 px-lg-2 text-center">
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
          </div>
          <TablePagination />
        </div>
      </section>
    </>
  );
};

export default AddManager;
