import React from "react";
import MapImg from "../assets/images/png/world-map.png";
import MapSmallImg from "../assets/images/png/small-map.png";
import UnitedKingdomFlag from "../assets/images/png/united-kingdom.png";
import AustraliaFlag from "../assets/images/png/australia.png";
const DashboardMap = () => {
  return (
    <>
      <section className="px-3 px-lg-5 py-5 pt-xl-4">
        <div className="box">
          <div className="row">
            <div className="col-xl-8 col-xxl-9">
              <h2 className="font-xl fw-bold ff_thicccboi_bold color_gray">
                Your top demographics
              </h2>
              <div className="position-relative">
                <div className="position-absolute map_text">
                  <div className="map_text_bg px-2 p-sm-2">
                    <span className="font-xsm fw-normal color_dark_gray">
                      United States
                    </span>
                    <span className="font-xs fw-normal color_dark_black ps-3">
                      50.2k
                    </span>
                  </div>
                </div>
                <img className="w-100" src={MapImg} alt="world-map" />
              </div>
            </div>
            <div className="col-xl-4 col-xxl-3 border_left_map pt-4 pt-xl-0">
              <p className="font-2xl fw_600 ff_thicccboi_semibold color_dark_black ps-3 mb-2 mb-xl-4">
                225.25k
              </p>
              <img className="w-100" src={MapSmallImg} alt="small-map" />
              <div className="d-flex justify-content-between align-items-center pt-4 px-xxl-3">
                <div className="d-flex align-items-center">
                  <img src={UnitedKingdomFlag} alt="united-kingdom" />
                  <p className="font-xl fw_500 ff_thicccboi_medium color_dark_black mb-0 ps-3">
                    United Kingdom
                  </p>
                </div>
                <p className="font-xl fw_500 ff_thicccboi_medium color_gray mb-0">
                  41.2k
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center pt-4 mt-sm-2 px-xxl-3">
                <div className="d-flex align-items-center">
                  <img src={AustraliaFlag} alt="united-kingdom" />
                  <p className="font-xl fw_500 ff_thicccboi_medium color_dark_black mb-0 ps-3">
                    Australia
                  </p>
                </div>
                <p className="font-xl fw_500 ff_thicccboi_medium color_gray mb-0">
                  24.2k
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center pt-4 pt-sm-5 mt-sm-3">
                <p className="font-xl fw_500 ff_thicccboi_medium color_black mb-0">
                  15 more countires
                </p>
                <a
                  href="/"
                  className="font-md fw-normal color_blue text-decoration-none"
                >
                  View all
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardMap;
