import React, { useState } from "react";

const DashBoardCalendarly = () => {
  const [inputValue, setInputValue] = useState("2022-07-01");
  const [inputValueTwo, setInputValueTwo] = useState("2023-07-01");
  return (
    <>
      <div className="d-flex align-items-center">
        <div>
          <input
            className="date_input"
            type="date"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className="ps-3 px-md-3">
          <input
            className="date_input"
            type="date"
            value={inputValueTwo}
            onChange={(e) => setInputValueTwo(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default DashBoardCalendarly;
