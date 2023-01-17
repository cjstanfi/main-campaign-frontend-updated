import React, { useState } from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LeadsCenter from "../components/LeadsCenter";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import Settings from "./Settings";

const Dashboard = () => {
  return (
    <>
      {/* <div className="d-flex">
        <Sidebar />
        <Outlet />
      </div> */}
      <LeadsCenter />
    </>
  );
};

export default Dashboard;
