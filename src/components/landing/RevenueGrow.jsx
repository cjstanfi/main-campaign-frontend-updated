import React from "react";
import checkImg from "../../assets/images/landing/svg/marketing-check-img.svg";

const RevenueGrow = () => {
  return (
    <>
      <section>
        <div className="container custom_container">
          <div className="row">
            <div className="col">
              <div className="marketing_box">
                <div className="px-xxl-5">
                  <h3 className="font-5xl fw-bold ff_thicccboi_bold color_dark_black text-center">
                    See your revenue grow in{" "}
                    <span className="d-block">
                      real time with our dashboards.
                    </span>
                  </h3>
                </div>
                <div className="d-flex gap-3 pt-2">
                  <img className="check_icon mt-2" src={checkImg} alt="" />
                  <p className="font-lg fw_500 ff_thicccboi_medium color_dark_blue ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div className="d-flex gap-3">
                  <img className="check_icon mt-2" src={checkImg} alt="" />
                  <p className="font-lg fw_500 ff_thicccboi_medium color_dark_blue ">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
                <div className="d-flex gap-3">
                  <img className="check_icon mt-2" src={checkImg} alt="" />
                  <p className="font-lg fw_500 ff_thicccboi_medium color_dark_blue ">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
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
                <div className="d-flex gap-3">
                  <img className="check_icon mt-2" src={checkImg} alt="" />
                  <p className="font-lg fw_500 ff_thicccboi_medium color_dark_blue mb-0">
                    Euis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
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

export default RevenueGrow;
