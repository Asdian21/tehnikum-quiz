import React, { useState, useContext } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/Header";
import { LinkButton } from "../components/LinkButton";
import { ThemeContext } from "../new_contexts/ThemeContext";
import { AnswerLabel } from "../components/AnswerLabel";

const StepFour = () => {
  const { theme } = useContext(ThemeContext);
  const [number, setNumber] = useState("");

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
      <div className="container">
        <div className="wrapper">
          <div className="emoji-quiz">
            <ProgressBar currentStep={4} currentValue="100%" />
            <div className="question">
              <Header headerType="h2" headerText="4. Занимательный вопрос" />
              <ul className="level-variants">
                {levelVariants.map((elem) => (
                  <AnswerLabel
                    id={elem.id}
                    AnswerLabel={elem.levelId}
                    key={elem.id}
                    labelChange={() => setNumber(elem.levelId)}
                  />
                ))}
                <li className="variant-wrapper">
                  <input required type="radio" name="variant" id="variant-1" />
                  <label htmlFor="variant-1">1</label>
                </li>
                <li className="variant-wrapper">
                  <input required type="radio" name="variant" id="variant-2" />
                  <label htmlFor="variant-2">2</label>
                </li>
                <li className="variant-wrapper">
                  <input required type="radio" name="variant" id="variant-3" />
                  <label htmlFor="variant-3">3</label>
                </li>
                <li className="variant-wrapper">
                  <input required type="radio" name="variant" id="variant-4" />
                  <label htmlFor="variant-4">4</label>
                </li>
                <li className="variant-wrapper">
                  <input required type="radio" name="variant" id="variant-5" />
                  <label htmlFor="variant-5">5</label>
                </li>
              </ul>
              <LinkButton path="/thanks" headerText="Далее" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
