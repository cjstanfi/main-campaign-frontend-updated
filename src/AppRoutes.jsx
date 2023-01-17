import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import DashboardHome from "./views/DashboardHome";
import Settings from "./views/Settings";
import LeadsCenter from "./views/LeadsCenter";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Dashboard />}>
              <Route exact path="/dashboard" element={<DashboardHome />} />
              <Route exact path="/settings" element={<Settings />} />
              <Route exact path="/leads-center" element={<LeadsCenter />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
