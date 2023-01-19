import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { PlusIcon } from "./common/icons";
const LeadsDropdownTabs = () => {
  return (
    <>
      <section className="">
        <div className="pt-4 pb-3 d-flex align-items-center overflow-auto">
          <button className="font-sm fw_600 ff_thicccboi_semibold color_white leads_filter_btn text-nowrap">
            + Add Filters
          </button>
          <button className="font-sm fw_600 ff_thicccboi_semibold color_gray leads_dropdown_btn text-nowrap ms-3 ms-sm-4">
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="bg-\transparent border-0 p-0"
              >
                All Forms
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </button>
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
