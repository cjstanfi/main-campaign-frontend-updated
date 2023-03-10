import React from "react";
import HeroImgOne from "../../assets/images/landing/png/hero-1.png";
import HeroImgTwo from "../../assets/images/landing/png/hero-2.png";
const Hero = () => {
  return (
    <>
      <section className="pt-4 pt-xxl-0">
        <div className="container position-relative custom_container">
          <div className="row pb-3 pb-xxl-4">
            <div className="col text-center">
              <h3 className="font-6xl fw-bold ff_thicccboi_bold color_light_black">
                The Most Powerful Offline Lead Conversion Data for your
                <span className="color_blue"> Business.</span>
              </h3>
              <p className="font-xl fw-normal color_light_black">
                Seamless integration with your CRM and Facebook
              </p>
              <form className="pt-1 pt-lg-3">
                <input
                  required
                  className="font-lg fw_500 ff_thicccboi_medium color_black calendar_input landing_hero_input ps-3"
                  type="text"
                  placeholder="Enter you work email"
                />
                <div className="d-flex align-items-center justify-content-center mt-4 pt-1">
                  <div>
                    <button className="font-xl fw-bold ff_thicccboi_bold leads_btn color_white landing_hero_btn">
                      Get Started
                    </button>
                  </div>
                  <div className="ps-3">
                    <p className="font-lg fw-bold ff_thicccboi_bold color_blue mb-0 pe-3">
                      Free 14 days trial.
                    </p>
                    <p className="font-md fw_500 ff_thicccboi_medium color_gray mb-0">
                      no credit card required
                    </p>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-auto d-xxl-none pt-4 text-center mt-lg-2 mt-xxl-0">
              <img
                className="w-100 img_annimation"
                src={HeroImgOne}
                alt="hero-1"
              />
              <img
                className="w-100 pt-2 img_annimation_2"
                src={HeroImgTwo}
                alt="hero-2"
              />
            </div>
          </div>
          <div className="d-none d-xxl-block position-relative text-start hero_img_parent">
            <img
              className="hero_img_one img_annimation"
              src={HeroImgOne}
              alt="hero-1"
            />
            <img
              className="position-absolute bottom-0 end-0 hero_img_two img_annimation_2"
              src={HeroImgTwo}
              alt="hero-2"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
