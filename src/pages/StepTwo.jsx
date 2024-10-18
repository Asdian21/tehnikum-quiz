import React, { useState, useContext, useEffect } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/Header";
import { AnswerLabel } from "../components/AnswerLabel";
import { AppButton } from "../components/AppButton";
import { LinkButton } from "../components/LinkButton";
import { ThemeContext } from "../new_contexts/ThemeContext";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useLocation, useNavigate } from "react-router-dom";

const StepTwo = () => {
  const location = useLocation();
  const { previousNameValue, previousPhoneValue, eshkereValue } =
    location.state || "";

  const { theme } = useContext(ThemeContext);
  const [course, setCourse] = useState(null);
  const [checkButton, setCheckButton] = useState(true);

  const navigate = useNavigate();
  const goToNextPage = () => {
    navigate("/step-three", {
      state: {
        previousNameValue,
        previousPhoneValue,
        eshkereValue,
        course,
      },
    });
  };

  const variants = [
    {
      id: "variant-1",
      courseName: "Frontend",
    },
    {
      id: "variant-2",
      courseName: "Python",
    },
    {
      id: "variant-3",
      courseName: "DATA Analytics",
    },
    {
      id: "variant-4",
      courseName: "UX/UI",
    },
  ];

  useEffect(() => {
    if (course) {
      setCheckButton(false);
    } else {
      setCheckButton(true);
    }
  }, [course]);

  const handleClick = () => {
    if (course) {
      goToNextPage();
    }
  };

  return (
    <div className={`container ${theme === "dark" ? "_dark" : ""}`}>
      <div className="container">
        <div className="wrapper">
          <div className="variants-quiz">
            <ProgressBar currentStep={2} currentValue="50%" />
            <div className="question">
              <Header headerType="h2" headerText="Какой курс вас интересует?" />
              <ul className="variants">
                {variants.map((elem) => (
                  <AnswerLabel
                    id={elem.id}
                    AnswerLabel={elem.courseName}
                    key={elem.id}
                    labelChange={() => setCourse(elem.courseName)}
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
    </div>
  );
};

export default StepTwo;
