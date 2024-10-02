import React, { useEffect, useState } from "react";
import { Sale } from "../componentsForStepOne/Sale";
import { SaleValue } from "../componentsForStepOne/SaleValue";
import { Question } from "../componentsForStepOne/Question";
import { ErrorMessage } from "../componentsForStepOne/ErrorMessage";
import { toBeRequired } from "@testing-library/jest-dom/matchers";
import { StepOneLabel } from "../componentsForStepOne/StepOneLabel";

const StepOne = () => {
  const [answerValue, setAnswerValue] = useState("");

  const [checkButton, setCheckButton] = useState(true);

  const [answerError, setAnswerError] = useState(false);

  const noValue = "";

  const sentAnswer = () => {
    if (!noValue.test(answerValue)) {
      setAnswerError(true);
    } else {
      setAnswerError(false);
    }
  };

  useEffect(() => {
    if (answerValue) {
      setCheckButton(false);
    } else {
      setCheckButton(true);
    }
  });

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                <Sale />
              </span>
              <span className="indicator__value">
                <SaleValue />
              </span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <Question />
            <StepOneLabel />
            <button type="button" disabled id="next-btn">
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
