import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import DashboardHome from "./views/DashboardHome";
import Settings from "./views/Settings";
import LeadsCenter from "./views/LeadsCenter";
import Analytics from "./views/Analytics";
import Support from "./views/Support";
import Home from "./views/Home";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route exact path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route exact path="/dashboard/home" element={<DashboardHome />} />
              <Route exact path="/dashboard/settings" element={<Settings />} />
              <Route
                exact
                path="/dashboard/analytics"
                element={<Analytics />}
              />
              <Route
                exact
                path="/dashboard/leads-center"
                element={<LeadsCenter />}
              />
              <Route exact path="/dashboard/support" element={<Support />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
