import React from "react";
import { FacebookIcon } from "./common/Icons";
const Facebook = () => {
  return (
    <>
      <section className="px-lg-5 px-3 py-2">
        <div className="box overflow-y-scroll">
          <h3 className="ff_thicccboi_bold font-xl color_gray mb-0">
            Facebook Settings
          </h3>
          <p className="ff_thicccboi_medium color_gray font-md mb-0">
            update your Facebook Settings
          </p>
          <div className="mt-5">
            <div className="p-4 facebook_card mx-auto d-flex flex-column flex-sm-row justify-content-between">
              <div className="d-flex">
                <FacebookIcon />
                <div className="ms-4 mt-2">
                  <h3 className="ff_thicccboi_bold font-xl color_gray mb-0 ">
                    Facebook Account
                  </h3>
                  <p className="ff_thicccboi_medium color_gray font-md mb-0 mt-3">
                    Johnwick/124351852
                  </p>
                </div>
              </div>
              <div className="mt-3 mt-sm-2  d-flex flex-column ms-5 ps-2 ps-sm-0 ms-sm-0">
                <a
                  className="text-decoration-none color_blue font-sm ff_thicccboi_medium "
                  href="#"
                >
                  Change account
                </a>
                <div className="">
                  <button className=" border-0 text-white save_btn px-4 py-2 mt-3">
                    Connected
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 mt-4 facebook_card mx-auto d-flex justify-content-between">
              <div className="d-flex">
                <div>
                  <FacebookIcon />
                </div>
                <div className="ms-4 mt-2">
                  <h3 className="ff_thicccboi_bold font-xl color_gray mb-0 ">
                    Facebook Pixel
                  </h3>
                  <p className="ff_thicccboi_medium fw_400 color_gray font-md mb-0 mt-3">
                    Track your Facebook campaigns, see conversion rates, and
                    more.
                  </p>
                  <button className="mt-3 border-0 text-white save_btn px-4 py-2">
                    Connect
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-md-5 mt-3 pt-lg-5 text-end">
            <button className="mt-5 border-0 text-white save_btn px-4 py-2">
              Save
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facebook;