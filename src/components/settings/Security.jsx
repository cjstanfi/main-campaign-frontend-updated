import React from "react";

const Security = () => {
  return (
    <>
      <section>
        <div className="box">
          <h3 className="ff_thicccboi_bold font-xl color_gray mb-0">
            Security
          </h3>
          <p className="fw-normal color_gray font-md mb-0">
            setup account your security
          </p>
          <div className="bg_light_grey px-3 px-lg-4 px-xxl-5 py-3 py-lg-4 mt-4 mt-sm-5 mx-auto col-sm-12 col-md-10 col-xl-5">
            <h5 className="ff_thicccboi_bold font-xl color_gray mb-0">
              Two-Factor Authentication
            </h5>
            <p className="fw-normal color_gray font-md mb-0 mt-2">
              Aproven way to protect your account and keep the internet safer
              from cyberattacks by enabling two way authentication.
            </p>
            <div className="text-end">
              <button className="mt-5 border-0 text-white common_btn px-4 py-2">
                Enable
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Security;
