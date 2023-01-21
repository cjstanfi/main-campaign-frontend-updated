import React, { useState } from "react";
import { PlusIcon } from "../common/Icons";
import Dropdown from "react-bootstrap/Dropdown";
const LeadsDropdownTabs = () => {
  const [hello, setHello] = useState(false);
  return (
    <>
      <section className="">
        <div className=" pb-3 over_y_hidden overflow_x_auto_dropdown leads_dropdown d-flex align-items-center">
          <button className="font-sm fw_600 ff_thicccboi_semibold color_white leads_filter_btn text-nowrap">
            + Add Filters
          </button>
          <button className="font-sm fw_600 ff_thicccboi_semibold color_gray leads_dropdown_btn text-nowrap ">
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="bg-transparent border-0 p-0 color_gray"
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

          <button className="font-sm fw_600 ff_thicccboi_semibold color_gray leads_dropdown_btn text-nowrap ">
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="bg-transparent border-0 p-0 color_gray"
              >
                All Owners
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </button>

          <button className="font-sm fw_600 ff_thicccboi_semibold color_gray leads_dropdown_btn text-nowrap ">
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="bg-transparent border-0 p-0 color_gray"
              >
                Select Dates
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </button>

          <button className="font-sm fw_600 ff_thicccboi_semibold color_gray leads_dropdown_btn text-nowrap ">
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="bg-transparent border-0 p-0 color_gray"
              >
                All Lable
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </button>

          <button className="font-sm fw_600 ff_thicccboi_semibold color_gray border-0 bg-transparent text-nowrap ">
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
