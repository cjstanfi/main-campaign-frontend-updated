import React from "react";
import { cardsData } from "../components/common/Helper";
import ToolTipIcon from "../assets/images/svg/cards-icon.svg";

const DashboardCards = () => {
  return (
    <>
      <section className="py-5">
        {/* <div className="row justify-content-between"> */}
        <div className="d-flex">
          {cardsData.map((val, index) => {
            return (
              <div key={index}>
                <div className="dashboard_card_bg position-relative">
                  <div className="position-absolute bottom-0">
                    <img className="w-100" src={val.imgUrl} alt="cards-graph" />
                  </div>

                  <div className="d-flex justify-content-between pt-3 ps-3">
                    <div className="d-flex justify-content-between pt-1">
                      <h2 className="font-xl fw_600 color_gray ff_thicccboi_semibold pt-1">
                        {val.heading}
                      </h2>
                      <div className="ps-2">
                        <img src={ToolTipIcon} alt="cards-icon" />
                      </div>
                    </div>
                    <div className="cards_text_bg me-2">
                      <p className="mb-0 font-sm fw_500 ff_thicccboi_medium color_green">
                        {val.subheading}
                      </p>
                    </div>
                  </div>
                  <p className="font-2xl fw_600 color_dark_black ff_thicccboi_semibold ps-3">
                    {val.amount}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default DashboardCards;
