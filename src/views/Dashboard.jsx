import React from "react";
import { Outlet } from "react-router-dom";
import AddManager from "../components/AddManager";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="px-3 px-lg-5">
          <Outlet />
        </div>
      </div>
      {/* <AddManager /> */}
    </>
  );
};

export default Dashboard;
