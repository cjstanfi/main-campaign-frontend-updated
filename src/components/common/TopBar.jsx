import React from "react";
import { useLocation } from "react-router-dom";
import DashBoardCalendarly from "../dashboard/DashBoardCalendarly";
import AddBussinessDropdown from "./AddBussinessDropdown";
import ProfileMenu from "./ProfileMenu";

const TopBar = ({ heading, para }) => {
  const path = useLocation().pathname;
  return (
    <>
      <section className="pt-3 pt-lg-0 position-relative">
        <div className="d-xxl-flex pt-lg-5 pb-4 pb-xl-3 justify-content-between align-items-center">
          <div>
            <h3 className="font-3xl color_dark_black fw_600 mb-1 ff_thicccboi_semibold">
              {heading}
            </h3>
            <p className="font-md color_gray fw_400 mb-0">{para}</p>
            {path === "/dashboard" && <AddBussinessDropdown />}
          </div>
          <div className="d-md-flex align-items-center pt-3 pt-xxl-0">
            {path === "/dashboard" && <DashBoardCalendarly />}

            <ProfileMenu />
          </div>
        </div>
      </section>
    </>
  );
};

export default TopBar;
