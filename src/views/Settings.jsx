import React from "react";
import Header from "../components/Header";
import TopBar from "../components/TopBar";
import { useLayoutProvider } from "../contexts/LayoutProvider";

const Settings = () => {
  const { setActiveSidebar, activeSidebar } = useLayoutProvider();

  return (
    <>
      {" "}
      <div className="w-100 vh-100 overflow-auto">
        <div
          className={`mt-1 pt-3 position-fixed top-0 w-100 text-white ${
            activeSidebar ? "toggle_active" : ""
          }`}
        >
          <div
            id="main-menu"
            onClick={() => setActiveSidebar(!activeSidebar)}
            className="hamburger-menu d-inline-block d-lg-none"
          >
            <span className="first"></span>
            <span className="sec"></span>
            <span className="third"></span>
          </div>
        </div>
        <TopBar />
        <Header />
        {/* <Profile /> */}
      </div>
    </>
  );
};

export default Settings;
