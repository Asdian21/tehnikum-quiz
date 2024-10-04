import React from "react";

export const AnswerLabel = ({ AnswerLabel, id, labelChange }) => {
  return (
    <li className="variant-wrapper">
      <input
        required
        type="radio"
        name="variants"
        id={id}
        onChange={labelChange}
      />
      <label htmlFor={id}>{AnswerLabel}</label>
    </li>
  );
};
