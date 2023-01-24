import React from "react";
import Airtable from "../../assets/images/svg/Airtable.svg";
import AirTableIcon from "../../assets/images/svg/AirtableIcon.svg";
import { MaterialIcon } from "../common/Icons";
const Crm = () => {
  return (
    <>
      <section>
        <div className="box">
          <h3 className="ff_thicccboi_bold font-xl color_gray mb-0">
            CRM Settings
          </h3>
          <p className="fw-normal color_gray font-md mb-0">
            update your CRM Settings
          </p>
          <div className="p-4 crm_card mx-auto mt-4 mt-sm-5">
            <div className="mb-4">
              <h3 className="ff_thicccboi_bold font-xl color_gray mb-0 ">
                Current CRM
              </h3>
            </div>
            <div className="mt-3 mt-sm-2 d-flex justify-content-sm-between align-items-sm-center flex-column flex-sm-row">
              <div className="bg-white px-4 py-3 border_radius_18 airtable">
                <img src={Airtable} alt="Airtable" />
              </div>
              <div className="text-sm-end mt-3 mt-sm-0">
                <a
                  className="text-decoration-none color_blue font-sm ff_thicccboi_medium ms-2 ms-sm-0 me-sm-2"
                  href="#"
                >
                  Change CRM
                </a>
                <div className="">
                  <button className=" border-0 text-white common_btn px-4 py-2 mt-3">
                    Connected
                  </button>
                </div>
              </div>
            </div>
          </div>
          <form action="" className="mt-3 mx-auto crm_card_input">
            <div className="d-flex align-items-center">
              <div className="w-100">
                <label
                  className="ff_thicccboi_bold font-xl color_gray"
                  htmlFor="account_no"
                >
                  CRM Account Name
                </label>
                <input
                  placeholder="Airtab"
                  className="form-control mt-1 profile_input border-0 py-3 "
                  type="text"
                  name="account_no"
                  id="account_no"
                />
              </div>
              <div className="ms-3 ms-sm-4">
                <label
                  className="ff_thicccboi_bold font-xl color_gray "
                  htmlFor="icon"
                >
                  CRM Icon
                </label>
                <div className="crm_icon_bg d-flex align-items-center px-2 mt-1 ">
                  <img src={AirTableIcon} alt="AirTableIcon" />
                  <div className="ms-4 material_icon d-flex align-items-center justify-content-center">
                    <MaterialIcon />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className=" text-end">
            <button className="mt-5 border-0 text-white common_btn px-4 py-2">
              Save
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Crm;
