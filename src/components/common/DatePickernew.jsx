// import React from 'react'
// import DatePicker from "react-date-picker";
// const DatePickerjs = () => {

//    const [value, onChange] = useState(new Date());

//   return (
//     <div>
//       <DatePicker onChange={onChange} value={value} />
//     </div>
//   );
// }

// export default DatePickerjs

import React, { useState } from "react";
import DatePicker from "react-date-picker";
const DatePickernew = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <DatePicker onChange={onChange} value={value} />
    </div>
  );
};

export default DatePickernew;
