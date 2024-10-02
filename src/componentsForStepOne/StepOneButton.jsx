import React from "react";

export const StepOneButton = ({ checkButton }) => {
  return (
    <button type="button" disabled={checkButton} id="next-btn">
      Далее
    </button>
  );
};
