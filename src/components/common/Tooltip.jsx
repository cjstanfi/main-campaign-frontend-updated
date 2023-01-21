import React, { useState } from "react";
import ToolTipIcon from "../../assets/images/svg/cards-icon.svg";

const Tooltip = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <>
      <div className="position-relative d-inline">
        <img
          onMouseOver={() => setShowTooltip(true)}
          onMouseOut={() => setShowTooltip(false)}
          className="cursor_pointer"
          src={ToolTipIcon}
          alt="ToolTipIcon"
        />

        <div className={showTooltip ? "custom_tooltip" : "d-none"}>
          <p className="mb-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            nulla.
          </p>
        </div>
      </div>
    </>
  );
};

export default Tooltip;
