import React, { useEffect, useState } from "react";
import { Question } from "../componentsForStepOne/Question";
import { StepOneLabel } from "../componentsForStepOne/StepOneLabel";
import { StepOneButton } from "../componentsForStepOne/StepOneButton";
import { Header } from "../components/Header";
import { OneProgressBar } from "../components/OneProgressBar";

const StepOne = () => {
  const [answerValue, setAnswerValue] = useState("");
  const [checkButton, setCheckButton] = useState(true);

  useEffect(() => {
    if (answerValue) {
      setCheckButton(false);
    } else {
      setCheckButton(true);
    }
  }, [answerValue]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <OneProgressBar />
          <div className="question">
            <Question />
            <StepOneLabel
              placeholder="Ваш ответ"
              inputType="text"
              labelValue={answerValue}
              labelChange={setAnswerValue}
            />
            <StepOneButton checkButton={checkButton} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
