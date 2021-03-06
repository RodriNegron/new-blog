import React from "react";
import { useField } from "formik";

function TextField({ label, ...props }) {
  const [field] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field}>{label}</label>
      <input
        className="form-control shadow-none"
        {...field}
        {...props}
        autoComplete="off"
      />
    </div>
  );
}

export default TextField;
