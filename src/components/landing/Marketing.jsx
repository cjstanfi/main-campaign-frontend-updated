import React, { useState } from "react";
import MarketingImg from "../../assets/images/landing/png/marketing-img.png";
import { marketingData } from "../common/Helper";
import ArrowIconTwo from "../../assets/images/landing/svg/hero-arrow-icon-2.svg"
const Marketing = () => {
   const [marketingShow, setMarketingShow] = useState(marketingData[0]);
  return (
    <>
      <div className="container pt-5 position-relative ">
        <div className="position-absolute arrow_icon_two">
          <img src={ArrowIconTwo} alt="hero-arrow-icon-2" />
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-11 z_index_1">
            <h2 className="sub_heading text-center">
              Marketing analytics that <br /> REALLY matter
            </h2>
            <div className="marketing-img mx-auto position-relative  pb-3 pb-sm-0">
              <img className="w-100" src={MarketingImg} alt="Marketingimg" />
            </div>
            <div className="marketing_box custom_margin position-relative">
              <div className="overflow-auto py-3 text-center">
                {marketingData &&
                  marketingData.map((val, index) => {
                    return (
                      <a
                        onClick={() => setMarketingShow(val)}
                        key={index}
                        className={`${
                          val === marketingShow
                            ? "revenue_tabs_2 color_white"
                            : "color_dark_blue revenue_tabs"
                        } text-decoration-none font-22 fw-bold ff_thicccboi_bold cursor_pointer text-nowrap`}
                      >
                        {val.tabheading}
                      </a>
                    );
                  })}
              </div>
              <div className="pt-2 pt-sm-4">{marketingShow.content}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketing;
