import React from "react";
import "./styles.css";

const InputDefault = ({
  name,
  type,
  placeholder,
  labelContent,
  onChange,
  value,
}) => {
  return (
    <div className="flex column gap-05rem">
      <label htmlFor={name}>{labelContent}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        placeholder={placeholder}
        className="inputDefault"
        required
      />
    </div>
  );
};

export default InputDefault;
