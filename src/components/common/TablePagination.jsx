import React from "react";

import { TableTabs } from "./Helper";
const TablePagination = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-sm-center pt-4 mt-lg-3 flex-column flex-sm-row">
        <div className="d-flex ">
          {TableTabs &&
            TableTabs.map((item, index) => {
              return (
                <button
                  className={`${
                    index === 0
                      ? "table_tabs_btn_active"
                      : index === TableTabs.length - 1
                      ? "table_tabs_btn_active"
                      : index === 2 || index === 3 || index === 4
                      ? "d-none d-lg-inline"
                      : "table_tabs_btn"
                  } me-3 px-3 py-2 table_tabs_btn`}
                  key={index}
                >
                  {item.pageNo}
                </button>
              );
            })}
        </div>
        <span className="ff_thicccboi_semibold font-md color_dark_black mt-3 mt-sm-0">
          11 result showing out of 50
        </span>
      </div>
    </>
  );
};

export default TablePagination;
