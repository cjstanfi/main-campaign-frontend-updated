import React from "react";
import { Link } from "react-router-dom";
import footerlogo from "../../assets/images/landing/svg/footer-logo.svg";
import facbook from "../../assets/images/landing/svg/fb-icon.svg";
import instagram from "../../assets/images/landing/svg/insta-icon.svg";
import linkdin from "../../assets/images/landing/svg/linkdin-icon.svg";
import cb from "../../assets/images/landing/svg/cb-icon.svg";
// import Slider from "react-slick";
const Footer = () => {
  //   const sliderRef4 = useRef(null);

  //   useEffect(() => {
  //     if (inView) {
  //       sliderRef4.current.slickPlay();
  //     } else {
  //       sliderRef4.current.slickPause();
  //     }
  //   }, [inView]);
  // const settings = {
  //   dots: true,
  //   arrows: true,
  //   autoplay: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  // };
  return (
    <>
      <footer className="footer_bg">
        <div className="container ">
          {/* <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider> */}
          <div className="row gap-3 gap-sm-0 justify-content-center justify-content-between footer-dash-border ">
            <div className="col-12 col-sm-auto">
              <div className="footer_logo mx-auto mx-sm-0 mb-4">
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
            <div className="col-auto col-md-5">
              <ul className="list-unstyled max-width-447 mx-auto">
                <li className="font-xl fw-bold color_light_black ff_thicccboi_bold ">
                  Subscribe
                </li>
                <li className=" my-3 py-1">
                  <input
                    className="w-100 calendar_input color_light_black email_address"
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
          <div className="row gap-3 justify-content-between mt-md-4 pt-3 ">
            <div className="col-sm-5 text-center text-sm-start">
              <Link className="text-decoration-none font-sm fw-light opacity-75 color_light_black ">
                <span>Privacy Policy • Terms & Conditions</span>
              </Link>
            </div>
            <div className="col-sm-auto ">
              <div className="d-flex gap-3 justify-content-center">
                <a href="https://www.facebook.com/">
                  <img className="footer_icon" src={facbook} alt="facbook" />
                </a>
                <a href="https://www.instagram.com/">
                  <img className="footer_icon" src={instagram} alt="facbook" />
                </a>
                <a href="https://www.linkdin.com/">
                  <img className="footer_icon" src={linkdin} alt="facbook" />
                </a>
                <a href="https://www.cricbuzz.com/">
                  <img className="footer_icon" src={cb} alt="facbook" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
