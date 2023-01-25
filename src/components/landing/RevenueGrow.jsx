import React from "react";
import { useState } from "react";
import { revenueTabsData } from "../common/Helper";
import ArrowIconOne from "../../assets/images/landing/svg/hero-arrow-icon-1.svg";
import ArrowIconTwo from "../../assets/images/landing/svg/hero-arrow-icon-2.svg";

const RevenueGrow = () => {
  const [revenueShow, setRevenueShow] = useState(revenueTabsData[0]);
  return (
    <>
      <section>
        <div className="container custom_container position-relative">
          <div className="position-absolute arrow_icon_three d-none d-lg-block">
            <img src={ArrowIconOne} alt="hero-arrow-icon-2" />
          </div>
          <div className="position-absolute arrow_icon_one">
            <img src={ArrowIconTwo} alt="hero-arrow-icon-2" />
          </div>
          <div className="row">
            <div className="col">
              <div className="marketing_box revenue_box ">
                <div className="px-xxl-5">
                  <h3 className="font-5xl fw-bold ff_thicccboi_bold color_dark_black text-center mb-3 mb-sm-4">
                    See your revenue grow in
                    <span className="d-xxl-block">
                      real time with our dashboards.
                    </span>
                  </h3>
                </div>
                <div className="overflow-auto py-3">
                  {revenueTabsData &&
                    revenueTabsData.map((val, index) => {
                      return (
                        <a
                          onClick={() => setRevenueShow(val)}
                          key={index}
                          className={`${
                            val === revenueShow
                              ? "revenue_tabs_2 color_white"
                              : "color_dark_blue revenue_tabs"
                          } text-decoration-none font-22 fw-bold ff_thicccboi_bold cursor_pointer text-nowrap me-sm-2 me-xl-4`}
                        >
                          {val.tabheading}
                        </a>
                      );
                    })}
                </div>
                <div className="pt-2 pt-sm-4">{revenueShow.content}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RevenueGrow;
