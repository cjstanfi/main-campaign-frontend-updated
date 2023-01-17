import React from "react";
import Icon from "../assets/images/png/Icon.png";
import IconTick from "../assets/images/svg/Icon_tick.svg";
const Profile = () => {
  return (
    <>
      <section className="px-lg-5 px-3 py-2">
        <div className="box">
          <h3 className="ff_thicccboi_bold font-xl color_gray mb-0">
            Profile Picture
          </h3>
          <p className="ff_thicccboi_medium color_gray font-md mb-0">
            update your Profile Picture
          </p>
          <div className="text-center mt-5">
            <div className="position-relative d-inline-block">
              <img
                className="rounded-circle profile_icon_size"
                src={Icon}
                alt="Icon"
              />
              <img
                className="position-absolute top-100 translate_middle_y end-0"
                src={IconTick}
                alt="IconTick"
              />
            </div>
            <br />
            <button className="mt-5 ff_thicccboi_semibold font-md color_gray border-0 px-5 py-3 upload_btn">
              + Upload Picture
            </button>
          </div>

          <form
            action=""
            className="mt-5 mx-auto col-sm-10 col-md-8 col-lg-7 col-xl-5"
          >
            <label
              className="ff_thicccboi_bold font-xl color_gray"
              htmlFor="name"
            >
              First Name
            </label>
            <input
              placeholder="John"
              className="form-control mt-1 profile_input border-0 py-3"
              type="text"
              name="name"
              id="name"
            />
            <label
              className="ff_thicccboi_bold font-xl color_gray mt-4"
              htmlFor="last_name"
            >
              Last Name
            </label>
            <input
              placeholder="Wick"
              className="form-control mt-1 profile_input border-0 py-3"
              type="text"
              name="last_name"
              id="last_name"
            />
          </form>
          <div className="mt-5 pt-5 text-end">
            <button className="mt-5 border-0 text-white save_btn px-4 py-2">
              Save
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;