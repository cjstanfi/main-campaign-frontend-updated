import React from "react";
import { SettingIcon, NotificationIcon } from "./Icons";
import UserIcon from "../../assets/images/png/User_icon.png";
import UserIconTick from "../../assets/images/svg/User_icon_tick.svg";

const TopBar = ({ heading, para }) => {
  return (
    <>
      <section className="pt-3 pt-lg-0  position-relative">
        <div className="d-sm-flex pt-lg-5 pb-4 justify-content-between align-items-center">
          <div>
            <h3 className="font-3xl color_dark_black fw_600 mb-1 ff_thicccboi_semibold">
              {heading}
            </h3>
            <p className="font-md color_gray fw_400 mb-0">{para}</p>
          </div>
          <div className="d-flex align-items-center pt-3 pt-sm-0 ">
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
      </section>
    </>
  );
};

export default TopBar;