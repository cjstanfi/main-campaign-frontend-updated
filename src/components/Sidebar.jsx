import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SidebarLogo from "../assets/images/svg/sidebar-logo.svg";
import { useLayoutProvider } from "../contexts/LayoutProvider";
import { sidebrlinks } from "./common/Helper";
import { LogoutBtnIcon } from "./common/Icons";
const Sidebar = () => {
  const { setSidebarOpen, sidebarOpen } = useLayoutProvider();
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const [active, setActive] = useState(0);
  console.log(path);
  return (
    <>
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="sidebar-overlay"
        ></div>
      )}

      <div
        className={`sidebar_parent pt-lg-5 d-flex flex-column justify-content-between vertical_line_asidebar ${
          sidebarOpen ? "sidebar_active sidebar_shadow" : ""
        }`}
      >
        <div>
          <div className="pt-3 pt-lg-4 ps-4 ms-lg-4">
            <Link to="/">
              <img className="sidebar_logo" src={SidebarLogo} alt="logo" />
            </Link>
          </div>

          <div className="pt-4">
            {sidebrlinks &&
              sidebrlinks.map((obj, index) => (
                <div className="pt-lg-4" key={index}>
                  <p className="font-sm fw_600 ff_thicccboi_semibold color_blue letter_space ps-4 ms-lg-4 mb-2">
                    {obj.name.length > 0 && obj.name}
                  </p>
                  <ul className="ps-0 list-unstyled">
                    {obj.list &&
                      obj.list.map((item, index) => (
                        <li
                          onClick={() => navigate(item.url)}
                          className={`${
                            item.url === path ? "sidebar-item-active" : ""
                          } sidebar_tab_effect px-4 ms-lg-4 mx-2 me-lg-4  py-2 py-md-3 mt-2`}
                          key={index}
                        >
                          <span>{item.icon}</span>
                          <span className="ps-3 font-sm fw_600 ff_thicccboi_semibold sidebar_tab_text">
                            {item.title}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
        <div className="d-flex align-items-center px-4 ms-lg-4 me-lg-5 mt-5">
          <LogoutBtnIcon />
          <button className="bg-transparent  border-0 py-3 ps-3 font-sm fw_600 ff_thicccboi_semibold color_red text-decoration-none">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
