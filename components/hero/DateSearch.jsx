// "use client";

// import React, { useState } from "react";
// import DatePicker, { DateObject } from "react-multi-date-picker";

// const DateSearch = ({ fieldName, formik }) => {
//   return (
//     <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker">
//       <DatePicker
//         inputClass="custom_input-picker"
//         containerClassName="custom_container-picker"
//         name={fieldName}
//         value={formik.values[fieldName]}
//         onChange={(value) => formik.setFieldValue(fieldName, value)}
//         numberOfMonths={2}
//         offsetY={10}
//         rangeHover
//         format="MMMM DD"
//       />
//       {formik.errors[fieldName] && formik.touched[fieldName] && (
//         <div className="text-danger">{formik.errors[fieldName]}</div>
//       )}
//     </div>
//   );
// };

// export default DateSearch;
"use client";

import React from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

const DateSearch = ({ fieldName, formik, minDate, placeholder, maxDate }) => {
  return (
    <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker">
      <DatePicker
        inputClass="custom_input-picker"
        containerClassName="custom_container-picker"
        name={fieldName}
        value={formik.values[fieldName]}
        minDate={minDate}
        placeholder={placeholder}
        onChange={(value) => formik.setFieldValue(fieldName, value)}
        numberOfMonths={2}
        offsetY={10}
        rangeHover
        maxDate={maxDate ? maxDate : null}
        format="MMMM DD"
      />
      {formik.errors[fieldName] && formik.touched[fieldName] && (
        <div className="text-danger">{formik.errors[fieldName]}</div>
      )}
    </div>
  );
};

export default DateSearch;
