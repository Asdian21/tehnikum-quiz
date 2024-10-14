import React, { useEffect, useState, useContext } from "react";
import { StepOneLabel } from "../components/StepOneLabel";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { ProgressBar } from "../components/ProgressBar";
import { LinkButton } from "../components/LinkButton";
import { ThemeContext } from "../new_contexts/ThemeContext";

const StepOne = () => {
  const { theme } = useContext(ThemeContext);
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
    <div className={`container ${theme === "dark" ? "_dark" : ""}`}>
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
    </div>
  );
};

export default StepOne;
