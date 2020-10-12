import React, { SelectHTMLAttributes } from "react";

import "./styles.css";

export default function Select({ name, label, options, ...rest }) {
  return (
    <div className="select-block">
      <label htmlFor={name}></label>
      <select id={name} {...rest}>
        <option value="" disabled selected hidden>
          {label}
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
