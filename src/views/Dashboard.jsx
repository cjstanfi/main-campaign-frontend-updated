import React, { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import SidebarLogo from "../assets/images/svg/sidebar-logo.svg";
import Sidebar from "../components/common/Sidebar";
import { useLayoutProvider } from "../contexts/LayoutProvider";

const Dashboard = () => {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const { setSidebarOpen } = useLayoutProvider();

  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="px-3 px-xxl-4 px-3xl-5 w-100 vh-100  w-100  overflow-auto">
          <div className="d-flex d-lg-none align-items-center justify-content-between py-2 p-lg-2">
            <Link to="/">
              <img className="sidebar_logo" src={SidebarLogo} alt="logo" />
            </Link>

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
