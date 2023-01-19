import React from "react";

const LeadsDropdownTabs = () => {
  const DropDownData = [
    {
      btnone: "+ Add Filters",
    },
    {
      btnone: "All Forms",
    },
    {
      btnone: "All Owners",
    },
    {
      btnone: "Select Dates",
    },
    {
      btnone: "All Lable",
    },
    {
      btnone: "Clear Filters",
    },
  ];
  return (
    <>
      <div>
        {DropDownData &&
          DropDownData.map((val, index) => {
            <div key={index}>
              <button>{val.btnone}</button>
            </div>;
          })}
      </div>
    </>
  );
};

export default LeadsDropdownTabs;
