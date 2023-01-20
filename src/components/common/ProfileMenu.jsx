import React from 'react'
import { SettingIcon, NotificationIcon } from "./Icons";
import UserIcon from "../../assets/images/png/User_icon.png";
import UserIconTick from "../../assets/images/svg/User_icon_tick.svg";
const ProfileMenu = () => {
  return (
    <>
      <div className="d-flex mt-3 mt-md-1">
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
    </>
  );
}

export default ProfileMenu