import React, { useState } from "react";
import { EyeIcon, EyeCloseIcon } from "../common/Icons";
const Privacy = () => {
  const [showOldPassword, setShowOldPassword] = useState("password");
  const [showNewPassword, setshowNewPassword] = useState("password");
  const [showConPassword, setshowConPassword] = useState("password");
  const showOldPass = () => {
    if (showOldPassword === "password") {
      setShowOldPassword("text");
    } else {
      setShowOldPassword("password");
    }
  };
  const showNewPass = () => {
    if (showNewPassword === "password") {
      setshowNewPassword("text");
    } else {
      setshowNewPassword("password");
    }
  };
  const showConPass = () => {
    if (showConPassword === "password") {
      setshowConPassword("text");
    } else {
      setshowConPassword("password");
    }
  };
  return (
    <>
      <section>
        <div className="box">
          <h3 className="ff_thicccboi_bold font-xl color_gray mb-0">
            Privacy Setting
          </h3>
          <p className="fw-normal  color_gray font-md mb-0">
            update your Password
          </p>

          <form
            action=""
            className="mt-4 mt-sm-5 mx-auto col-sm-12 col-md-10 col-xl-5"
          >
            <div className="d-flex align-items-center">
              <div className="w-100">
                <div className="d-flex justify-content-between align-items-center">
                  <label
                    className="ff_thicccboi_bold font-xl color_gray"
                    htmlFor="email"
                  >
                    Business Name
                  </label>
                  <a
                    className="text-decoration-none color_blue font-sm ff_thicccboi_medium "
                    href="#"
                  >
                    change email
                  </a>
                </div>
                <input
                  placeholder="johnwick42@gmail.com"
                  className="form-control mt-1 profile_input border-0 py-3 px-4"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
            </div>
            <div className="d-flex mt-4 mt-sm-5 align-items-center justify-content-between">
              <h5 className="text-black ff_thicccboi_bold font-xl mb-0 ">
                Password
              </h5>
              <p className="fw-normal color_gray font-sm mb-0">
                Last change 10 Oct, 2022
              </p>
            </div>
            <div className="d-flex align-items-center mt-2">
              <div className="w-100">
                <label
                  className="ff_thicccboi_bold font-xl color_gray"
                  htmlFor="old_password"
                >
                  Enter Old Password
                </label>
                <div className="position-relative">
                  <span
                    onClick={() => showOldPass()}
                    className="position-absolute top-50 z_index_1 end-0 me-4 translate-middle-y cursor_pointer"
                  >
                    {showOldPassword === "password" ? (
                      <EyeIcon />
                    ) : (
                      <EyeCloseIcon />
                    )}
                  </span>
                  <input
                    placeholder="************************"
                    className="form-control mt-1 profile_input border-0 placeholder_padding px-4"
                    type={showOldPassword}
                    name="old_password"
                    id="old_password"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="w-100">
                <label
                  className="ff_thicccboi_bold font-xl color_gray"
                  htmlFor="new_password"
                >
                  Enter New Password
                </label>
                <div className="position-relative">
                  <span
                    onClick={() => showNewPass()}
                    className="position-absolute top-50 z_index_1 end-0 me-4 translate-middle-y cursor_pointer"
                  >
                    {showNewPassword === "password" ? (
                      <EyeIcon />
                    ) : (
                      <EyeCloseIcon />
                    )}
                  </span>
                  <input
                    placeholder="************************"
                    className="form-control mt-1 profile_input border-0 placeholder_padding px-4"
                    type={showNewPassword}
                    name="new_password"
                    id="new_password"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center mt-3">
              <div className="w-100">
                <label
                  className="ff_thicccboi_bold font-xl color_gray"
                  htmlFor="confirm_password"
                >
                  Confirm New Password
                </label>
                <div className="position-relative">
                  <span
                    onClick={() => showConPass()}
                    className="position-absolute top-50 z_index_1 end-0 me-4 translate-middle-y cursor_pointer"
                  >
                    {showConPassword === "password" ? (
                      <EyeIcon />
                    ) : (
                      <EyeCloseIcon />
                    )}
                  </span>
                  <input
                    placeholder="************************"
                    className="form-control mt-1 profile_input border-0 placeholder_padding px-4"
                    type={showConPassword}
                    name="confirm_password"
                    id="confirm_password"
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="mt-sm-3 text-end">
            <button className="mt-5 border-0 text-white common_btn px-4 py-2">
              Save
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
