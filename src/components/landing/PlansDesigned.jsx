import React from "react";
import check from "../../assets/images/landing/svg/check-icon.svg";
import campaignarrow from "../../assets/images/landing/svg/main-campaign-box-arrows.svg";
const Plansdesigned = () => {
  return (
    <>
      <section className="my-5 pt-3 pt-sm-5">
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
                      Small Business
                    </h3>
                    <h4 className="font-2xl fw_600 ff_thicccboi_bold color_dark_black">
                      $199 <span className="color_blue font-22 ">/ month</span>
                    </h4>
                    <ul className="list-unstyled mt-md-4 pt-2 mb-0">
                      <div className="d-flex gap-2 ">
                        <img
                          className="check_icon"
                          src={check}
                          alt="check icon"
                        />
                        <li className="font-lg  fw_500 ff_thicccboi_medium color_dark_black">
                          1 CRM & marketing platform integration
                        </li>
                      </div>
                      <div className="d-flex gap-2  mt-2 mt-lg-3 ">
                        <img
                          className="check_icon"
                          src={check}
                          alt="check icon"
                        />
                        <li className="font-lg  fw_500 ff_thicccboi_medium color_dark_black ">
                          Accurate campaign lead data
                        </li>
                      </div>
                      <div className="d-flex gap-2  mt-3">
                        <img
                          className="check_icon"
                          src={check}
                          alt="check icon"
                        />
                        <li className="font-lg  fw_500 ff_thicccboi_medium color_dark_black ">
                          Full access to reports
                        </li>
                      </div>
                      <div className="d-flex gap-2  mt-3">
                        <img
                          className="check_icon"
                          src={check}
                          alt="check icon"
                        />
                        <li className="font-lg  fw_500 ff_thicccboi_medium color_dark_black ">
                          Unlimited team members
                        </li>
                      </div>
                    </ul>
                  </div>
                  <div className="text-center pt-4 mt-2">
                    <button className="leads_btn border-0 font-md fw_500 ff_thicccboi_medium color_white">
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
                    <h4 className="font-2xl fw_600 ff_thicccboi_bold color_dark_black">
                      Custom Pricing
                      <span className="color_blue font-22 ">/ month</span>
                    </h4>
                    <ul className="list-unstyled mt-md-4 pt-2  mb-0">
                      <div className="d-flex gap-2 ">
                        <img
                          className="check_icon"
                          src={check}
                          alt="check icon"
                        />
                        <li className="font-lg  fw_500 ff_thicccboi_medium color_dark_black">
                          Multiple CRM & marketing platform integrations
                        </li>
                      </div>
                      <div className="d-flex gap-2  mt-2 mt-lg-3 ">
                        <img src={check} alt="check icon" />
                        <li className="font-lg  fw_500 ff_thicccboi_medium color_dark_black ">
                          Accurate campaign lead data{" "}
                        </li>
                      </div>
                      <div className="d-flex gap-2  mt-2 mt-lg-3 ">
                        <img
                          className="check_icon"
                          src={check}
                          alt="check icon"
                        />
                        <li className="font-lg  fw_500 ff_thicccboi_medium color_dark_black ">
                          Full access to reports
                        </li>
                      </div>
                      <div className="d-flex gap-2  mt-2 mt-lg-3 ">
                        <img
                          className="check_icon"
                          src={check}
                          alt="check icon"
                        />
                        <li className="font-lg  fw_500 ff_thicccboi_medium color_dark_black ">
                          Unlimited team members
                        </li>
                      </div>
                      <div className="d-flex gap-2  mt-2 mt-lg-3 ">
                        <img
                          className="check_icon"
                          src={check}
                          alt="check icon"
                        />
                        <li className="font-lg  fw_500 ff_thicccboi_medium color_dark_black ">
                          Algorithm optimized for retargeting
                        </li>
                      </div>
                      <div className="d-flex gap-2  mt-2 mt-lg-3 ">
                        <img
                          className="check_icon"
                          src={check}
                          alt="check icon"
                        />
                        <li className="font-lg  fw_500 ff_thicccboi_medium color_dark_black ">
                          Dedicated account manager
                        </li>
                      </div>
                    </ul>
                  </div>
                  <div className="text-center pt-4 mt-2">
                    <button className="leads_btn border-0 font-md fw_500 ff_thicccboi_medium color_white">
                      Start My Free Trial
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-xl-11">
              <div className="position-relative">
                <div className="campaign_arrow position-absolute">
                  <img src={campaignarrow} alt="campaign-arrow-img" />
                </div>
                <div className="main_campaign_box position-relative">
                  <div className="white_box p-3">
                    <h3 className="font-xxl  ff_thicccboi_medium color_dark_black">
                      Every{" "}
                      <span className="color_blue fw_800">Main Campaign</span>{" "}
                      plan includes unlimited team members and comes packed with
                      powerful enterprise features. Our pricing plans are
                      designed to offer growing discounts as your business
                      scales up.
                    </h3>
                  </div>
                  <h3 className="font-28 fw-bold ff_thicccboi_bold color_dark_black text-center pt-4">
                    14 Day Free Trial Included with all Plans
                  </h3>
                  <p className="font-xl fw_500 ff_thicccboi_medium color_blue text-center pt-1 mb-0">
                    Get Started with no credit card required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Plansdesigned;
