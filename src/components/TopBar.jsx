import React from "react";
import { SettingIcon, NotificationIcon } from "./common/Icons";
import UserIcon from "../assets/images/png/User_icon.png";
import UserIconTick from "../assets/images/svg/User_icon_tick.svg";
const TopBar = () => {
  return (
    <>
      <section className="ps-5 ps-lg-0 pt-3 pt-lg-0 vertical_line_asidebar position-relative z_index">
        <div className="px-3 px-lg-5">
          <div className="d-sm-flex pt-lg-5 pb-4 justify-content-between align-items-center">
            <div>
              <h3 className="font-3xl color_dark_black fw_600 mb-1 ff_thicccboi_semibold">
                Settings
              </h3>
              <p className="font-md color_gray fw_400 mb-0">
                Change or update your settings
              </p>
            </div>
            <div className="d-flex align-items-center pt-3 pt-sm-0 topbar_icons">
              <a
                href="#"
                className="icon_bg_color border_r_12 cursor_pointer icon_size d-flex align-items-center justify-content-center"
              >
                <SettingIcon />
              </a>
              <a
                href="#"
                className="icon_bg_color border_r_12 cursor_pointer icon_size d-flex align-items-center justify-content-center ms-3"
              >
                <NotificationIcon />
              </a>
              <div className="position-relative pe_12">
                <a href="#">
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopBar;
