import React from "react";
import { Sale } from "../componentsForStepOne/Sale";
import { SaleValue } from "../componentsForStepOne/SaleValue";
import { Question } from "../componentsForStepOne/Question";
import { ErrorMessage } from "../componentsForStepOne/ErrorMessage";

const StepOne = () => {
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
            <label className="input-wrapper">
              <input
                required
                type="text"
                name="answer"
                placeholder="Ваш ответ"
              />
              <ErrorMessage />
            </label>
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
