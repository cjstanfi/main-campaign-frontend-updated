import React from "react";

const Business = () => {
  return (
    <>
      <section className="px-lg-5 px-3 py-2">
        <div className="box">
          <h3 className="ff_thicccboi_bold font-xl color_gray mb-0">
            Business Name Setting
          </h3>
          <p className="fw-normal color_gray font-md mb-0">
            update your Business Name
          </p>

          <form
            action=""
            className="mt-5 mx-auto col-sm-10 col-md-8 col-lg-7 col-xl-5"
          >
            <div className="d-flex align-items-center">
              <div className="w-100">
                <label
                  className="ff_thicccboi_bold font-xl color_gray"
                  htmlFor="business_name"
                >
                  Business Name
                </label>
                <input
                  placeholder="Main Capaign"
                  className="form-control mt-1 profile_input border-0 py-3 "
                  type="text"
                  name="business_name"
                  id="business_name"
                />
              </div>
            </div>
          </form>
          <div className="mt-md-4 text-end">
            <button className="mt-5 border-0 text-white save_btn px-4 py-2">
              Save
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Business;
