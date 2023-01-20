import React from "react";

const DashBoardCalendarly = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div>
          <input className="date_input" type="date" />
        </div>
        <div className="ps-3 px-md-3">
          <input className="date_input" type="date" />
        </div>
      </div>
    </>
  );
};

export default DashBoardCalendarly;
