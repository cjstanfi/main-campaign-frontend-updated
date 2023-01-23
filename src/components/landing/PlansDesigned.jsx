import React from "react";
import { PlansCardData } from "../common/Helper";
import check from "../../assets/images/landing/svg/check-icon.svg";
const Plansdesigned = () => {
  return (
    <>
      <section className="my-5">
        <div className="container">
          <h2 className="text-center sub_heading mb-md-5 pb-4">
            Plans designed <br /> for you to grow.
          </h2>
          <div className="row gap-4 gap-sm-0 justify-content-center">
            <div className="col-sm-6 col-xl-5 col-xxl-4 ">
              <div className="plans_cards mx-auto d-flex ">
                <div className="d-flex flex-column justify-content-between me-3">
                  <div>
                    <h3 className="font-4xl fw-bold ff_thicccboi_bold color_dark_black mb-2 mb-lg-3 pb-lg-1">
                      small business
                    </h3>
                    <h4 className="font-2xl fw_semibold ff_thicccboi_bold color_dark_black">
                      $199 <span className="color_blue fs_22 ">/ month</span>
                    </h4>
                    <ul className="list-unstyled mt-md-4 pt-2 mb-0">
                      <div className="d-flex gap-2 ">
                        <img
                          className="check_icon"
                          src={check}
                          alt="check icon"
                        />
                        <li className="font-lg  fw_md ff_thicccboi_medium color_dark_black">
                          1 CRM & marketing platform integration
                        </li>
                      </div>
                      <div className="d-flex gap-2  mt-2 mt-lg-3 ">
                        <img
                          className="check_icon"
                          src={check}
                          alt="check icon"
                        />
                        <li className="font-lg  fw_md ff_thicccboi_medium color_dark_black ">
                          Accurate campaign lead data
                        </li>
                      </div>
                      <div className="d-flex gap-2  mt-3">
                        <img
                          className="check_icon"
                          src={check}
                          alt="check icon"
                        />
                        <li className="font-lg  fw_md ff_thicccboi_medium color_dark_black ">
                          Full access to reports
                        </li>
                      </div>
                      <div className="d-flex gap-2  mt-3">
                        <img
                          className="check_icon"
                          src={check}
                          alt="check icon"
                        />
                        <li className="font-lg  fw_md ff_thicccboi_medium color_dark_black ">
                          Unlimited team members
                        </li>
                      </div>
                    </ul>
                  </div>
                  <div className="text-center">
                    <button className="leads_btn border-0 font-md fw_md ff_thicccboi_medium color_white">
                      Start My Free Trial
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-5 col-xxl-4">
              <div className="plans_cards mx-auto me-l g-auto d-flex justify-content-between flex-column">
                <div className="me-3">
                  <div>
                    <h3 className="font-4xl fw-bold ff_thicccboi_bold color_dark_black mb-2 mb-lg-3 pb-lg-1">
                      Enterprise
                    </h3>
                    <h4 className="font-2xl fw_semibold ff_thicccboi_bold color_dark_black">
                      Custom Pricing
                      <span className="color_blue fs_22 ">/ month</span>
                    </h4>
                    <ul className="list-unstyled mt-md-4 pt-2  mb-0">
                      <div className="d-flex gap-2 ">
                        <img
                          className="check_icon"
                          src={check}
                          alt="check icon"
                        />
                        <li className="font-lg  fw_md ff_thicccboi_medium color_dark_black">
                          Multiple CRM & marketing platform integrations
                        </li>
                      </div>
                      <div className="d-flex gap-2  mt-2 mt-lg-3 ">
                        <img src={check} alt="check icon" />
                        <li className="font-lg  fw_md ff_thicccboi_medium color_dark_black ">
                          Accurate campaign lead data{" "}
                        </li>
                      </div>
                      <div className="d-flex gap-2  mt-2 mt-lg-3 ">
                        <img
                          className="check_icon"
                          src={check}
                          alt="check icon"
                        />
                        <li className="font-lg  fw_md ff_thicccboi_medium color_dark_black ">
                          Full access to reports
                        </li>
                      </div>
                      <div className="d-flex gap-2  mt-2 mt-lg-3 ">
                        <img
                          className="check_icon"
                          src={check}
                          alt="check icon"
                        />
                        <li className="font-lg  fw_md ff_thicccboi_medium color_dark_black ">
                          Unlimited team members
                        </li>
                      </div>
                      <div className="d-flex gap-2  mt-2 mt-lg-3 ">
                        <img
                          className="check_icon"
                          src={check}
                          alt="check icon"
                        />
                        <li className="font-lg  fw_md ff_thicccboi_medium color_dark_black ">
                          Algorithm optimized for retargeting
                        </li>
                      </div>
                      <div className="d-flex gap-2  mt-2 mt-lg-3 ">
                        <img
                          className="check_icon"
                          src={check}
                          alt="check icon"
                        />
                        <li className="font-lg  fw_md ff_thicccboi_medium color_dark_black ">
                          Dedicated account manager
                        </li>
                      </div>
                    </ul>
                  </div>
                  <div className="text-center pt-4 mt-2">
                    <button className="leads_btn border-0 font-md fw_md ff_thicccboi_medium color_white">
                      Start My Free Trial
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main_campaign_box"></div>
        </div>
      </section>
    </>
  );
};

export default Plansdesigned;
