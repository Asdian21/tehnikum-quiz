import React from "react";

export const StepOneLabel = ({
  labelValue,
  labelChange,
  inputType,
  placeholder,
}) => {
  return (
    <label className="input-wrapper">
      <input
        required
        type={inputType}
        name="answer"
        placeholder={placeholder}
        value={labelValue}
        onChange={(e) => labelChange(e.target.value)}
      />
    </label>
  );
};
