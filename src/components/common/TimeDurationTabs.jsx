import React, { useState } from "react";
import { timedurationdata } from "./Helper";

const TimeDurationTabs = () => {
  const [avtiveValue, setActiveValue] = useState(
    timedurationdata[timedurationdata.length - 1]
  );

  return (
    <>
      <div className="d-flex align-items-center px-sm-1 py-sm-2 bg_light_grey2 br_12px me-sm-3">
        {timedurationdata.map((obj, index) => (
          <button
            onClick={() => setActiveValue(obj)}
            key={index}
            className={`px-3 py-2 br_9px mx-sm-1 border-0 text-nowrap ${
              avtiveValue.id === index ? "tab_active" : "bg-transparent"
            }`}
          >
            {obj.value}
          </button>
        ))}
      </div>
    </>
  );
};

export default TimeDurationTabs;
