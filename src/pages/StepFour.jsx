import React, { useState, useContext } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/Header";
import { LinkButton } from "../components/LinkButton";
import { ThemeContext } from "../new_contexts/ThemeContext";
import { AnswerLabel } from "../components/AnswerLabel";
import { AppButton } from "../components/AppButton";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const StepFour = () => {
  const location = useLocation();
  const {
    previousNameValue = "",
    previousPhoneValue = "",
    eshkereValue = "",
    course = "",
    emoji = "",
  } = location.state || {};

  const { theme } = useContext(ThemeContext);
  const [number, setNumber] = useState("");
  const [checkButton, setCheckButton] = useState(true);

  const navigate = useNavigate();
  const goToNextPage = () => {
    navigate("/thanks", {
      state: {
        previousNameValue,
        previousPhoneValue,
        eshkereValue,
        course,
        emoji,
        number,
      },
    });
  };

  useEffect(() => {
    if (number) {
      setCheckButton(false);
    } else {
      setCheckButton(true);
    }
  }, [number]);

  const handleClick = () => {
    if (number) {
      goToNextPage();
    }
  };

  const levelVariants = [
    {
      id: "1_variant",
      levelId: "1",
    },
    {
      id: "2_variant",
      levelId: "2",
    },
    {
      id: "3_variant",
      levelId: "3",
    },
    {
      id: "4_variant",
      levelId: "4",
    },
    {
      id: "5_variant",
      levelId: "5",
    },
  ];

  return (
    <div className={`container ${theme === "dark" ? "_dark" : ""}`}>
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={4} currentValue="100%" />
          <div className="question">
            <Header
              headerType="h2"
              headerText="4. Сколько часов в день вы программируете?"
            />
            <ul className="level-variants">
              {levelVariants.map((elem) => (
                <AnswerLabel
                  id={elem.id}
                  AnswerLabel={elem.levelId}
                  key={elem.id}
                  labelChange={() => setNumber(elem.levelId)}
                />
              ))}
            </ul>
            <AppButton
              buttonClick={handleClick}
              isDisabled={checkButton}
              buttonText="Далее"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
