import React, { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/Header";

const StepFour = () => {
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
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={4} currentValue="100%" />
          {/* <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2 _active"></div>
              <div className="indicator__unit indicator__unit-3 _active"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div> */}
          <div className="question">
            <Header headerType="h2" headerText="4. Занимательный вопрос" />
            <ul className="level-variants">
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
            <button type="button" id="next-btn" disabled>
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
