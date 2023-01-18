import React from "react";
import { Outlet } from "react-router-dom";
import AddManager from "../components/AddManager";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="px-3 w-100 px-lg-5 w-100 vh-100 overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
