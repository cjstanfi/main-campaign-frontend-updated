import React, { useState } from "react";
import { LeadsCenterContactDetails } from "./common/Helper";
const LeadsCenterContactInfo = () => {
  const [showtab, setShowtab] = useState(LeadsCenterContactDetails[0]);
  console.log(LeadsCenterContactDetails);
  return (
    <>
      <>
        <section className="p-3">
          <div className="d-flex overflow-auto pb-3">
            {LeadsCenterContactDetails &&
              LeadsCenterContactDetails.map((item, index) => {
                return (
                  <a
                    key={index}
                    onClick={() => setShowtab(item)}
                    className={`${
                      item == showtab ? "tab_border color_blue " : "header_tabs"
                    } text-decoration-none ff_thicccboi_medium font-xl color_gray position-relative  me-4 me-sm-5`}
                    href="#"
                  >
                    {item.tabHeading}
                  </a>
                );
              })}
          </div>
          <hr className="header_hr_line" />
        </section>
        <div className="mb-3">{showtab.content}</div>
      </>
    </>
  );
};

export default LeadsCenterContactInfo;
