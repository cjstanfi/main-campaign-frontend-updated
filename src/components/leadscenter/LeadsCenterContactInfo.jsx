import React, { useState } from "react";
import { LeadsCenterContactDetails } from "../common/Helper";
import { ThreeDots } from "../common/Icons";
import LeadsDropdownTabs from "./LeadsDropdownTabs";
// import Dropdown from "react-bootstrap/Dropdown";
const LeadsCenterContactInfo = () => {
  const [showtab, setShowtab] = useState(LeadsCenterContactDetails[0]);
  return (
    <>
      <>
        <section className="mt-4">
          <div className="d-flex overflow-auto pb-3 justify-content-between align-items-center">
            <div className="d-flex ">
              {LeadsCenterContactDetails &&
                LeadsCenterContactDetails.map((item, index) => {
                  return (
                    <a
                      key={index}
                      onClick={() => setShowtab(item)}
                      className={`${
                        item == showtab
                          ? "tab_border color_blue "
                          : "header_tabs"
                      } text-decoration-none ff_thicccboi_medium font-xl color_gray position-relative cursor_pointer me-4 me-sm-5 text-nowrap`}
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
                      <span
                        className={
                          item.arrow && showtab === item
                            ? "leads_center_arrow_icon ms-4"
                            : item.arrow
                            ? "ms-4 "
                            : "d-none"
                        }
                      >
                        {item.arrow}
                      </span>
                    </a>
                  );
                })}
            </div>
            <div>
              <span className="cursor_pointer">
                <ThreeDots />
                {/* <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    className="bg-transparent border-0 p-0 color_gray"
                  >
                    All Forms
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}
              </span>
            </div>
          </div>
          <hr className="header_hr_line" />
          <LeadsDropdownTabs />
        </section>
        <div className="mb-3">{showtab.content}</div>
      </>
    </>
  );
};

export default LeadsCenterContactInfo;
