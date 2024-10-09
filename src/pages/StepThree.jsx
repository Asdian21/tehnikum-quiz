import React from "react";
import { LinkButton } from "../components/LinkButton";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/Header";

const StepThree = () => {
  const [emoji, setEmoji] = useState("");

  const emojiVariants = [
    {
      emoji_id: "var-1",
      emojiName: "laugh",
    },
    {
      emoji_id: "var-2",
      emojiName: "love",
    },
    {
      emoji_id: "var-3",
      emojiName: "cool",
    },
    {
      emoji_id: "var-4",
      emojiName: "shock",
    },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={3} currentValue="75%" />
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
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div> */}
          <div className="question">
            <Header headerType="h2" headerText="Занимательный вопрос" />
            <ul className="emoji-variants">
              {emojiVariants.map((elem) => (
                <AnswerLabel
                  id={elem.emoji_id}
                  AnswerLabel={elem.emojiName}
                  key={elem.emoji_id}
                  labelChange={() => setEmoji(elem.emojiName)}
                />
              ))}
              {/* <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-1" />
                <label htmlFor="variant-1">
                  <img src="./img/laugh.png" alt="laugh" />
                  <p>Ваш ответ 1</p>
                </label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-2" />
                <label htmlFor="variant-2">
                  <img src="./img/hearts.png" alt="hearts" />
                  <p>Ваш ответ 2</p>
                </label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-3" />
                <label htmlFor="variant-3">
                  <img src="./img/smirk.png" alt="smirk" />
                  <p>Ваш ответ 3</p>
                </label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-4" />
                <label htmlFor="variant-4">
                  <img src="./img/fright.png" alt="fright" />
                  <p>Ваш ответ 4</p>
                </label>
              </li> */}
            </ul>
            <LinkButton path="/step-four" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
