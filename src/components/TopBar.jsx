import React from "react";
import { SettingIcon } from "./common/icons";
import UserIcon from "../assets/images/png/User_icon.png";
import UserIconTick from "../assets/images/svg/User_icon_tick.svg";
import { NotificationIcon } from "./common/icons";
const TopBar = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="d-flex pt-5 pb-4 justify-content-between align-items-center">
            <div>
              <h3 className="font-3xl color_dark_black fw_600 mb-1 ff_thicccboi_semibold">
                Settings
              </h3>
              <p className="font-md colort_gray fw_400 mb-0">
                Change or update your settings
              </p>
            </div>
            <div className="d-flex align-items-center">
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
                    className="ms_30 user_icon_size"
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
