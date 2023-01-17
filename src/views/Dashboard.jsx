import React from "react";
import { Outlet } from "react-router";
import DashboardCards from "../components/DashboardCards";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="dflex">
        {/* <Sidebar />
        <Outlet /> */}
        <DashboardCards />
      </div>
    </>
  );
};

export default Dashboard;
