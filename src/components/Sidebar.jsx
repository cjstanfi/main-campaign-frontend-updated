import React, { useState } from "react";
import SidebarLogo from "../assets/images/svg/sidebar-logo.svg";
import {
  AnalyticsIcon,
  DashboardIcon,
  LeadsIcon,
  SettingsIcon,
  SupportIcon,
} from "./common/Icons.2";
const Sidebar = () => {
  const [sidebarActive, setActive] = useState(false);

  return (
    <>
      <div className="d-flex">
        <div
          className={`sidebar_parent pt-5  ${
            sidebarActive ? "sidebar_active" : ""
          }`}
        >
          <div className="pt-4 ps-4 ms-lg-4">
            <img className="sidebar_logo" src={SidebarLogo} alt="logo" />
          </div>
          <ul className="ps-4 ms-lg-4 mt-5 pt-3">
            <div className="d-flex align-items-center transition_03 sidebar_tab_effect">
              <DashboardIcon />
              <li className="py-4 ps-3 list-unstyled font-sm fw_600 ff_thicccboi_semibold color_gray">
                Dashboard
              </li>
            </div>
            <div className="d-flex align-items-center transition_03">
              <AnalyticsIcon />
              <li className="py-4 ps-3 list-unstyled font-sm fw_600 ff_thicccboi_semibold color_gray">
                Analytics
              </li>
            </div>
            <div className="d-flex align-items-center transition_03">
              <LeadsIcon />
              <li className="py-4 ps-3 list-unstyled font-sm fw_600 ff_thicccboi_semibold color_gray">
                Leads Center
              </li>
            </div>
          </ul>
          <div className="pt-4">
            <p className="font-sm fw_600 ff_thicccboi_semibold color_blue letter_space ps-4 ms-lg-4 mb-2">
              MORE
            </p>
            <ul className="ps-4 ms-lg-4">
              <div className="d-flex align-items-center transition_03">
                <SettingsIcon />
                <li className="py-4 ps-3 list-unstyled font-sm fw_600 ff_thicccboi_semibold color_gray">
                  Settings
                </li>
              </div>
              <div className="d-flex align-items-center transition_03">
                <SupportIcon />
                <li className="py-4 ps-3 list-unstyled font-sm fw_600 ff_thicccboi_semibold color_gray">
                  Support
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="w-100 vh-100 overflow-auto">
          <div
            className={`pt-3 py-3bg-primary position-fixed top-0 w-100 text-white ${
              sidebarActive ? "toggle_active" : ""
            }`}
          >
            <div
              id="main-menu"
              onClick={() => setActive(!sidebarActive)}
              className="hamburger-menu d-inline-block d-lg-none"
            >
              <span className="first"></span>
              <span className="sec"></span>
              <span className="third"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
