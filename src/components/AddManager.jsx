import React from "react";
import { FileIcon, UpArrowIcon } from "./common/Icons";
import Form from "react-bootstrap/Form";

import { AddManagerDetails } from "../components/common/Helper";
const AddManager = () => {
  return (
    <>
      <section className="p-3">
        <div className="box">
          <div className="row">
            <div className="col-4 px-3">
              <div className="add_manager_campaign p-3 d-flex align-items-center">
                <FileIcon />
                <span className="ff_thicccboi_bold font-xl color_blue ms-3">
                  Campaign
                </span>
              </div>
            </div>
          </div>
          <div className="overflow-auto pb-3">
            <table className="w-100 mt-4 add_manager">
              <tbody>
                <tr>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 ps-3 pe-5 pe-lg-0"></th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 pe-5 pe-lg-0 text-center">
                    Off / On
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 pe-5 pe-lg-0 ps-3">
                    Campaign
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 pe-5 pe-lg-0 text-center">
                    Delivery
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 pe-5 pe-lg-0 text-center">
                    Budget
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 pe-5 pe-lg-0 text-center">
                    Leads
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 pe-5 pe-lg-0 text-center">
                    Reach
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 pe-5 pe-lg-0 text-center">
                    Impression
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 pe-5 pe-lg-0 text-center">
                    Spent
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 pe-5 pe-lg-0 text-center">
                    Conversion
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 pe-5 pe-lg-0 text-center">
                    Revenue
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 pe-5 pe-lg-0 text-center">
                    ROAS
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap py-3 pe-5 pe-lg-0 text-center">
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
                          } ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap ps-3 pe-5 pe-lg-0 `}
                        >
                          <input type="checkbox" name="" id="" />
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-5 pe-lg-0 text-center">
                          <Form.Check type="switch" id="custom-switch" />
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-5 pe-lg-0 ps-3">
                          {item.campaign}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-5 pe-lg-0 text-center">
                          {item.delivery}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-5 pe-lg-0 text-center">
                          {item.budget}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-5 pe-lg-0 text-center">
                          {item.leads}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-5 pe-lg-0 text-center">
                          {item.reach}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-5 pe-lg-0 text-center">
                          {item.impression}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-5 pe-lg-0 text-center">
                          ${item.spent}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-5 pe-lg-0 text-center">
                          {item.conversion}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-5 pe-lg-0 text-center">
                          ${item.revenue}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-5 pe-lg-0 text-center">
                          {item.roas}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-5 pe-lg-0 text-center">
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
        </div>
      </section>
    </>
  );
};

export default AddManager;
