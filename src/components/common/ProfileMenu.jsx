import React from "react";
import { Link, useLocation } from "react-router-dom";
import UserIcon from "../../assets/images/png/User_icon.png";
import UserIconTick from "../../assets/images/svg/User_icon_tick.svg";
import { NotificationIcon, SettingIcon } from "./Icons";
import TimeDurationTabs from "./TimeDurationTabs";

const ProfileMenu = () => {
  const path = useLocation().pathname;
  return (
    <>
      <div className="d-sm-flex mt-3 mt-md-1 align-items-center">
        {path === "/dashboard/analytics" ? <TimeDurationTabs /> : ""}
        <div className="d-flex pt-3 pt-md-0 align-items-center">
          <span className="icon_bg_color border_r_12 cursor_pointer icon_size d-flex align-items-center justify-content-center">
            <SettingIcon />
          </span>
          <span className="icon_bg_color border_r_12 cursor_pointer icon_size d-flex align-items-center justify-content-center ms-3">
            <NotificationIcon />
          </span>
          <Link
            to="/dashboard/settings"
            className="position-relative pe_12 cursor_pointer"
          >
            <span>
              <img
                className="user_icon user_icon_size"
                src={UserIcon}
                alt="Icon"
              />
              <img
                className="position-absolute top-50 translate-middle-x"
                src={UserIconTick}
                alt="Verified"
              />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileMenu;
