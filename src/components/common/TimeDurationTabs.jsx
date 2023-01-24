import React, { useState } from "react";
import { timedurationdata } from "./Helper";
import { CalendarIcon } from "./Icons";

const TimeDurationTabs = () => {
  const [avtiveValue, setActiveValue] = useState(
    timedurationdata[timedurationdata.length - 1]
  );

  return (
    <>
      <div className="d-flex align-items-center px-sm-1 py-2 bg_light_grey2 br_12px me-sm-3">
        {timedurationdata.map((obj, index) => (
          <button
            onClick={() => setActiveValue(obj)}
            key={index}
            className={`px-2 px-sm-3 py-2 br_9px mx-1 border-0 text-nowrap ${
              avtiveValue.id === index ? "tab_active" : "bg-transparent"
            }`}
          >
            {obj.value}
          </button>
        ))}
      </div>
      <span className="icon_bg_color border_r_12 cursor_pointer icon_size d-flex align-items-center justify-content-center">
        <CalendarIcon />
      </span>
    </>
  );
};

export default TimeDurationTabs;
