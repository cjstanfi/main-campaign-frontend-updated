import React from 'react'
import Dropdown from "react-bootstrap/Dropdown";

const AddBussinessDropdown = () => {
  return (
    <>
      <div className="d-sm-flex pt-2 pt-lg-0">
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className="font-md fw-normal color_gray bg-transparent dropdown_tab py-2"
          >
            The Place Fitness (0126589526)
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <button className="ff_thicccboi_semibold font-sm ms-sm-2 border-0 text-white save_btn px-4 py-2 mt-3 mt-sm-0">
          + Add a Business
        </button>
      </div>
    </>
  );
}

export default AddBussinessDropdown