import React from "react";
import MasterCard from "../../assets/images/svg/mastercard_logo.svg";
import { PlusIcon } from "../common/Icons";
const Billing = () => {
  return (
    <>
      <>
        <section>
          <div className="box">
            <h3 className="ff_thicccboi_bold font-xl color_gray mb-0">
              Payment Method
            </h3>
            <p className="fw-normal color_gray font-md mb-0">
              update your Payment Methods
            </p>

            <form
              action=""
              className="mt-4 mt-sm-5 mx-auto col-sm-12 col-md-10 col-xl-5"
            >
              <h5 className="text-black ff_thicccboi_bold font-xl mb-3 ">
                Payment Options
              </h5>
              <div className="bg_light_grey p-3">
                <div className="text-end ">
                  <a className="color_light_red cursor_pointer text-decoration-none ff_thicccboi_medium font-sm fw_500">
                    Delete
                  </a>
                </div>
                <div className="d-flex">
                  <img src={MasterCard} alt="MasterCard" />
                  <span className="ff_thicccboi_bold font-xl color_gray mb-0 ms-4">
                    **** &nbsp; **** &nbsp; **** &nbsp; 5214
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-4">
                  <div>
                    <span className="font-md color_gray ff_thicccboi_medium">
                      Exp:
                    </span>
                    <span className="font-md color_gray ff_thicccboi_semibold">
                      {" "}
                      4/2025
                    </span>
                  </div>
                  <span className="font-lg color_gray ff_thicccboi_medium">
                    credit
                  </span>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <button className="bg_light_grey border-0 px-5 py-3 font-md color_gray ff_thicccboi_semibold d-flex align-items-center">
                  <PlusIcon />
                  <span className="ps-2">Add New Card</span>
                </button>
              </div>
              <h5 className="text-black ff_thicccboi_bold font-xl mt-4 mt-sm-5">
                Billing
              </h5>
              <div className="mt-3 p-2 bg_light_grey d-flex flex-column flex-sm-row">
                <button className="bg_light_blue col-12  col-sm-6 border-0 py-2 text-white ff_thicccboi_semibold font-xl">
                  Monthly
                </button>
                <button className="col-12 col-sm-6 mt-2 border-0 py-2 bg-transparent color_gray ff_thicccboi_medium font-md">
                  Yearly{" "}
                  <span className="color_light_grey"> (Get 2 Month Free)</span>
                </button>
              </div>
              <div className="d-flex align-items-center mt-3">
                <div className="w-100">
                  <h5 className="text-black ff_thicccboi_bold font-xl mt-4 mb-3 ">
                    Subscription
                  </h5>
                  <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center bg_light_grey px-2 px-sm-4 py-3">
                    <span className="ff_thicccboi_bold font-md color_gray">
                      Regular Monthly Subscription - 59$ / month
                    </span>
                    <a
                      href=""
                      className="text-decoration-none color_light_grey font-sm ff_thicccboi_medium mt-2 mt-sm-0"
                    >
                      Change
                    </a>
                  </div>
                </div>
              </div>
            </form>
            <div className="mt-md-5  text-end">
              <button className="mt-5 border-0 text-white common_btn px-4 py-2">
                Save
              </button>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Billing;
