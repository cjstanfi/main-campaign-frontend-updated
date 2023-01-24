// import React from "react";
import { useMediaQuery } from "react-responsive";
import React, { useEffect, useState } from "react";
import { useScreenFixedProvider } from "../common/context/ScreenFixedProvider";
import SidebarLogo from "../../assets/images/svg/sidebar-logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const BeforeDesktop = ({ children }) => {
    const isBeforeDesktop = useMediaQuery({ maxWidth: 991.98 });
    return isBeforeDesktop ? children : null;
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };

  const handldeOverlayActive = () => {
    document.body.classList.toggle("active-nav-overlay");
  };
  const { showOverlay, setShowOverlay } = useScreenFixedProvider();
  const [scrollPosition, setScrollPosition] = useState(0);

  // TO FIND SCROLL Y POSITION
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  // THIS USEFFECT GIVE US POSITION OF SCROLL IN EVERY PIXELS WE SCROLL
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section
        className="position-relative z-index-1 d-flex w-100 navbar-wrapper py-lg-3 py-xl-5 my-lg-2"
        id="home"
      >
        <div className="navbar-wrapper w-100 position-relative z-5 header_bg">
          <Desktop>
            <div className="container d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <div className="cursor_pointer">
                  <img src={SidebarLogo} alt="" />
                </div>
              </div>
              <div className="d-flex align-items-center">
                <Link to="/" className="text-decoration-none">
                  <span className="font-sm fw_600 ff_thicccboi_semibold color_light_black">
                    Login or Register
                  </span>
                </Link>
                <button className="font-sm fw_600 ff_thicccboi_semibold color_white leads_btn ms-5">
                  Start Free Trial
                </button>
              </div>
            </div>
          </Desktop>
          <BeforeDesktop>
            <div className="px-3 d-flex justify-content-between align-items-center py-4">
              <div className="nav-log cursor_pointer z-index_100">
                <img src={SidebarLogo} alt="logo" />
              </div>
              <div
                id="nav-icon1"
                className={`hamburger-menu me-3 me-sm-4`}
                onClick={() => handldeOverlayActive()}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={`navbar-overlay `}>
              <ul className="h-100 list-unstyled d-flex flex-column align-items-center justify-content-center m-0">
                <li className="" onClick={() => handldeOverlayActive()}>
                  <Link to="/" className="text-decoration-none">
                    <span className="font-sm fw_600 ff_thicccboi_semibold color_light_black">
                      Login or Register
                    </span>
                  </Link>
                </li>
                <li className="pt-3" onClick={() => handldeOverlayActive()}>
                  <button className="font-sm fw_600 ff_thicccboi_semibold color_white leads_btn">
                    Start Free Trial
                  </button>
                </li>
              </ul>
            </div>
          </BeforeDesktop>
        </div>
      </section>
    </>
  );
};

export default Header;
