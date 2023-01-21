import React, { useState } from "react";
import ToolTipIcon from "../../assets/images/svg/cards-icon.svg";
import ToolTipArrowIcon from "../../assets/images/svg/tooltip-icon.svg";

const Tooltip = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <>
      <div className="position-relative d-inline ms-5ps-5">
        <img
          onMouseOver={() => setShowTooltip(true)}
          onMouseOut={() => setShowTooltip(false)}
          className="cursor_pointer ms-5ps-5"
          src={ToolTipIcon}
          alt="ToolTipIcon"
        />
        <div className={showTooltip ? "custom_tooltip" : "d-none"}>
          <img
            className="position-absolute tooltip_arrow"
            src={ToolTipArrowIcon}
            alt="tooltip-icon"
          />

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
