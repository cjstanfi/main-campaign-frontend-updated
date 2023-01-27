import React from "react";
import { Link } from "react-router-dom";
import footerlogo from "../../assets/images/landing/svg/footer-logo.svg";
import facbook from "../../assets/images/landing/svg/fb-icon.svg";
import instagram from "../../assets/images/landing/svg/insta-icon.svg";
import linkdin from "../../assets/images/landing/svg/linkdin-icon.svg";
import cb from "../../assets/images/landing/svg/cb-icon.svg";
import airba from "../../assets/images/landing/svg/airba.svg";
import noguchi from "../../assets/images/landing/svg/noguchi.svg";
import probusinss from "../../assets/images/landing/svg/probusinss.svg";
import brooks from "../../assets/images/landing/svg/brooks.svg";
import airbnb from "../../assets/images/landing/svg/airbnb.svg";
import lokuma from "../../assets/images/landing/svg/lokuma.svg";
import island from "../../assets/images/landing/svg/island.svg";
import Slider from "react-slick";
const Footer = () => {
  //   const sliderRef4 = useRef(null);

  //   useEffect(() => {
  //     if (inView) {
  //       sliderRef4.current.slickPlay();
  //     } else {
  //       sliderRef4.current.slickPause();
  //     }
  //   }, [inView]);
  const settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    infinite: true,
    items: 8,
    slideTransition: "linear",
    autoplaySpeed: 300000,
    autoplayHoverPause: false,
    autoplay: true,
    loop: true,
    slidesToShow: 8,
    cssEase: "ease-in-out",
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 3,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <>
      <footer id="subscribe" className="footer_bg pt-0 pt-sm-5 mt-sm-5">
        <div className="container pt-sm-2">
          <Slider {...settings} className="pt-xl-5">
            <div className="footer_slider_img d-flex align-items-center">
              <img className="w-100" src={noguchi} alt="noguchi" />
            </div>
            <div className="footer_slider_img d-flex align-items-center">
              <img className="w-100" src={airbnb} alt="airbnb" />
            </div>
            <div className="footer_slider_img d-flex align-items-center">
              <img className="w-100" src={probusinss} alt="probusinss" />
            </div>
            <div className="footer_slider_img d-flex align-items-center">
              <img className="w-100" src={airba} alt="airba" />
            </div>
            <div className="footer_slider_img d-flex align-items-center">
              <img className="w-100" src={brooks} alt="brooks" />
            </div>
            <div className="footer_slider_img d-flex align-items-center">
              <img className="w-100" src={lokuma} alt="lokuma" />
            </div>
            <div className="footer_slider_img d-flex align-items-center">
              <img className="w-100" src={island} alt="island" />
            </div>
            <div className="footer_slider_img d-flex align-items-center">
              <img className="w-100" src={noguchi} alt="noguchi" />
            </div>
            <div className="footer_slider_img d-flex align-items-center">
              <img className="w-100" src={airbnb} alt="airbnb" />
            </div>
            <div className="footer_slider_img d-flex align-items-center">
              <img className="w-100" src={probusinss} alt="probusinss" />
            </div>
            <div className="footer_slider_img d-flex align-items-center">
              <img className="w-100" src={airba} alt="airba" />
            </div>
            <div className="footer_slider_img d-flex align-items-center">
              <img className="w-100" src={brooks} alt="brooks" />
            </div>
            <div className="footer_slider_img d-flex align-items-center">
              <img className="w-100" src={lokuma} alt="lokuma" />
            </div>
            <div className="footer_slider_img d-flex align-items-center">
              <img className="w-100" src={island} alt="island" />
            </div>
          </Slider>
          <div className="row gap-3 gap-sm-0 justify-content-center justify-content-between footer-dash-border mt-5 mt-lg-0">
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
                    href="#home"
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
                    href="#contactus"
                  >
                    Contact us
                  </a>
                </li>
                <li className="mt-2 hover_color">
                  <a
                    className="font-md fw-light text-decoration-none color_light_black opacity-75  "
                    href="#faqs"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-auto col-md-6">
              <ul className="list-unstyled max-width-447 mx-auto">
                <li className="font-xl fw-bold color_light_black ff_thicccboi_bold ">
                  Subscribe
                </li>
                <li className=" my-3 py-1 position-relative">
                  <form action="">
                    <input
                      required
                      className="w-100 calendar_input color_light_black email_address"
                      type="emmail"
                      placeholder="Enter email address"
                      name="email"
                      id="email"
                    />
                    <button className="leads_btn ff_thicccboi_semibold text-white top-50 translate-middle-y me-2 position-absolute end-0">
                      Subscribe
                    </button>
                  </form>
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
