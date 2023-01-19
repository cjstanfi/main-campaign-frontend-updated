import React, { useState } from "react";
import { PlusIcon } from "./common/icons";
const LeadsDropdownTabs = () => {
  const [hello, setHello] = useState(false);
  return (
    <>
      <section className="">
        <div className="pt-4 pb-3 text-nowrap over_y_hidden overflow_x_auto_dropdown  ">
          <button className="font-sm fw_600 ff_thicccboi_semibold color_white leads_filter_btn text-nowrap">
            + Add Filters
          </button>

          <button onClick={() => setHello(!hello)}>Hello</button>
          {hello ? (
            <div className="position-absolute bg-danger">
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
            </div>
          ) : (
            ""
          )}

          <button className="font-sm fw_600 ff_thicccboi_semibold color_gray leads_dropdown_btn text-nowrap ms-3 ms-sm-4">
            All Owners
          </button>

          <button className="font-sm fw_600 ff_thicccboi_semibold color_gray leads_dropdown_btn text-nowrap ms-3 ms-sm-4">
            Select Dates
          </button>

          <button className="font-sm fw_600 ff_thicccboi_semibold color_gray leads_dropdown_btn text-nowrap ms-3 ms-sm-4">
            All Lable
          </button>

          <button className="font-sm fw_600 ff_thicccboi_semibold color_gray border-0 bg-transparent text-nowrap ms-3 ms-sm-4">
            <span className="into_icon d-inline-block me-1">
              <PlusIcon />
            </span>
            Clear Filters
          </button>
        </div>
      </section>
    </>
  );
};

export default LeadsDropdownTabs;
