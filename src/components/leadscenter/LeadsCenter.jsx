import React from "react";
import { LeadsContactInfo, TableTabs } from "../common/Helper";
import TablePagination from "../common/TablePagination";
const LeadsCenter = () => {
  return (
    <>
      <section>
        <div className="box">
          <div className="overflow-auto">
            <table className="w-100">
              <tbody>
                <tr>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap pb-3 ps-3 pe-5 pe-xxl-0">
                    Created Date
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap pb-3 pe-5 pe-xxl-0">
                    Name
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap pb-3 pe-5 pe-xxl-0">
                    Email
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap pb-3 pe-5 pe-xxl-0">
                    Phone
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap pb-3 pe-5 pe-xxl-0">
                    Stage
                  </th>
                  <th className="font-sm color_gray ff_thicccboi_semibold text-nowrap pb-3 pe-5 pe-xxl-0">
                    Source
                  </th>
                </tr>
                {LeadsContactInfo &&
                  LeadsContactInfo.map((item, index) => {
                    return (
                      <tr
                        className={`${index % 2 ? "" : "bg_light_grey"}  `}
                        key={index}
                      >
                        <td
                          className={`${
                            index % 2 ? "py-4" : ""
                          }  ff_thicccboi_semibold color_gray border_left font-md py-3 text-nowrap ps-3 pe-4 pe-xxl-0`}
                        >
                          {item.date}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-4 pe-xxl-0">
                          {item.name}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-4 pe-xxl-0">
                          {item.email}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-4 pe-xxl-0">
                          {item.phone}
                        </td>
                        <td className="ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-4 pe-xxl-0">
                          <span className="stage_circle"></span>
                          {item.stage}
                        </td>
                        <td className="border_right ff_thicccboi_semibold color_dark_black font-md py-3 text-nowrap pe-4 pe-xxl-0">
                          {item.source}
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

export default LeadsCenter;
