import React from "react";

const Security = () => {
  return (
    <>
      <section className="px-lg-5 px-3 py-2">
        <div className="box">
          <h3 className="ff_thicccboi_bold font-xl color_gray mb-0">
            Security
          </h3>
          <p className="fw-normal color_gray font-md mb-0">
            setup account your security
          </p>
          <div className="bg_light_grey p-4 mt-5 mx-auto col-sm-10 col-md-8 col-lg-7 col-xl-5 mt-5">
            <h5 className="ff_thicccboi_bold font-xl color_gray mb-0">
              Two-Factor Authentication
            </h5>
            <p className="fw-normal color_gray font-md mb-0 mt-2">
              Aproven way to protect your account and keep the internet safer
              from cyberattacks by enabling two way authentication.
            </p>
            <div className="text-end">
              <button className="mt-5 border-0 text-white save_btn px-4 py-2">
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
