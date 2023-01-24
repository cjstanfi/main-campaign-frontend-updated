import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import SidebarLogo from "../assets/images/svg/sidebar-logo.svg";
import SidebarsmallLogo from "../assets/images/svg/logo-small.svg";
import { NotificationIcon, SettingIcon } from "../components/common/icons";
import Sidebar from "../components/common/Sidebar";
import { useLayoutProvider } from "../contexts/LayoutProvider";
import UserIcon from "../assets/images/png/User_icon.png";
import UserIconTick from "../assets/images/svg/User_icon_tick.svg";

const Dashboard = () => {
  // const path = useLocation().pathname;
  // const navigate = useNavigate();
  const { setSidebarOpen } = useLayoutProvider();

  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="px-3 px-xxl-4 px-3xl-5 w-100 vh-100  w-100  overflow-auto">
          <div className="d-flex d-lg-none align-items-center justify-content-between py-2 p-lg-2">
            <Link to="/" className="d-none d-md-block">
              <img className="sidebar_logo" src={SidebarLogo} alt="logo" />
            </Link>
            <Link to="/">
              <img
                className="sidebar_logo d-md-none"
                src={SidebarsmallLogo}
                alt="logo"
              />
            </Link>

            <div className="d-flex align-items-center d-md-none">
              <span className="icon_bg_color border_r_12 cursor_pointer icon_size d-flex align-items-center justify-content-center">
                <SettingIcon />
              </span>
              <span className="icon_bg_color border_r_12 cursor_pointer icon_size d-flex align-items-center justify-content-center ms-3">
                <NotificationIcon />
              </span>
              <Link
                to="/dashboard/settings"
                className="position-relative cursor_pointer"
              >
                <span>
                  <img
                    className="user_icon user_icon_size"
                    src={UserIcon}
                    alt="Icon"
                  />
                  <img
                    className="position-absolute top-50 translate-middle-x"
                    src={UserIconTick}
                    alt="Verified"
                  />
                </span>
              </Link>
            </div>
            <span
              onClick={() => setSidebarOpen((pre) => !pre)}
              className="cursor_pointer"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.75 12.25H13.25M2.75 8.25H13.25M2.75 4.25H13.25"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
