import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SidebarLogo from "../../assets/images/svg/sidebar-logo.svg";
import { useLayoutProvider } from "../../contexts/LayoutProvider";
import { sidebrlinks } from "./Helper";
import { LogoutBtnIcon } from "./Icons";
const Sidebar = () => {
  const { setSidebarOpen, sidebarOpen } = useLayoutProvider();
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const [active, setActive] = useState(0);

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
          <div className="w-100 d-flex pt-3 pt-lg-4 ps-4 pe-2 ms-lg-4 flex justify-content-between align-items-center">
            <Link to="/">
              <img className="sidebar_logo" src={SidebarLogo} alt="logo" />
            </Link>
            <span className="d-lg-none" onClick={() => setSidebarOpen(false)}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.7824 4.0319C11.8358 3.97852 11.8782 3.91513 11.9072 3.84536C11.9361 3.77559 11.9511 3.7008 11.9511 3.62525C11.9512 3.54971 11.9363 3.4749 11.9075 3.4051C11.8786 3.33529 11.8363 3.27185 11.7829 3.2184C11.7295 3.16495 11.6661 3.12254 11.5963 3.09359C11.5266 3.06464 11.4518 3.04972 11.3762 3.04967C11.3007 3.04962 11.2259 3.06446 11.1561 3.09332C11.0863 3.12219 11.0228 3.16452 10.9694 3.2179L7.50039 6.6869L4.03239 3.2179C3.92445 3.10996 3.77804 3.04932 3.62539 3.04932C3.47273 3.04932 3.32633 3.10996 3.21839 3.2179C3.11045 3.32584 3.0498 3.47225 3.0498 3.6249C3.0498 3.77756 3.11045 3.92396 3.21839 4.0319L6.68739 7.4999L3.21839 10.9679C3.16494 11.0213 3.12254 11.0848 3.09362 11.1546C3.06469 11.2245 3.0498 11.2993 3.0498 11.3749C3.0498 11.4505 3.06469 11.5253 3.09362 11.5952C3.12254 11.665 3.16494 11.7285 3.21839 11.7819C3.32633 11.8898 3.47273 11.9505 3.62539 11.9505C3.70098 11.9505 3.77582 11.9356 3.84566 11.9067C3.91549 11.8777 3.97894 11.8353 4.03239 11.7819L7.50039 8.3129L10.9694 11.7819C11.0773 11.8897 11.2237 11.9502 11.3762 11.9501C11.5288 11.95 11.6751 11.8893 11.7829 11.7814C11.8907 11.6735 11.9512 11.5271 11.9511 11.3745C11.951 11.222 11.8903 11.0757 11.7824 10.9679L8.31339 7.4999L11.7824 4.0319Z"
                  fill="black"
                />
              </svg>
            </span>
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
                          onClick={() => {
                            navigate(item.url);
                            setSidebarOpen(false);
                          }}
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
