import React from "react";
import { SettingIcon, NotificationIcon } from "./Icons";
import UserIcon from "../../assets/images/png/User_icon.png";
import UserIconTick from "../../assets/images/svg/User_icon_tick.svg";
import Dropdown from "react-bootstrap/Dropdown";
import DashBoardCalendarly from "../dashboard/DashBoardCalendarly";
const TopBar = ({ heading, para }) => {
  return (
    <>
      <section className="pt-3 pt-lg-0 position-relative">
        <div className="d-xxl-flex pt-lg-5 pb-lg-4 justify-content-between align-items-center">
          <div>
            <h3 className="font-3xl color_dark_black fw_600 mb-1 ff_thicccboi_semibold">
              {heading}
            </h3>
            {/* <p className="font-md color_gray fw_400 mb-0">{para}</p> */}
            <div className="d-sm-flex pt-2 pt-lg-0">
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="font-md fw-normal color_gray bg-transparent dropdown_tab py-2"
                >
                  The Place Fitness (0126589526)
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <button className="ff_thicccboi_semibold font-sm ms-sm-2 border-0 text-white save_btn px-4 py-2 mt-2 mt-sm-0">
                + Add a Business
              </button>
            </div>
          </div>
          <div className="d-md-flex align-items-center pt-3 pt-xxl-0">
            <DashBoardCalendarly />
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
          </div>
        </div>
      </section>
    </>
  );
};

export default TopBar;
