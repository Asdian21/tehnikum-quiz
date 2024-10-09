import React, { useEffect, useState } from "react";
import { StepOneLabel } from "../components/StepOneLabel";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { ProgressBar } from "../components/ProgressBar";
import { LinkButton } from "../components/LinkButton";

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
          <ProgressBar currentStep={1} currentValue="25%" />
          <div className="question">
            <Header
              headerType="h2"
              headerText="1. Нужно ли получать специальное IT образование?"
            />
            <StepOneLabel
              placeholder="Ваш ответ"
              inputType="text"
              labelValue={answerValue}
              labelChange={setAnswerValue}
            />
            <LinkButton path="/step-two" headerText="Далее" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
