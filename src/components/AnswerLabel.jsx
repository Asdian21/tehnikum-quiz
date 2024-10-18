import React from "react";

export const AnswerLabel = ({ AnswerLabel, id, labelChange, emojiImg }) => {
  return (
    <li className="variant-wrapper">
      <input
        required
        type="radio"
        name="variants"
        id={id}
        onChange={labelChange}
      />
      <label htmlFor={id}>
        {emojiImg}
        {AnswerLabel}
      </label>
    </li>
  );
};
