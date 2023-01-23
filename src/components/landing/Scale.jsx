import React from "react";
import leads from "../../assets/images/landing/png/leads-center.png";

const Scale = () => {
  return (
    <>
      <section className="mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10">
              <div className="text-center">
                <h2 className="sub_heading">Are you ready to scale?</h2>
                <button className="leads_btn border-0 font-md fw_md ff_thicccboi_medium color_white my-3 my-sm-4">
                  Start My Free Trial
                </button>
                <div className="leads_img mx-auto pt-md-3">
                  <img className="w-100" src={leads} alt="leads-center-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Scale;
