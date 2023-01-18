import React from "react";
import Header from "../components/Header";
import TopBar from "../components/TopBar";
import { useLayoutProvider } from "../contexts/LayoutProvider";

const Settings = () => {
  const { setSidebarOpen, sidebarOpen } = useLayoutProvider();

  return (
    <>
      {" "}
      <div className="w-100 vh-100 overflow-auto">
        <div
          className={`mt-1 pt-3 position-fixed top-0 w-100 text-white ${
            sidebarOpen ? "toggle_active" : ""
          }`}
        >
          <div
            id="main-menu"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hamburger-menu d-inline-block d-lg-none"
          >
            <span className="first"></span>
            <span className="sec"></span>
            <span className="third"></span>
          </div>
        </div>
        <TopBar />
        <Header />
      </div>
    </>
  );
};

export default Settings;
