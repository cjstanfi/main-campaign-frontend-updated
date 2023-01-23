import React from "react";
import footerlogo from "../../assets/images/landing/svg/footer-logo.svg";
const Footer = () => {
  return (
    <>
      <footer className="footer_bg">
        <div className="container ">
          <div className="row justify-content-between overflow-y footer-dash-border ">
            <div className="col-auto">
              <div className="footer_logo">
                <img className="w-100" src={footerlogo} alt="footer-logo" />
              </div>
            </div>
            <div className="col-auto">
              <ul className="list-unstyled me-3 me-sm-0">
                <li className="font-xl fw-bold color_light_black ff_thicccboi_bold">
                  Company
                </li>
                <li className="mt-2 hover_color">
                  <a
                    className="font-md text-decoration-none fw-light color_light_black opacity-75 "
                    href="#Home"
                  >
                    Home
                  </a>
                </li>
                <li className="mt-2 hover_color">
                  <a
                    className="font-md fw-light text-decoration-none color_light_black opacity-75  "
                    href="#aboutus"
                  >
                    About us
                  </a>
                </li>
                <li className="mt-2 hover_color">
                  <a
                    className="font-md fw-light text-decoration-none color_light_black opacity-75  "
                    href="#pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mt-2 hover_color">
                  <a
                    className="font-md fw-light text-decoration-none color_light_black opacity-75  "
                    href="#start-free-trial"
                  >
                    Start free trial
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-auto">
              <ul className="list-unstyled me-3 me-sm-0">
                <li className="font-xl fw-bold color_light_black ff_thicccboi_bold">
                  Support
                </li>
                <li className="mt-2 hover_color">
                  <a
                    className="font-md text-decoration-none fw-light color_light_black opacity-75 "
                    href="#Contactus"
                  >
                    Contact us
                  </a>
                </li>
                <li className="mt-2 hover_color">
                  <a
                    className="font-md fw-light text-decoration-none color_light_black opacity-75  "
                    href="#FAQs"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-5 ">
              <ul className="list-unstyled max-width-447 mx-auto">
                <li className="font-xl fw-bold color_light_black ff_thicccboi_bold ">
                  Subscribe
                </li>
                <li className=" my-3 py-1">
                  <input
                    className="w-100 calendar_input"
                    type="text"
                    placeholder="Enter email address"
                    name=""
                    id=""
                  />
                </li>
                <li className="font-md fw-light text-decoration-none color_light_black opacity-75">
                  By submitting your email you agree to our Terms of Use and
                  Sale and Privacy Policy. You will receive email communications
                  from us for marketing, informational, and promotional purposes
                  and can opt-out at any time.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
