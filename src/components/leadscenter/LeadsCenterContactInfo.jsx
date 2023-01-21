import React, { useState } from "react";
import { LeadsCenterContactDetails } from "../common/Helper";
const LeadsCenterContactInfo = () => {
  const [showtab, setShowtab] = useState(LeadsCenterContactDetails[0]);
  return (
    <>
      <>
        {/* <section className="p-3">
          <div className="d-flex overflow-auto pb-3">
            {LeadsCenterContactDetails &&
              LeadsCenterContactDetails.map((item, index) => {
                return (
                  <a
                    key={index}
                    onClick={() => setShowtab(item)}
                    className={`${
                      item == showtab ? "tab_border color_blue " : "header_tabs"
                    } text-decoration-none ff_thicccboi_medium font-xl color_gray position-relative  me-4 me-sm-5 text-nowrap`}
                    href="#"
                  >
                    {item.tabHeading}{" "}
                    <span
                      className={
                        item.noOfLeads
                          ? "color_dark_black font-sm ff_thicccboi_medium ms-2 py-1 px-2 bg_light_grey"
                          : "d-none"
                      }
                    >
                      {item.noOfLeads}
                    </span>
                    <span className={item.arrow ? "ms-4" : "d-none"}>
                      {item.arrow}
                    </span>
                  </a>
                );
              })}
          </div>
          <hr className="header_hr_line" />
        </section> */}
        <div className="mb-3">{showtab.content}</div>
      </>
    </>
  );
};

export default LeadsCenterContactInfo;
