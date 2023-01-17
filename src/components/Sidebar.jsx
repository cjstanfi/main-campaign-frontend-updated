import React, { useState } from "react";
import Header from "./Header";
import TopBar from "./TopBar";
import SidebarLogo from "../assets/images/svg/sidebar-logo.svg";
import {
  AnalyticsIcon,
  DashboardIcon,
  LeadsIcon,
  SettingsIcon,
  SupportIcon,
  LogoutBtnIcon,
} from "./common/Icons";
const Sidebar = () => {
  const [sidebarActive, setActive] = useState(false);
  return (
    <>
      <div className="d-flex">
        <div
          className={`sidebar_parent pt-lg-5  ${
            sidebarActive ? "sidebar_active sidebar_shadow" : ""
          }`}
        >
          <div className="pt-3 pt-lg-4 ps-4 ms-lg-4">
            <a href="/">
              <img className="sidebar_logo" src={SidebarLogo} alt="logo" />
            </a>
          </div>
          <ul className="ps-0 mt-lg-5 pt-3">
            <li className="list-unstyled">
              <a className="cursor_pointer text-decoration-none">
                <div className="transition_03 sidebar_tab_effect px-4 ms-lg-4 mx-2 me-lg-5 py-2 py-md-3">
                  <span>
                    <DashboardIcon />
                  </span>
                  <span className="ps-3 font-sm fw_600 ff_thicccboi_semibold sidebar_tab_text">
                    Dashboard
                  </span>
                </div>
              </a>
            </li>
            <li className="list-unstyled pt-2 pt-md-0">
              <a className="cursor_pointer text-decoration-none">
                <div className="transition_03 sidebar_tab_effect px-4 ms-lg-4 mx-2 me-lg-5 py-2 py-md-3">
                  <span>
                    <AnalyticsIcon />
                  </span>
                  <span className="ps-3 font-sm fw_600 ff_thicccboi_semibold sidebar_tab_text">
                    Analytics
                  </span>
                </div>
              </a>
            </li>
            <li className="list-unstyled pt-2 pt-md-0">
              <a className="cursor_pointer text-decoration-none">
                <div className="transition_03 sidebar_tab_effect px-4 ms-lg-4 mx-2 me-lg-5 py-2 py-md-3">
                  <span>
                    <LeadsIcon />
                  </span>
                  <span className="ps-3 font-sm fw_600 ff_thicccboi_semibold sidebar_tab_text">
                    Leads Center
                  </span>
                </div>
              </a>
            </li>
            {/* <div className="d-flex align-items-center transition_03 sidebar_tab_effect px-4 ms-lg-4 me-lg-5">
              <DashboardIcon />
              <li className="py-3 ps-3 list-unstyled font-sm fw_600 ff_thicccboi_semibold sidebar_tab_text">
                Dashboard
              </li>
            </div> */}
            {/* <div className="d-flex align-items-center transition_03 sidebar_tab_effect px-4 ms-lg-4 me-lg-5">
              <AnalyticsIcon />
              <li className="py-3 ps-3 list-unstyled font-sm fw_600 ff_thicccboi_semibold sidebar_tab_text">
                Analytics
              </li>
            </div> */}
            {/* <div className="d-flex align-items-center transition_03 sidebar_tab_effect px-4 ms-lg-4 me-lg-5">
              <LeadsIcon />
              <li className="py-3 ps-3 list-unstyled font-sm fw_600 ff_thicccboi_semibold sidebar_tab_text">
                Leads Center
              </li>
            </div> */}
          </ul>
          <div className="pt-lg-4">
            <p className="font-sm fw_600 ff_thicccboi_semibold color_blue letter_space ps-4 ms-lg-4 mb-2">
              MORE
            </p>
            <ul className="ps-0">
              {/* <div className="d-flex align-items-center transition_03 sidebar_tab_effect px-4 ms-lg-4 me-lg-5">
                <SettingsIcon />
                <li className="py-3 ps-3 list-unstyled font-sm fw_600 ff_thicccboi_semibold sidebar_tab_text">
                  Settings
                </li>
              </div> */}
              {/* <div className="d-flex align-items-center transition_03 sidebar_tab_effect px-4 ms-lg-4 me-lg-5">
                <SupportIcon />
                <li className="py-3 ps-3 list-unstyled font-sm fw_600 ff_thicccboi_semibold sidebar_tab_text">
                  Support
                </li>
              </div> */}
              <li className="list-unstyled pt-2 pt-md-0">
                <a className="cursor_pointer text-decoration-none">
                  <div className="transition_03 sidebar_tab_effect px-4 ms-lg-4 mx-2 me-lg-5 py-2 py-md-3">
                    <span>
                      <SettingsIcon />
                    </span>
                    <span className="ps-3 font-sm fw_600 ff_thicccboi_semibold sidebar_tab_text">
                      Settings
                    </span>
                  </div>
                </a>
              </li>
              <li className="list-unstyled pt-2 pt-md-0">
                <a className="cursor_pointer text-decoration-none">
                  <div className="transition_03 sidebar_tab_effect px-4 ms-lg-4 mx-2 me-lg-5 py-2 py-md-3">
                    <span>
                      <SupportIcon />
                    </span>
                    <span className="ps-3 font-sm fw_600 ff_thicccboi_semibold sidebar_tab_text">
                      Support
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center px-4 ms-lg-4 me-lg-5 mt-5">
            <LogoutBtnIcon />
            <a
              href="/"
              className="py-3 ps-3 font-sm fw_600 ff_thicccboi_semibold color_red text-decoration-none"
            >
              Logout
            </a>
          </div>
        </div>
        <div className="w-100 vh-100 overflow-auto">
          <div
            className={`mt-1 pt-3 position-fixed top-0 w-100 text-white ${
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
          <TopBar />
          <Header />
          {/* <Profile /> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
