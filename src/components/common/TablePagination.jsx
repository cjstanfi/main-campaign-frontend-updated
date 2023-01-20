import React from "react";

import { TableTabs } from "./Helper";
const TablePagination = () => {
  return (
    <>
      <div className="d-flex pt-4 mt-3">
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
                    ? "d-none d-md-inline"
                    : "table_tabs_btn"
                } me-3 px-3 py-2 table_tabs_btn`}
                key={index}
              >
                {item.pageNo}
              </button>
            );
          })}
      </div>
    </>
  );
};

export default TablePagination;
