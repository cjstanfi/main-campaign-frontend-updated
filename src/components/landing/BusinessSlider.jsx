import React from "react";
import James from "../../assets/images/landing/png/james-img.png";
import Kathie from "../../assets/images/landing/png/kathie-img.png";
import Bershan from "../../assets/images/landing/png/bershan-img.png";
import NextTech from "../../assets/images/landing/png/next_tech_img.png";
import CodeSync from "../../assets/images/landing/png/code_sync_img.png";
import Urawarrior from "../../assets/images/landing/png/urawarrior_img.png";
import Slider from "react-slick";
const BusinessSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <section>
        <div className="container custom_container business_slider">
          <h2 className="mt-5 pt-5 text-center ff_thicccboi_bold fw-bold color_dark_black font-5xl">
            Businesses generate more{" "}
            <span className="d-xxl-block"> revenue with Main Campaign</span>
          </h2>

          <Slider {...settings}>
            <div className="p-lg-3 pt-3 p-2 business_slider_img p-xxl-4">
              <div className="business_slider_card p-4 position-relative">
                <img
                  className="translate-middle start-50 top-0 position-absolute business_slider_card_icon"
                  src={NextTech}
                  alt="next-tech"
                />
                <h3 className="business_slider_card_heading ff_thicccboi_bold font-24 color_light_black">
                  Next Technologies
                </h3>
                <p className="mb-4 ff_thicccboi_medium font-md fw-medium color_gray">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.”{" "}
                </p>
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      className="business_founder_img"
                      src={James}
                      alt="james-img"
                    />
                  </div>
                  <div className="ms-2 ">
                    <h5 className="mb-0 ff_thicccboi_bold color_light_black font-xl fw-bold">
                      James
                    </h5>
                    <p className="mb-0 ff_thicccboi_medium color_gray font-sm">
                      Co-Founder at Slash next technologies.
                    </p>
                  </div>
                </div>
                <hr className="m-0 my-4" />
                <div className="text-center py-1">
                  <button className="leads_btn px-5 ff_thicccboi_bold fw-bold font-sm text-white">
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className="p-lg-3 pt-3 p-2 business_slider_img p-xxl-4">
              <div className="business_slider_card p-4 position-relative">
                <img
                  className="translate-middle start-50 top-0 position-absolute business_slider_card_icon"
                  src={CodeSync}
                  alt="CodeSync"
                />
                <h3 className="business_slider_card_heading ff_thicccboi_bold font-24 color_light_black">
                  CodeSync Inc.
                </h3>
                <p className="mb-4 ff_thicccboi_medium font-md fw-medium color_gray">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.”{" "}
                </p>
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      className="business_founder_img"
                      src={Kathie}
                      alt="Kathie-img"
                    />
                  </div>
                  <div className="ms-2 ">
                    <h5 className="mb-0 ff_thicccboi_bold color_light_black font-xl fw-bold">
                      Kathie
                    </h5>
                    <p className="mb-0 ff_thicccboi_medium color_gray font-sm">
                      Director and Founder at CodeSync Inc.
                    </p>
                  </div>
                </div>
                <hr className="m-0 my-4" />
                <div className="text-center py-1">
                  <button className="leads_btn px-5 ff_thicccboi_bold fw-bold font-sm text-white">
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className="p-lg-3 pt-3 p-2 business_slider_img p-xxl-4">
              <div className="business_slider_card p-4 position-relative">
                <img
                  className="translate-middle start-50 top-0 position-absolute business_slider_card_icon"
                  src={Urawarrior}
                  alt="Urawarrior"
                />
                <h3 className="business_slider_card_heading ff_thicccboi_bold font-24 color_light_black">
                  Urawarrior
                </h3>
                <p className="mb-4 ff_thicccboi_medium font-md fw-medium color_gray">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.”{" "}
                </p>
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      className="business_founder_img"
                      src={Bershan}
                      alt="Bershan-img"
                    />
                  </div>
                  <div className="ms-2 ">
                    <h5 className="mb-0 ff_thicccboi_bold color_light_black font-xl fw-bold">
                      Bershan Shaw
                    </h5>
                    <p className="mb-0 ff_thicccboi_medium color_gray font-sm">
                      Founder at Urawarrior
                    </p>
                  </div>
                </div>
                <hr className="m-0 my-4" />
                <div className="text-center py-1">
                  <button className="leads_btn px-5 ff_thicccboi_bold fw-bold font-sm text-white">
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className="p-lg-3 pt-3 p-2 business_slider_img p-xxl-4">
              <div className="business_slider_card p-4 position-relative">
                <img
                  className="translate-middle start-50 top-0 position-absolute business_slider_card_icon"
                  src={NextTech}
                  alt="next-tech"
                />
                <h3 className="business_slider_card_heading ff_thicccboi_bold font-24 color_light_black">
                  Next Technologies
                </h3>
                <p className="mb-4 ff_thicccboi_medium font-md fw-medium color_gray">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.”{" "}
                </p>
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      className="business_founder_img"
                      src={James}
                      alt="james-img"
                    />
                  </div>
                  <div className="ms-2 ">
                    <h5 className="mb-0 ff_thicccboi_bold color_light_black font-xl fw-bold">
                      James
                    </h5>
                    <p className="mb-0 ff_thicccboi_medium color_gray font-sm">
                      Co-Founder at Slash next technologies.
                    </p>
                  </div>
                </div>
                <hr className="m-0 my-4" />
                <div className="text-center py-1">
                  <button className="leads_btn px-5 ff_thicccboi_bold fw-bold font-sm text-white">
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className="p-lg-3 pt-3 p-2 business_slider_img p-xxl-4">
              <div className="business_slider_card p-4 position-relative">
                <img
                  className="translate-middle start-50 top-0 position-absolute business_slider_card_icon"
                  src={CodeSync}
                  alt="CodeSync"
                />
                <h3 className="business_slider_card_heading ff_thicccboi_bold font-24 color_light_black">
                  CodeSync Inc.
                </h3>
                <p className="mb-4 ff_thicccboi_medium font-md fw-medium color_gray">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.”{" "}
                </p>
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      className="business_founder_img"
                      src={Kathie}
                      alt="Kathie-img"
                    />
                  </div>
                  <div className="ms-2 ">
                    <h5 className="mb-0 ff_thicccboi_bold color_light_black font-xl fw-bold">
                      Kathie
                    </h5>
                    <p className="mb-0 ff_thicccboi_medium color_gray font-sm">
                      Director and Founder at CodeSync Inc.
                    </p>
                  </div>
                </div>
                <hr className="m-0 my-4" />
                <div className="text-center py-1">
                  <button className="leads_btn px-5 ff_thicccboi_bold fw-bold font-sm text-white">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default BusinessSlider;
