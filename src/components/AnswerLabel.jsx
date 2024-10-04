import React from "react";

export const AnswerLabel = ({ AnswerLabel, id }) => {
  return (
    <li className="variant-wrapper">
      <input required type="radio" name={id} id={id} />
      <label htmlFor={id}>{AnswerLabel}</label>
    </li>
  );
};
