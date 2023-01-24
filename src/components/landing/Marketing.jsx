import React from "react";
import MarketingImg from "../../assets/images/landing/png/marketing-img.png";
import checkImg from "../../assets/images/landing/svg/marketing-check-img.svg";

const Marketing = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-11">
            <h2 className="sub_heading text-center">
              Marketing analytics that <br /> REALLY matter
            </h2>
            <div className="marketing-img mx-auto">
              <img className="w-100" src={MarketingImg} alt="Marketingimg" />
            </div>
            <div className="marketing_box">
              <div className="d-flex gap-3">
                <img className="check_icon mt-2" src={checkImg} alt="" />
                <p className="font-lg fw_500 ff_thicccboi_medium color_dark_blue ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="d-flex gap-3">
                <img className="check_icon mt-2" src={checkImg} alt="" />
                <p className="font-lg fw_500 ff_thicccboi_medium color_dark_blue ">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </div>
              <div className="d-flex gap-3">
                <img className="check_icon mt-2" src={checkImg} alt="" />
                <p className="font-lg fw_500 ff_thicccboi_medium color_dark_blue ">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className="d-flex gap-3">
                <img className="check_icon mt-2" src={checkImg} alt="" />
                <p className="font-lg fw_500 ff_thicccboi_medium color_dark_blue ">
                  Ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketing;
