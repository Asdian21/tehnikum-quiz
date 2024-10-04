import React, { useEffect, useState } from "react";
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
            <StepOneButton checkButton={checkButton} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
