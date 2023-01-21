import React, { useState } from "react";
import { SettingIcon, NotificationIcon } from "./Icons";
import UserIcon from "../../assets/images/png/User_icon.png";
import UserIconTick from "../../assets/images/svg/User_icon_tick.svg";
const ProfileMenu = () => {
  const btnData = [
    {
      value: "24 hours",
      id: 0,
    },
    {
      value: "7 days",
      id: 1,
    },
    {
      value: "30 days",
      id: 2,
    },
    {
      value: "1 year",
      id: 3,
    },
  ];
  const [avtiveValue, setActiveValue] = useState("");
  return (
    <>
      <div className="d-sm-flex mt-3 mt-md-1 align-items-center">
        <div className="d-flex align-items-center px-sm-1 py-sm-2 bg_light_grey2 br_12px me-sm-3">
          {btnData.map((obj, index) => (
            <button
              onClick={() => setActiveValue(obj)}
              key={index}
              className={`px-3 py-2 br_9px mx-sm-1 border-0 text-nowrap ${
                avtiveValue.id === index ? "tab_active" : "bg-transparent"
              }`}
            >
              {obj.value}
            </button>
          ))}
        </div>
        <div className="d-flex pt-3 pt-md-0">
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
    </>
  );
};

export default ProfileMenu;
