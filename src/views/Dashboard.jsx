import React from "react";
import { Outlet } from "react-router-dom";
import AddManager from "../components/AddManager";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      {/* <div className="d-flex">
        <Sidebar />
        <Outlet />
      </div> */}
      <AddManager />
    </>
  );
};

export default Dashboard;
