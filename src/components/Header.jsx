import React, { useState } from "react";
import { TabData } from "./common/Helper";
const Header = () => {
  const [showtab, setShowtab] = useState(TabData[0]);
  return (
    <>
      <section className="ms-1 ms-lg-0">
        <div className="px-3 px-lg-5">
          <div className="d-flex overflow-auto pb-3">
            {TabData &&
              TabData.map((item, index) => {
                return (
                  <a
                    onClick={() => setShowtab(item)}
                    className={`${
                      index == 0 ? "" : "ms-4 ms-sm-5 "
                    } text-decoration-none ff_thicccboi_bold font-xl color_gray  `}
                    href="#"
                  >
                    {item.tabHeading}
                  </a>
                );
              })}

            {/* <a
              className="text-decoration-none ff_thicccboi_bold font-xl color_blue"
              href="#"
            >
              Profile
            </a>
            <a
              className="text-decoration-none ff_thicccboi_medium font-xl color_gray ms-4 ms-sm-5"
              href="#"
            >
              Facebook
            </a>
            <a
              className="text-decoration-none ff_thicccboi_medium font-xl color_gray ms-4 ms-sm-5"
              href="#"
            >
              CRM
            </a>
            <a
              className="text-decoration-none ff_thicccboi_medium font-xl color_gray ms-4 ms-sm-5"
              href="#"
            >
              Business
            </a>
            <a
              className="text-decoration-none ff_thicccboi_medium font-xl color_gray ms-4 ms-sm-5"
              href="#"
            >
              Privacy
            </a>
            <a
              className="text-decoration-none ff_thicccboi_medium font-xl color_gray ms-4 ms-sm-5"
              href="#"
            >
              Billing
            </a>
            <a
              className="text-decoration-none ff_thicccboi_medium font-xl color_gray ms-4 ms-sm-5"
              href="#"
            >
              Team
            </a>
            <a
              className="text-decoration-none ff_thicccboi_medium font-xl color_gray ms-4 ms-sm-5"
              href="#"
            >
              Security
            </a> */}
          </div>
          <hr className="header_hr_line" />
        </div>
      </section>
      <div>{showtab.content}</div>
    </>
  );
};

export default Header;
