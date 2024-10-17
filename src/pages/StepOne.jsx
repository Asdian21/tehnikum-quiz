import React, { useEffect, useState, useContext } from "react";
import { StepOneLabel } from "../components/StepOneLabel";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { ProgressBar } from "../components/ProgressBar";
import { LinkButton } from "../components/LinkButton";
import { ThemeContext } from "../new_contexts/ThemeContext";
import { useLocation, useNavigate } from "react-router-dom";

const StepOne = () => {
  const location = useLocation();
  const previousNameValue = location.state?.nameValue || "";
  const previousPhoneValue = location.state?.phoneValue || "";

  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const [eshkereValue, setEshkereValue] = useState("");
  const [checkButton, setCheckButton] = useState(true);
  const [eshkereError, setEshkereError] = useState(false);

  const eshkereRegex = /^[a-zA-Zа-яА-ЯёЁ]{1,20}$/;

  const goToNextPage = () => {
    navigate("/step-two", {
      state: {
        previousNameValue,
        previousPhoneValue,
        eshkereValue,
      },
    });
  };

  const handleClick = () => {
    const isEshkereError = !eshkereRegex.test(eshkereValue);
    setEshkereError(isEshkereError);

    if (!isEshkereError) {
      goToNextPage();
    }
  };

  useEffect(() => {
    if (eshkereValue) {
      setCheckButton(false);
    } else {
      setCheckButton(true);
    }
  }, [eshkereValue]);

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
                labelValue={eshkereValue}
                labelChange={setEshkereValue}
                hasError={eshkereError}
              />
              <AppButton
                buttonText="Далее"
                isDisabled={checkButton}
                buttonClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
