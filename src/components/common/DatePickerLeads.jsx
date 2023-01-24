import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SelectIcon } from "./Icons";

const DatePickerLeads = () => {
  const [startDate, setStartDate] = useState(null);
  const handleChangeRaw = (value) => {
    if (value === "Dates") {
      setStartDate(addDays(new Date(), 1));
    }
  };
  return (
    <>
      <div className="position-relative">
        <DatePicker
          className="font-sm ff_thicccboi_semibold fw_600 color_gray leads_dropdown_btn calendar_input custom_width"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Select Dates"
          onChangeRaw={(event) => handleChangeRaw(event.target.value)}
        />
        <div className="position-absolute date_picker_icon cursor_pointer">
          <SelectIcon />
        </div>
      </div>
    </>
  );
};

export default DatePickerLeads;
