import React, { useState } from "react";
import {
  leadsformsData,
  leadsLableData,
  leadsOwnerData,
} from "../common/Helper";
import { PlusIcon, SelectIcon } from "../common/Icons";
const LeadsDropdownTabs = () => {
  const [showvalue, setShowvalue] = useState("1999-11-30");
  const [show, setShow] = useState(false);
  const handleChangeTabs = (obj) => {
    setShow(false);
    setSelectedItem(obj);
  };
  const [ownershow, setOwnershow] = useState(false);
  const handleChangeTabsOwner = (obj) => {
    setOwnershow(false);
    setSelectedItemTwo(obj);
  };
  const [lable, setLable] = useState(false);
  const handleChangeTabsLable = (obj) => {
    setLable(false);
    setSelectedItemThree(obj);
  };
  const [selectedItem, setSelectedItem] = useState(leadsformsData[0]);
  const [selectedItemTwo, setSelectedItemTwo] = useState(leadsOwnerData[0]);
  const [selectedItemThree, setSelectedItemThree] = useState(leadsLableData[0]);
  return (
    <>
      <section>
        <div className=" pb-3 over_y_hidden overflow_x_auto_dropdown leads_dropdown d-flex align-items-center">
          <button className="font-sm fw_600 ff_thicccboi_semibold color_white leads_filter_btn text-nowrap">
            + Add Filters
          </button>
          <div className="custom_select">
            <h4
              className="mb-0 font-sm fw_600 ff_thicccboi_semibold color_gray leads_dropdown_btn text-nowrap"
              onClick={() => setShow(!show)}
            >
              {selectedItem.value}
              <span className={`select_arrow ${show && "rotate_180"} ps-2`}>
                <SelectIcon />
              </span>
            </h4>
            {show && (
              <ul className="mb-0 list-unstyled font-sm">
                {leadsformsData &&
                  leadsformsData.map((obj, index) => (
                    <li
                      className="py-2 px-3 font-sm"
                      onClick={() => handleChangeTabs(obj)}
                      key={index}
                    >
                      {obj.value}
                    </li>
                  ))}
              </ul>
            )}
          </div>
          <div className="custom_select">
            <h4
              className="mb-0 font-sm fw_600 ff_thicccboi_semibold color_gray leads_dropdown_btn text-nowrap"
              onClick={() => setOwnershow(!ownershow)}
            >
              {selectedItemTwo.value}
              <span
                className={`select_arrow ${ownershow && "rotate_180"} ps-2 `}
              >
                <SelectIcon />
              </span>
            </h4>
            {ownershow && (
              <ul className="mb-0 list-unstyled font-sm">
                {leadsOwnerData &&
                  leadsOwnerData.map((obj, index) => (
                    <li
                      className="py-2 px-3 font-sm"
                      onClick={() => handleChangeTabsOwner(obj)}
                      key={index}
                    >
                      {obj.value}
                    </li>
                  ))}
              </ul>
            )}
          </div>
          <input
            onChange={(e) => setShowvalue(e.target.value)}
            value={showvalue}
            type="date"
            placeholder="Select Dates"
            className="font-sm fw_600 ff_thicccboi_semibold color_gray leads_dropdown_btn text-nowrap calendar_input"
          />
          <div className="custom_select">
            <h4
              className="mb-0 font-sm fw_600 ff_thicccboi_semibold color_gray leads_dropdown_btn text-nowrap"
              onClick={() => setLable(!lable)}
            >
              {selectedItemThree.value}
              <span className={`select_arrow ${lable && "rotate_180"} ps-2 `}>
                <SelectIcon />
              </span>
            </h4>
            {lable && (
              <ul className="mb-0 list-unstyled font-sm">
                {leadsLableData &&
                  leadsLableData.map((obj, index) => (
                    <li
                      className="py-2 px-3 font-sm"
                      onClick={() => handleChangeTabsLable(obj)}
                      key={index}
                    >
                      {obj.value}
                    </li>
                  ))}
              </ul>
            )}
          </div>
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
