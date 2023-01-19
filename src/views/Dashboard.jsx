import React from "react";
import { Link, Outlet } from "react-router-dom";
import AddManager from "../components/AddManager";
import Sidebar from "../components/Sidebar";
import { useLayoutProvider } from "../contexts/LayoutProvider";
import SidebarLogo from "../assets/images/svg/sidebar-logo.svg";
const Dashboard = () => {
  const { setSidebarOpen, sidebarOpen } = useLayoutProvider();
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
